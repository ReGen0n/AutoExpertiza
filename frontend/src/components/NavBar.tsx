import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        ["Послуги", "#services"],
        ["Перевірка", "#checks"],
        ["Процес", "#process"],
        ["Ціна", "#price"],
        ["Контакти", "#contact"],
    ];

    const phones = [
        "+38 (050) 607-44-30",
        "+38 (096) 444-71-75",
        "+38 (063) 539-15-70",
    ];

    return (
        <header className="navbar">
            <div className="container nav-inner">
                <a href="#" className="logo">
                    <span className="logo-icon">
                        <Sparkles size={18} />
                    </span>
                    AutoExpert Kyiv
                </a>

                <nav className="nav-links">
                    {links.map(([label, href]) => (
                        <a key={label} href={href}>
                            {label}
                        </a>
                    ))}
                </nav>

                <div className="nav-order">
                    <a className="nav-button" href="#contact">
                        Замовити
                    </a>

                </div>

                <button className="menu-btn" onClick={() => setOpen(!open)}>
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {open && (
                <div className="mobile-menu">
                    {links.map(([label, href]) => (
                        <a key={label} href={href} onClick={() => setOpen(false)}>
                            {label}
                        </a>
                    ))}

                    <a className="nav-button mobile-order-btn" href="#contact" onClick={() => setOpen(false)}>
                        Замовити
                    </a>

                    <div className="mobile-phones">
                        {phones.map((phone) => (
                            <a key={phone} href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
                                {phone}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}