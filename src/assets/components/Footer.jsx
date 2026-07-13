import { profile, socialLinks } from "../../data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="section-container footer-shell">
        <p>
          Made by <strong>{profile.name}</strong> © {currentYear}
        </p>
        <div>
          {socialLinks.slice(0, 2).map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <Icon />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
