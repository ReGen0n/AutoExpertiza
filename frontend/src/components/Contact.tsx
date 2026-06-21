import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { contactCards, contacts } from "../data/siteData";

const API_URL: string = "http://127.0.0.1:8080/api/contact";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
        "idle"
    );

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("loading");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            serviceType: formData.get("serviceType"),
            message:
                "Тип звернення: " +
                formData.get("serviceType") +
                "\n\nОпис ситуації: " +
                formData.get("message"),
        };

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Request failed");
            }

            setStatus("success");
            form.reset();
        } catch {
            setStatus("error");
        }
    }

    return (
        <section className="section contact-section" id="contact">
            <div className="container contact-grid">
                <div>
                    <div className="section-title left">
                        <span>Контакти</span>
                        <h2>Зв’яжіться з експертом</h2>
                        <p>
                            {contacts.name}. Автоекспертиза після ДТП, визначення
                            матеріального збитку, оцінка автотранспорту та юридичний супровід.
                        </p>
                    </div>

                    <div className="contact-cards">
                        {contactCards.map((item) => {
                            const Icon = item.icon;

                            return (
                                <a className="contact-card" href={item.href} key={item.value}>
                                    <div>
                                        <Icon size={20} />
                                    </div>
                                    <span>{item.label}</span>
                                    <strong>{item.value}</strong>
                                </a>
                            );
                        })}
                    </div>
                </div>

                <form className="form-card" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <Input name="name" label="Ім’я" placeholder="Ваше ім’я" />
                        <Input name="phone" label="Телефон" placeholder="+38 ..." />
                    </div>

                    <div className="form-row">
                        <Input
                            name="email"
                            label="Email"
                            placeholder="example@gmail.com"
                            type="email"
                            required={false}
                        />

                        <label>
                            <span>Тип звернення</span>
                            <select name="serviceType">
                                <option>Автоекспертиза після ДТП</option>
                                <option>Визначення матеріального збитку</option>
                                <option>Оцінка автотранспорту</option>
                                <option>Юридичний супровід у суді</option>
                                <option>Спір зі страховою компанією</option>
                                <option>Юридична консультація</option>
                                <option>Автотехнічна експертиза</option>
                            </select>
                        </label>
                    </div>

                    <label>
                        <span>Повідомлення</span>
                        <textarea
                            name="message"
                            required
                            placeholder="Коротко опишіть ситуацію: ДТП, страхова компанія, суд, оцінка збитку або інше питання"
                        />
                    </label>

                    <button className="primary-btn full" disabled={status === "loading"}>
                        {status === "loading" ? "Надсилаємо..." : "Надіслати звернення"}
                        <ArrowRight size={18} />
                    </button>

                    {status === "success" && (
                        <p className="success">
                            Звернення надіслано. Ми скоро зв’яжемося з вами.
                        </p>
                    )}

                    {status === "error" && (
                        <p className="error">
                            Не вдалося надіслати звернення. Перевірте, чи запущений backend,
                            або зв’яжіться напряму телефоном.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

function Input({
                   label,
                   name,
                   placeholder,
                   type = "text",
                   required = true,
               }: {
    label: string;
    name: string;
    placeholder: string;
    type?: string;
    required?: boolean;
}) {
    return (
        <label>
            <span>{label}</span>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
            />
        </label>
    );
}