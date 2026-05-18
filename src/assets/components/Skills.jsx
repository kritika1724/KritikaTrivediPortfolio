import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      copy: "Designing responsive, interactive interfaces with a strong focus on usability.",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"],
    },
    {
      title: "Backend",
      copy: "Building application logic, routing, data handling, and API-driven flows.",
      skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "SQL"],
    },
    {
      title: "Programming",
      copy: "Core languages I use to learn concepts, solve problems, and implement solutions.",
      skills: ["Java", "C/C++", "Python"],
    },
    {
      title: "Workflow & Foundations",
      copy: "Tools and fundamentals that support collaboration, version control, and security awareness.",
      skills: ["Git & GitHub", "Ethical Hacking"],
    },
  ];

  const summary = [
    { value: "4", label: "skill clusters" },
    { value: "14+", label: "tools and technologies" },
    { value: "Versatile", label: "technical foundation" },
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.06 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.95, y: 26 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="skills"
      className="hero-section skills-section section-shell page-fade"
    >
      <div className="particles" aria-hidden="true">
        {[...Array(8)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>

      <div className="section-container">
        <div className="section-heading">
          <span className="section-kicker">Skills</span>
          <h2 className="section-title">Tools I use while learning and building.</h2>
          <p className="section-copy mx-auto">
            My stack keeps growing, but these are the technologies I use most
            often across software projects, technical problem solving, and my
            continued learning journey.
          </p>
        </div>

        <motion.div
          className="section-summary-grid"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {summary.map((item) => (
            <motion.div
              className="summary-card section-panel"
              key={item.label}
              variants={cardVariant}
              whileHover={{ y: -6 }}
            >
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-clusters"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillGroups.map((group) => (
            <motion.div
              className="skill-cluster section-panel"
              key={group.title}
              variants={cardVariant}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="skill-cluster-title">{group.title}</h3>
              <p className="skill-cluster-copy">{group.copy}</p>
              <div className="skill-pill-grid">
                {group.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
