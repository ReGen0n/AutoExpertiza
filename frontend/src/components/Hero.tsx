
import { ArrowRight, Phone } from "lucide-react";
import { contacts } from "../data/siteData";

export default function Hero() {
    return (
        <section className="hero">
            <div className="glow glow-one" />
            <div className="glow glow-two" />
            <div className="hero-grid" />

            <div className="container hero-inner">
                <div
                    className="hero-content"
                >
                    <div className="badge">
                        <span /> Автоекспертиза у Києві
                    </div>

                    <h1>
                        <span className="gradient-text">
                            Автоекспертиза після ДТП.
                            <br />
                            Оцінка збитку та юридичний супровід.
                        </span>
                    </h1>

                    <p>
                        Визначення вартостi матеріального збитку, оцінка автотранспорту,
                        автотехнічні експертизи, спори зі страховими компаніями та
                        юридичний супровід у суді.
                    </p>

                    <div className="hero-actions">
                        <a href="#contact" className="primary-btn">
                            Отримати безкоштовну консультацію <ArrowRight size={18} />
                        </a>
                        <a href={contacts.phoneHref1} className="secondary-btn">
                            <Phone size={18} /> Подзвонити
                        </a>
                    </div>

                    <div className="stats">
                        <div>
                            <strong>ДТП</strong>
                            <span>експертиза</span>
                        </div>
                        <div>
                            <strong>Суд</strong>
                            <span>супровід</span>
                        </div>
                        <div>
                            <strong>Збиток</strong>
                            <span>оцінка</span>
                        </div>
                    </div>
                </div>
                <div className="hero-phones">
                    <a href="tel:+380506074430">+38 (050) 607-44-30</a>
                    <a href="tel:+380964447175">+38 (096) 444-71-75</a>
                    <a href="tel:+380635391570">+38 (063) 539-15-70</a>
                </div>
                <div
                    className="hero-card"
                >
                    <div className="car-image">
                        <div className="report-card">
                            <span>Експертні послуги</span>
                            <h3>27 років професійного досвіду</h3>
                            <div>
                                <small>ДТП</small>
                                <small>Оцінка</small>
                                <small>Суд</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}