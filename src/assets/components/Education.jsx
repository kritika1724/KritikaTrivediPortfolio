import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      college: "AKTU University",
      year: "2022 - 2026",
      cgpa: "7.8",
      bgColor: "rgba(255, 255, 255, 0.15)",
    },
    {
      degree: "Higher Secondary",
      college: "Rajkiya Abhinav Vidyalay",
      year: "2021 - 2022",
      percentage: "78%",
      bgColor: "rgba(255, 255, 255, 0.15)",
    },
    {
      degree: "Secondary School",
      college: "Jagran Public School",
      year: "2019 - 2020",
      percentage: "81%",
      bgColor: "rgba(255, 255, 255, 0.15)",
    },
  ];

  const headingVariant = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="education"
      className="hero-section education-section section-shell page-fade"
    >
      <div className="particles" aria-hidden="true">
        {[...Array(8)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>

      <div className="section-container">
        <motion.div
          className="section-heading"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="section-kicker">Education</span>
          <h2 className="section-title">My academic journey so far.</h2>
          <p className="section-copy mx-auto">
            A simple snapshot of the milestones that shaped my technical
            foundation and where I am continuing to grow.
          </p>
        </motion.div>

        <div className="education-stack">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -42 : 42,
                y: 24,
                scale: 0.97,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              <div className="education-card section-panel">
                <div>
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                    <h3 className="project-title mb-0">
                      {edu.degree}
                    </h3>
                    <span className="education-year">{edu.year}</span>
                  </div>
                  <div className="education-meta">
                    <p className="education-school">{edu.college}</p>
                    <span className="education-value">
                      {edu.degree.toLowerCase().includes("b.tech")
                        ? `CGPA: ${edu.cgpa}`
                        : `Percentage: ${edu.percentage}`}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
