import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { contacts } from "../data/siteData";

export default function Hero() {
    return (
        <section className="hero">
            <div className="glow glow-one" />
            <div className="glow glow-two" />
            <div className="hero-grid" />

            <div className="container hero-inner">
                <motion.div
                    initial={{ opacity: 0, y: 36 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <div className="badge">
                        <span /> Автоекспертиза у Києві
                    </div>

                    <h1>
                        Автоекспертиза після ДТП.{" "}
                        <span>Оцінка збитку та юридичний супровід.</span>
                    </h1>

                    <p>
                        Визначення матеріального збитку, оцінка автотранспорту,
                        автотехнічні експертизи, спори зі страховими компаніями та
                        юридичний супровід у суді.
                    </p>

                    <div className="hero-actions">
                        <a href="#contact" className="primary-btn">
                            Отримати консультацію <ArrowRight size={18} />
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
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.15 }}
                    className="hero-card"
                >
                    <div className="car-image">
                        <div className="report-card">
                            <span>Експертні послуги</span>
                            <h3>{contacts.name}</h3>
                            <div>
                                <small>ДТП</small>
                                <small>Оцінка</small>
                                <small>Суд</small>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}