import { Check, ChevronRight } from "lucide-react";

export default function Price() {
    const items = [
        "Автоекспертиза після ДТП",
        "Визначення матеріального збитку",
        "Оцінка автотранспорту",
        "Юридична консультація",
        "Супровід у суді",
        "Спори зі страховими компаніями",
    ];

    return (
        <section className="section" id="price">
            <div className="container price-card">
                <div>
                    <span className="eyebrow">Консультація</span>
                    <h2>
                        Зверніться для <span>оцінки ситуації</span>
                    </h2>
                    <p>
                        Вартість послуг залежить від складності справи, обсягу документів,
                        необхідності огляду автомобіля та юридичного супроводу.
                    </p>
                </div>

                <div className="price-box">
                    <h3>Основні напрямки</h3>
                    {items.map((item) => (
                        <div className="price-item" key={item}>
                            <Check size={18} />
                            {item}
                        </div>
                    ))}

                    <a href="#contact" className="primary-btn full">
                        Зв’язатися з експертом <ChevronRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}