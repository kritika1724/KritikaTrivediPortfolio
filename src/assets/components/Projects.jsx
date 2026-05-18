import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaClock, FaExternalLinkAlt, FaLayerGroup } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A live e-commerce website with real-time product listings, secure user authentication, cart management, and payment integration. Built with a React frontend and deployed for public access.",
      techStack: "React.js, Node.js, Express.js, MongoDB, Bootstrap",
      status: "Completed",
      link: "https://kannauj-attars.onrender.com/",
      color: "rgba(255, 182, 193, 0.2)",
    },
    {
      title: "Stock Monitoring Tool",
      description:
        "Built a stock-tracking app with real-time data, secure authentication, and MongoDB integration. Added unit tests (Jest) and prepping AWS deployment.",
      techStack: "React.js, Node.js, Express.js, MongoDB, Bootstrap",
      link: "https://github.com/kritika1724/Fullstack-stock-monitoring",
      color: "rgba(173, 216, 230, 0.2)",
    },
    {
      title: "Essence Exchange",
      description:
        "Developed a perfume marketplace with secure authentication, ownership-based CRUD operations, and a validated review system for a smoother user experience.",
      techStack: "Node.js, Express.js, MongoDB, EJS",
      status: "Completed",
      link: "https://github.com/kritika1724/EssenceExchange",
      color: "rgba(255, 221, 173, 0.24)",
    },
    {
      title: "Fake News Detection Model",
      description: "Developed a ML model to classify news as fake or genuine.",
      techStack: "Python, Logistic Regression, Pandas, Scikit-learn",
      link: "https://github.com/kritika1724/fakenewsdetection",
      color: "rgba(144, 238, 144, 0.2)",
    },
    {
      title: "Portfolio & College Helpdesk Website",
      description: "Created a responsive personal portfolio and college helpdesk site.",
      techStack: "HTML, CSS, JavaScript",
      link: "https://github.com/kritika1724/portfolio",
      color: "rgba(255, 250, 205, 0.2)",
    },
    {
      title: "Mini Chatting App",
      description:
        "Built a chat app with message creation, editing, deletion, and server-side rendering.",
      techStack: "Node.js, Express, MongoDB, EJS",
      link: "https://github.com/kritika1724/mini-chatting-app-backend",
      color: "rgba(221, 160, 221, 0.2)",
    },
    {
      title: "Express Quora Clone",
      description:
        "A simple Quora-like CRUD web app built with Express.js, EJS, and Method-Override. Users can create, read, update, and delete posts dynamically.",
      techStack: "Express.js, EJS, MongoDB, Node.js",
      status: "Completed",
      link: "https://github.com/kritika1724/Express-quora-clone",
      color: "rgba(135, 206, 250, 0.2)",
    },
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 26, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="projects"
      className="hero-section projects-section section-shell page-fade"
    >
      <div className="particles" aria-hidden="true">
        {[...Array(8)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>

      <div className="section-container">
        <div className="section-heading">
          <span className="section-kicker">Projects</span>
          <h2 className="section-title">Projects that helped me learn by building.</h2>
          <p className="section-copy mx-auto">
            These projects reflect software development, problem solving, and
            experimentation across web and machine learning use cases.
          </p>
        </div>

        <motion.div
          className="project-grid"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {projects.map((project, index) => {
            const status = project.status ?? "Completed";
            const techItems = project.techStack.split(", ");
            const hasLink = project.link && project.link !== "#";

            return (
            <motion.div
              className="h-100"
              key={index}
              variants={cardVariant}
              whileHover={{ y: -8 }}
            >
              <div
                className="project-card section-panel"
                style={{
                  backgroundColor: project.color,
                }}
              >
                <div className="project-top">
                  <div>
                    <span className="project-status">{status}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <span className="tag-chip">
                    <FaLayerGroup />
                    {techItems.length} tools
                  </span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="tech-list">
                  {techItems.map((item) => (
                    <span className="tech-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-link-row">
                  {hasLink ? (
                    <a
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                      <FaExternalLinkAlt />
                    </a>
                  ) : (
                    <span className="disabled-pill">
                      <FaClock />
                      Link coming soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
