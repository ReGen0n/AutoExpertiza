import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { contacts } from "../data/siteData";

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
        { text: "+38 " + contacts.phone1, href: contacts.phoneHref1 },
        { text: "+38 " + contacts.phone2, href: contacts.phoneHref2 },
        { text: "+38 " + contacts.phone3, href: contacts.phoneHref3 },
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

                    <div className="mobile-phones">
                        {phones.map((phone) => (
                            <a key={phone.href} href={phone.href}>
                                {phone.text}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}