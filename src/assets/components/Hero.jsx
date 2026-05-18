import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, useReducedMotion } from "framer-motion";
import {
  FaCloud,
  FaGithub,
  FaLaptopCode,
  FaLightbulb,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const focusAreas = [
    {
      icon: FaLaptopCode,
      title: "Technical Foundation",
      copy: "Hands-on experience with software projects, core development concepts, and practical problem solving.",
    },
    {
      icon: FaCloud,
      title: "Project Experience",
      copy: "Built projects across web, software, and machine learning while continuing to explore areas like cloud.",
    },
    {
      icon: FaLightbulb,
      title: "Adaptable Approach",
      copy: "Open to diverse technical roles, quick to learn, and comfortable working with new tools and problem spaces.",
    },
  ];

  const previewCards = [
    {
      label: "About",
      title: "Who I am",
      copy: "A quick introduction to my mindset, interests, and approach to tech.",
      to: "/about",
    },
    {
      label: "Skills",
      title: "What I work with",
      copy: "Languages, frameworks, and tools I use while learning and building.",
      to: "/skills",
    },
    {
      label: "Projects",
      title: "What I have built",
      copy: "A mix of software, web, ML, and hands-on learning projects from my journey.",
      to: "/projects",
    },
  ];

  const stats = [
    { value: "6+", label: "projects in portfolio" },
    { value: "2026", label: "graduation timeline" },
    { value: "Software + ML", label: "current build range" },
    { value: "Open", label: "to technical roles" },
  ];

  const revealUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerCards = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const surfaceReveal = {
    hidden: { opacity: 0, y: 26, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="hero" className="hero-section hero-home section-shell page-fade">
      <div className="hero-ambient" aria-hidden="true">
        <span className="hero-blob hero-blob-one"></span>
        <span className="hero-blob hero-blob-two"></span>
        <span className="hero-orbit-ring"></span>
      </div>

      <div className="particles" aria-hidden="true">
        {[...Array(8)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>

      <div className="section-container">
        <div className="hero-layout">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            <motion.span className="section-kicker" variants={revealUp}>
              Software Engineer • Open to Technical Roles • Always Learning
            </motion.span>
            <motion.h1 className="hero-title" variants={revealUp}>
              <span className="hero-title-line hero-title-intro">Hi,</span>
              <span className="hero-title-line">
                I am <span className="hero-title-name">Kritika Trivedi</span>
              </span>
            </motion.h1>
            <motion.p className="hero-subtitle" variants={revealUp}>
              I build software projects across web and development workflows,
              and I am open to diverse technical roles where I can contribute,
              learn quickly, and grow.
            </motion.p>

            <motion.div className="hero-actions" variants={revealUp}>
              <a
                href="https://github.com/kritika1724?tab=repositories"
                className="primary-btn"
                target="_blank"
                rel="noreferrer"
              >
                View My Projects
              </a>
            </motion.div>

            <motion.div className="hero-socials" variants={revealUp}>
              <a
                className="social-link"
                href="https://github.com/kritika1724"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>
              <a
                className="social-link"
                href="https://www.linkedin.com/in/kritika-trivedi-86b213246/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-panel-shell"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
          >
            <motion.div
              className="section-panel hero-panel"
              animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 7,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }
              }
            >
              <div className="hero-panel-header">
                <span>Current direction</span>
                <span className="status-pill">Flexible & adaptable</span>
              </div>

              <motion.div
                className="hero-focus-grid"
                variants={staggerCards}
                initial="hidden"
                animate="visible"
              >
                {focusAreas.map((item) => {
                  const FocusIcon = item.icon;

                  return (
                    <motion.div
                      className="hero-focus-card"
                      key={item.title}
                      variants={surfaceReveal}
                      whileHover={{ y: -6 }}
                    >
                      <FocusIcon />
                      <strong>{item.title}</strong>
                      <span>{item.copy}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                className="hero-stat-grid"
                variants={staggerCards}
                initial="hidden"
                animate="visible"
              >
                {stats.map((stat) => (
                  <motion.div
                    className="hero-stat"
                    key={stat.label}
                    variants={surfaceReveal}
                    whileHover={{ y: -4 }}
                  >
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="hero-preview-grid"
          variants={staggerCards}
          initial="hidden"
          animate="visible"
        >
          {previewCards.map((card) => (
            <motion.div
              key={card.title}
              variants={surfaceReveal}
              whileHover={{ y: -8 }}
            >
              <Link className="preview-card" to={card.to}>
                <span className="preview-label">{card.label}</span>
                <h2 className="preview-title">{card.title}</h2>
                <p className="preview-copy">{card.copy}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
