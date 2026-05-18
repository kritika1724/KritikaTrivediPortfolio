import "bootstrap/dist/css/bootstrap.min.css";
import "./Hobbies.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import hobby1 from "../hobbies/airplanelight.jpeg";
import hobby2 from "../hobbies/badminton2.jpeg";
import hobby3 from "../hobbies/coding2.jpeg";
import hobby4 from "../hobbies/cooking2.jpeg";
import hobby5 from "../hobbies/yoga.jpeg";
import { FaLaptopCode, FaPlane, FaBasketballBall, FaUtensils, FaSpa } from "react-icons/fa";

export default function Hobbies() {
  const hobbies = [
    {
      title: "Travel",
      desc: "✈️ I love exploring new places, discovering hidden gems, and capturing memorable moments. Traveling inspires me and fuels my creativity!",
      img: hobby1,
      icon: "✈️",
      visual: FaPlane,
    },
    {
      title: "Playing Outdoor Games",
      desc: "🏸 I love staying active by playing outdoor games like badminton and tennis. It keeps me energized, competitive, and refreshed!",
      img: hobby2,
      icon: "🏸",
      visual: FaBasketballBall,
    },
    {
      title: "Coding & Problem Solving",
      desc: "💻 I love solving problems and building creative solutions with code. Experimenting keeps me curious and motivated!",
      img: hobby3,
      icon: "💻",
      visual: FaLaptopCode,
    },
    {
      title: "Cooking & Foodie Adventures",
      desc: "🍲 I love experimenting in the kitchen and trying new recipes. Being a foodie, I enjoy creating and tasting delicious dishes!",
      img: hobby4,
      icon: "🍲",
      visual: FaUtensils,
    },
    {
      title: "Yoga & Mindfulness",
      desc: "🧘‍♀️ Practicing yoga and mindfulness helps me stay focused, balanced, and calm.",
      img: hobby5,
      icon: "🧘‍♀️",
      visual: FaSpa,
    },
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.06 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="hobbies" className="hobbies-section section-shell page-fade">
      <div className="hobby-particles" aria-hidden="true">
        {[...Array(8)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>

      <div className="section-container">
        <div className="section-heading">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hobbies and interests that keep me curious.
          </motion.h2>
          <p className="section-copy mx-auto">
            The same curiosity that shows up in my tech journey also shows up in
            the things I enjoy.
          </p>
        </div>

        <motion.div
          className="hobby-grid"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {hobbies.map((hobby, index) => {
            const Icon = hobby.visual;

            return (
            <motion.div
              key={index}
              className="hobby-card"
              variants={cardVariant}
              whileHover={{ y: -8, rotateZ: 0.4 }}
            >
              <div className="hobby-card-shell">
                <div className="hobby-image-wrap">
                  <div className="hobby-icon-badge">{hobby.icon}</div>
                  <img
                    src={hobby.img}
                    alt={hobby.title}
                    className="hobby-image"
                  />
                </div>
                <div className="hobby-floating-icons">
                  <span>⭐</span><span>✨</span><span>💫</span>
                </div>
                <div className="hobby-card-body">
                  <div className="hobby-title-row">
                    <span className="hobby-title-icon">
                      <Icon />
                    </span>
                    <h3>{hobby.title}</h3>
                  </div>
                  <p>{hobby.desc}</p>
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
