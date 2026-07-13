import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { externalLinks, navItems, profile } from "../../data/portfolio";

export default function Header({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const handleNav = (item) => {
    setIsOpen(false);
    onNavigate(item);
  };

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <nav className="nav-shell" aria-label="Primary navigation">
        <button
          className="brand-button"
          type="button"
          onClick={() => handleNav({ path: "/", id: "hero" })}
          aria-label="Go to home"
        >
          <span className="brand-mark">KT</span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </button>

        <button
          className="menu-button"
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links${isOpen ? " is-open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activeSection === item.id ? "active" : ""}
              onClick={() => handleNav(item)}
            >
              {item.label}
            </button>
          ))}
          {externalLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
