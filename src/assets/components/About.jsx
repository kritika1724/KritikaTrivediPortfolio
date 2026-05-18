// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
import { FaArrowRight, FaCode, FaLightbulb, FaRocket } from "react-icons/fa";


export default function About() {
  const skills = [
    "React.js",
    "Java",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Bootstrap",
    "HTML",
    "CSS",
    "JavaScript",
    "Ethical Hacking",
  ];

  const highlights = [
    {
      icon: FaRocket,
      title: "Hands-on builder",
      copy: "I like learning by making projects that combine logic, structure, and real UI decisions.",
    },
    {
      icon: FaCode,
      title: "Clean execution",
      copy: "I enjoy turning ideas into experiences that feel interactive, readable, and practical.",
    },
    {
      icon: FaLightbulb,
      title: "Curious mindset",
      copy: "Exploring new tools and technologies is a core part of how I keep growing.",
    },
  ];

  const headingVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.15 * i, ease: "easeOut" },
    }),
  };

  const btnVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.6 } },
  };

  const groupVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };

  const surfaceVariant = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="hero-section about-section section-shell page-fade">
      <div className="particles" aria-hidden="true">
        {[...Array(8)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>

      <div className="section-container">
        <motion.h2
          className="section-heading section-heading-left"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <div>
            <span className="section-kicker">About Me</span>
            <h2 className="section-title">Curious, practical, and always learning.</h2>
            <p className="section-copy">
              I enjoy exploring technology from multiple angles, then turning
              what I learn into projects that feel useful, interactive, and
              thoughtfully built.
            </p>
          </div>
        </motion.h2>

        <div className="about-layout">
          <motion.div
            className="section-panel about-avatar-panel"
            variants={cardVariant}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="avatar-badge">KT</div>
            <div className="about-mini-card">
              <span className="section-kicker">Focus</span>
              <p className="mb-0">
                Software development, problem solving, and exploring areas like
                web, cloud, and other technical domains.
              </p>
            </div>
            <div className="about-mini-card">
              <span className="section-kicker">Approach</span>
              <p className="mb-0">
                Learn deeply, build consistently, and keep improving every
                project.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="section-panel about-content-panel"
            custom={1}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="about-copy-grid">
              <p className="section-copy">
                Hi! I&apos;m <strong>Kritika Trivedi</strong>, a tech enthusiast who
                loves exploring different technologies, from programming in C
                to web development, cloud concepts, and beyond. I enjoy
                learning, experimenting, and building creative solutions across
                different domains instead of limiting myself to one path.
              </p>

              <p className="section-copy">
                I enjoy transforming ideas into interactive digital experiences
                using clean code, logical thinking, and innovative approaches.
                My curiosity keeps pulling me toward new tools, frameworks,
                system concepts, and smarter ways to build in different kinds
                of technical environments.
              </p>
            </div>

            <div className="about-skill-grid">
              {skills.map((skill) => (
                <span className="tag-chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4 d-flex flex-wrap gap-3">
              <motion.a
                  href="https://github.com/kritika1724"
                  className="primary-btn"
                  variants={btnVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                  <FaArrowRight />
                </motion.a>
            </div>

            <motion.div
              className="about-highlights"
              variants={groupVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {highlights.map((item) => {
                const HighlightIcon = item.icon;

                return (
                  <motion.div
                    className="about-highlight-card"
                    key={item.title}
                    variants={surfaceVariant}
                    whileHover={{ y: -6 }}
                  >
                    <HighlightIcon />
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
