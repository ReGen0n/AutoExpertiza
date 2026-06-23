import { process } from "../data/siteData";

export default function Process() {
    return (
        <section className="section" id="process">
            <div className="container">
                <div className="section-title">
                    <span>Процес</span>
                    <h2>Як проходить звернення</h2>
                    <p>
                        Ви описуєте ситуацію, надаєте документи або інформацію по ДТП, після
                        чого формується подальший план дій.
                    </p>
                </div>

                <div className="process-list">
                        {process.map((item, index) => (
                            <div className="process-item" key={item.title}>
                                <div>{index + 1}</div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}