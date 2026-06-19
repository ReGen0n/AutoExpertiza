import { motion } from "framer-motion";
import { services } from "../data/siteData";

export default function Services() {
    return (
        <section className="section" id="services">
            <div className="container">
                <div className="section-title">
                    <span>Послуги</span>
                    <h2>Автоекспертиза, оцінка збитку та юридична допомога</h2>
                    <p>
                        Допомога після ДТП, визначення матеріального збитку, оцінка
                        автотранспорту, супровід у суді та спори зі страховими компаніями.
                    </p>
                </div>

                <div className="cards-grid services-wide">
                    {services.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                className="glass-card"
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06 }}
                            >
                                <div className="card-icon">
                                    <Icon size={24} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}