import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./FireFly.css";

export default function Header() {
  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Education", path: "/education" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Hobbies", path: "/hobbies" },
  ];

  const externalLinks = [
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/kritika2117/",
    },
    {
      label: "My Card",
      href: "https://my-card-eight-iota.vercel.app/",
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg sticky-top portfolio-navbar">
      <div className="container portfolio-nav-shell">
        <div className="nav-fireflies" aria-hidden="true">
          {[...Array(16)].map((_, index) => (
            <div key={index} className="firefly"></div>
          ))}
        </div>

        <Link className="navbar-brand portfolio-brand" to="/">
          <span className="portfolio-brand-name">Kritika Trivedi</span>
          <span className="portfolio-brand-role">Software Engineer</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1 fw-semibold">
            {navLinks.map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link portfolio-nav-link${isActive ? " active" : ""}`
                  }
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            {externalLinks.map((item) => (
              <li className="nav-item" key={item.href}>
                <a
                  className="nav-link portfolio-external-link"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
}
