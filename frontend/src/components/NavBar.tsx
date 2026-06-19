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

                <a className="nav-button" href="#contact">
                    Замовити
                </a>

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
                </div>
            )}
        </header>
    );
}