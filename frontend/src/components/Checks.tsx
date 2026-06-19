import { Check } from "lucide-react";
import { checks, benefits } from "../data/siteData";

export default function Checks() {
    return (
        <section className="section" id="checks">
            <div className="container split">
                <div>
                    <div className="section-title left">
                        <span>Напрямки роботи</span>
                        <h2>З чим можна звернутися</h2>
                        <p>
                            Якщо після ДТП виникли питання зі збитками, страховою компанією,
                            судом або оцінкою транспорту — можна отримати експертну та
                            юридичну допомогу.
                        </p>
                    </div>

                    <div className="check-list">
                        {checks.map((item) => (
                            <div className="check-item" key={item}>
                <span>
                  <Check size={16} />
                </span>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="benefits-grid">
                    {benefits.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div className="benefit-card" key={item.text}>
                                <Icon size={26} />
                                <p>{item.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}