import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import "./FireFly.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const links = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kritika-trivedi-86b213246/",
    },
    {
      label: "GitHub",
      href: "https://github.com/kritika1724",
    },
    {
      label: "Twitter",
      href: "#",
      disabled: true,
    },
  ];

  return (
    <footer className="footer-glass">
      <div className="footer-particles">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="firefly"></div>
        ))}
      </div>

      <div className="section-container footer-shell">
        <div className="footer-copy-block">
          <p className="footer-copy">
            Made with <span className="heart">♥</span> by{" "}
            <strong>Kritika Trivedi</strong> © {currentYear}
          </p>
          <p className="footer-note">
            Learning across software, problem solving, and continuous improvement.
          </p>
        </div>
        <div className="footer-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`footer-link${link.disabled ? " is-disabled" : ""}`}
              target={link.disabled ? undefined : "_blank"}
              rel={link.disabled ? undefined : "noopener noreferrer"}
              onClick={(event) => {
                if (link.disabled) {
                  event.preventDefault();
                }
              }}
              aria-disabled={link.disabled ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
