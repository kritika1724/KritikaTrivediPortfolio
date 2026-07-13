import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Lenis from "lenis";
import {
  AnimatePresence,
  animate,
  motion as Motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import {
  aboutHighlights,
  aboutSkills,
  education,
  externalLinks,
  heroFocus,
  hobbies,
  navItems,
  profile,
  projects,
  sectionIcons,
  skillGroups,
  socialLinks,
  stats,
} from "./data/portfolio";
import "./App.css";

const sectionIds = ["hero", ...navItems.map((item) => item.id)];

const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const titleWords = ["Hi,", "I", "am", ...profile.name.split(" ")];

function AnimatedText({ children, className = "", delay = 0 }) {
  return (
    <span className={`mask-text ${className}`}>
      <Motion.span
        initial={{ y: "110%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </Motion.span>
    </span>
  );
}

function LoadingScreen() {
  return (
    <Motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
      aria-hidden="true"
    >
      <Motion.div
        className="loading-logo"
        initial={{ y: 18, opacity: 0, scale: 0.94 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>KT</span>
      </Motion.div>
      <Motion.div
        className="loading-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      />
    </Motion.div>
  );
}

function AmbientStage({ activeSection }) {
  return (
    <div className={`site-backdrop section-${activeSection}`} aria-hidden="true">
      <span className="aurora aurora-one" />
      <span className="aurora aurora-two" />
      <span className="aurora aurora-three" />
      <span className="grid-plane" />
    </div>
  );
}

function FloatingParticles() {
  return (
    <div className="floating-particles" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

function TiltCard({ children, className = "", as = "article", ...props }) {
  const Component = Motion[as] ?? Motion.article;
  const shouldReduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue("50%");
  const glareY = useMotionValue("50%");

  const onPointerMove = (event) => {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * 8);
    rotateY.set((px - 0.5) * 10);
    glareX.set(`${px * 100}%`);
    glareY.set(`${py * 100}%`);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <Component
      className={`tilt-card ${className}`}
      style={{
        rotateX,
        rotateY,
        "--glare-x": glareX,
        "--glare-y": glareY,
      }}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      {...props}
    >
      {children}
    </Component>
  );
}

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const numeric = parseFloat(value);
  const isNumeric = Number.isFinite(numeric);
  const animated = useMotionValue(0);
  const rounded = useTransform(animated, (latest) => {
    if (!isNumeric) return value;
    const suffix = value.replace(String(numeric), "");
    return `${Math.round(latest)}${suffix}`;
  });

  useEffect(() => {
    if (!inView || !isNumeric) return;
    const controls = animate(animated, numeric, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [animated, inView, isNumeric, numeric]);

  return (
    <Motion.strong ref={ref}>{isNumeric ? rounded : value}</Motion.strong>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible ? (
        <Motion.button
          className="back-to-top"
          type="button"
          onClick={scrollTop}
          initial={{ opacity: 0, y: 18, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.92 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.94 }}
          aria-label="Back to top"
        >
          <span />
        </Motion.button>
      ) : null}
    </AnimatePresence>
  );
}

function useLenis() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);
    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.lenis;
    };
  }, [shouldReduceMotion]);
}

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="scroll-progress" aria-hidden="true">
      <Motion.span style={{ scaleX: scrollYProgress }} />
    </div>
  );
}

function CustomCursor() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const smoothX = useSpring(mouseX, { stiffness: 240, damping: 32 });
  const smoothY = useSpring(mouseY, { stiffness: 240, damping: 32 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion || window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    const move = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    const enter = () => setIsActive(true);
    const leave = () => setIsActive(false);
    const selector = "a, button, input, textarea, .glass-card";

    window.addEventListener("pointermove", move);
    document.querySelectorAll(selector).forEach((element) => {
      element.addEventListener("pointerenter", enter);
      element.addEventListener("pointerleave", leave);
    });
    return () => {
      window.removeEventListener("pointermove", move);
      document.querySelectorAll(selector).forEach((element) => {
        element.removeEventListener("pointerenter", enter);
        element.removeEventListener("pointerleave", leave);
      });
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <Motion.div
      className="custom-cursor"
      style={{ x: smoothX, y: smoothY }}
      animate={{ scale: isActive ? 1.85 : 1, opacity: isActive ? 0.72 : 1 }}
      transition={{ duration: 0.22 }}
      aria-hidden="true"
    />
  );
}

function RouteScroller() {
  const { pathname } = useLocation();

  useEffect(() => {
    const target =
      pathname === "/"
        ? document.getElementById("hero")
        : document.getElementById(pathname.replace("/", ""));

    if (!target) return;

    requestAnimationFrame(() => {
      if (window.lenis) {
        window.lenis.scrollTo(target, { offset: -86 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [pathname]);

  return null;
}

function SectionHeading({ kicker, title, copy, align = "center" }) {
  return (
    <Motion.div
      className={`section-heading section-heading-${align}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">
        <AnimatedText>{title}</AnimatedText>
      </h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </Motion.div>
  );
}

function MagneticButton({
  children,
  href,
  className = "",
  external = true,
  ariaLabel,
}) {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [ripples, setRipples] = useState([]);

  const handleMove = (event) => {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ripple = {
      id: Date.now(),
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    setRipples((current) => [...current.slice(-2), ripple]);
  };

  return (
    <Motion.a
      href={href}
      className={`magnetic-button ${className}`}
      style={{ x, y }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onBlur={reset}
      onClick={handleClick}
      whileTap={{ scale: 0.98 }}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
      <AnimatePresence>
        {ripples.map((ripple) => (
          <Motion.i
            className="button-ripple"
            key={ripple.id}
            style={{ left: ripple.x, top: ripple.y }}
            initial={{ opacity: 0.35, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            onAnimationComplete={() =>
              setRipples((current) => current.filter((item) => item.id !== ripple.id))
            }
          />
        ))}
      </AnimatePresence>
    </Motion.a>
  );
}

function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const frameY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const spotlightX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const spotlightY = useTransform(mouseY, [0, 1], ["0%", "100%"]);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${spotlightX} ${spotlightY}, rgba(79, 140, 255, 0.18), transparent 30rem)`;

  const onMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width);
    mouseY.set((event.clientY - rect.top) / rect.height);
  };

  return (
    <section
      id="hero"
      className="hero-section section-shell"
      ref={heroRef}
      onMouseMove={onMouseMove}
    >
      <Motion.div
        className="hero-spotlight"
        style={{ background: spotlight }}
        aria-hidden="true"
      />
      <FloatingParticles />

      <div className="section-container hero-grid">
        <Motion.div
          className="hero-copy"
          style={{ y: shouldReduceMotion ? 0 : heroY }}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <Motion.span className="section-kicker hero-kicker" variants={fadeUp}>
            {profile.tagline}
          </Motion.span>
          <Motion.h1 className="hero-title" aria-label={`Hi, I am ${profile.name}`}>
            {titleWords.map((word, wordIndex) => (
              <span className="hero-word-mask" key={`${word}-${wordIndex}`}>
                <Motion.span
                  className={wordIndex >= 3 ? "gradient-text" : undefined}
                  initial={{ y: "110%", opacity: 0, rotateX: 24 }}
                  animate={{ y: "0%", opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.82,
                    delay: 0.18 + wordIndex * 0.065,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </Motion.span>
              </span>
            ))}
          </Motion.h1>
          <Motion.p className="hero-subtitle" variants={fadeUp}>
            {profile.intro}
          </Motion.p>

          <Motion.div className="hero-actions" variants={fadeUp}>
            <MagneticButton href={profile.repositories} className="button-primary">
              View My Projects <FaArrowRight />
            </MagneticButton>
            <MagneticButton href={profile.linkedin} className="button-secondary">
              Connect on LinkedIn <FaLinkedinIn />
            </MagneticButton>
          </Motion.div>

          <Motion.div className="hero-social-row" variants={fadeUp}>
            {socialLinks.slice(0, 2).map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  <Icon />
                  {link.label}
                </a>
              );
            })}
          </Motion.div>
        </Motion.div>

        <Motion.div
          className="profile-stage"
          style={{ y: shouldReduceMotion ? 0 : frameY }}
          initial={{ opacity: 0, x: 42, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <Motion.div
            className="profile-frame"
            animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <div className="profile-avatar" aria-label={profile.name}>
              <span>KT</span>
            </div>
            <Motion.svg
              className="profile-line"
              viewBox="0 0 320 320"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            >
              <Motion.path
                d="M36 198 C72 62, 242 40, 284 154 C326 268, 128 306, 58 226"
                fill="none"
              />
            </Motion.svg>
            <div className="profile-meta-card">
              <span>Current direction</span>
              <strong>Flexible & adaptable</strong>
            </div>
          </Motion.div>
        </Motion.div>
      </div>

      <Motion.div
        className="section-container hero-stat-grid"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {stats.map((stat) => (
          <Motion.div className="metric-card glass-card" variants={fadeUp} key={stat.label}>
            <Counter value={stat.value} />
            <span>{stat.label}</span>
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-shell about-section">
      <div className="section-container about-grid">
        <SectionHeading
          align="left"
          kicker="About Me"
          title="Curious, practical, and always learning."
          copy="I enjoy exploring technology from multiple angles, then turning what I learn into projects that feel useful, interactive, and thoughtfully built."
        />

        <Motion.div
          className="about-story glass-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p>
            Hi! I&apos;m <strong>Kritika Trivedi</strong>, a tech enthusiast who
            loves exploring different technologies, from programming in C to web
            development, cloud concepts, and beyond. I enjoy learning,
            experimenting, and building creative solutions across different
            domains instead of limiting myself to one path.
          </p>
          <p>
            I enjoy transforming ideas into interactive digital experiences
            using clean code, logical thinking, and innovative approaches. My
            curiosity keeps pulling me toward new tools, frameworks, system
            concepts, and smarter ways to build in different kinds of technical
            environments.
          </p>
        </Motion.div>
      </div>

      <Motion.div
        className="section-container focus-grid"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {heroFocus.map((item) => {
          const Icon = item.icon;
          return (
            <TiltCard className="focus-card glass-card" variants={fadeUp} key={item.title}>
              <Motion.span whileHover={{ rotate: 8, y: -2 }}>
                <Icon />
              </Motion.span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </TiltCard>
          );
        })}
      </Motion.div>

      <Motion.div
        className="section-container about-highlight-grid"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {aboutHighlights.map((item) => {
          const Icon = item.icon;
          return (
            <TiltCard className="highlight-card glass-card" variants={fadeUp} key={item.title}>
              <Motion.span whileHover={{ rotate: -8, y: -2 }}>
                <Icon />
              </Motion.span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </TiltCard>
          );
        })}
      </Motion.div>
    </section>
  );
}

function EducationSection() {
  const Icon = sectionIcons.education;

  return (
    <section id="education" className="section-shell">
      <div className="section-container">
        <SectionHeading
          kicker="Education"
          title="My academic journey so far."
          copy="A simple snapshot of the milestones that shaped my technical foundation and where I am continuing to grow."
        />

        <div className="timeline">
          {education.map((item, index) => (
            <Motion.article
              className="timeline-item"
              key={item.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="timeline-dot">
                <Icon />
              </div>
              <div className="timeline-card glass-card">
                <span>{item.year}</span>
                <h3>{item.degree}</h3>
                <p>{item.college}</p>
                <strong>{item.metric}</strong>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const marqueeSkills = skillGroups.flatMap((group) => group.skills);

  return (
    <section id="skills" className="section-shell">
      <div className="section-container">
        <SectionHeading
          kicker="Skills"
          title="Tools I use while learning and building."
          copy="My stack keeps growing, but these are the technologies I use most often across software projects, technical problem solving, and my continued learning journey."
        />

        <Motion.div
          className="skill-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skillGroups.map((group) => (
            <TiltCard className="skill-card glass-card" variants={fadeUp} key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.copy}</p>
              <div className="pill-cloud">
                {group.skills.map((skill) => (
                  <Motion.span
                    className="skill-pill"
                    key={skill}
                    whileHover={{ y: -3, rotate: -1 }}
                    transition={{ type: "spring", stiffness: 360, damping: 22 }}
                  >
                    {skill}
                  </Motion.span>
                ))}
              </div>
            </TiltCard>
          ))}
        </Motion.div>

        <div className="tech-marquee" aria-label="Technology marquee">
          <Motion.div
            className="tech-marquee-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          >
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <span key={`${skill}-${index}`}>{skill}</span>
            ))}
          </Motion.div>
        </div>

        <Motion.div
          className="about-skill-strip"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aboutSkills.map((skill) => (
            <Motion.span className="floating-pill" variants={fadeUp} key={skill}>
              {skill}
            </Motion.span>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}

function ProjectVisual({ project, index }) {
  const initials = project.title
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <div className="project-visual" aria-hidden="true">
      <div className="project-visual-topbar">
        <span />
        <span />
        <span />
      </div>
      <div className="project-visual-content">
        <span className="project-index">0{index + 1}</span>
        <strong>{initials}</strong>
        <small>{project.techStack[0]}</small>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="section-shell projects-section">
      <div className="section-container">
        <SectionHeading
          kicker="Projects"
          title="Projects that helped me learn by building."
          copy="These projects reflect software development, problem solving, and experimentation across web and machine learning use cases."
        />

        <Motion.div
          className="project-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {projects.map((project, index) => (
            <TiltCard
              className="project-card glass-card"
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.005 }}
              key={project.title}
            >
              <ProjectVisual project={project} index={index} />
              <div className="project-body">
                <div className="project-topline">
                  <span>{project.status ?? "Completed"}</span>
                  <span>
                    <FaLayerGroup />
                    {project.techStack.length} tools
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="feature-list">
                  <li>
                    <FaCheck />
                    {project.feature}
                  </li>
                </ul>
                <div className="pill-cloud">
                  {project.techStack.map((tech) => (
                    <Motion.span
                      className="tech-pill"
                      key={tech}
                      whileHover={{ y: -3, scale: 1.04 }}
                    >
                      {tech}
                    </Motion.span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.link.includes("github.com") ? <FaGithub /> : <FaExternalLinkAlt />}
                  {project.link.includes("github.com") ? "GitHub" : "Live Demo"}
                </a>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View Project <FaArrowRight />
                </a>
              </div>
            </TiltCard>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section className="section-shell achievements-section" aria-labelledby="achievement-title">
      <div className="section-container">
        <Motion.div
          className="achievement-band glass-card"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Motion.div variants={fadeUp}>
            <span className="section-kicker">Snapshot</span>
            <h2 id="achievement-title">Focused progress, visible momentum.</h2>
          </Motion.div>
          {stats.map((stat) => (
            <Motion.div className="achievement-metric" variants={fadeUp} key={stat.label}>
              <Counter value={stat.value} />
              <span>{stat.label}</span>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}

function HobbiesSection() {
  return (
    <section id="hobbies" className="section-shell">
      <div className="section-container">
        <SectionHeading
          kicker="Interests"
          title="Hobbies and interests that keep me curious."
          copy="The same curiosity that shows up in my tech journey also shows up in the things I enjoy."
        />

        <Motion.div
          className="hobby-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {hobbies.map((hobby) => {
            const Icon = hobby.icon;
            return (
              <TiltCard className="hobby-card glass-card" variants={fadeUp} key={hobby.title}>
                <div className="hobby-image-wrap">
                  <img src={hobby.img} alt={hobby.title} loading="lazy" />
                </div>
                <div className="hobby-card-body">
                  <Motion.span whileHover={{ rotate: 8, y: -2 }}>
                    <Icon />
                  </Motion.span>
                  <h3>{hobby.title}</h3>
                  <p>{hobby.desc}</p>
                </div>
              </TiltCard>
            );
          })}
        </Motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 2800);
  };

  return (
    <section id="contact" className="section-shell contact-section">
      <div className="section-container contact-grid">
        <SectionHeading
          align="left"
          kicker="Contact"
          title="Let’s build something thoughtful."
          copy="I am open to diverse technical roles where I can contribute, learn quickly, and grow."
        />

        <Motion.div
          className="contact-card glass-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <form onSubmit={handleSubmit} aria-label="Contact form">
            <Motion.label whileFocusWithin={{ y: -2 }}>
              Name
              <input type="text" placeholder="Your name" autoComplete="name" />
            </Motion.label>
            <Motion.label whileFocusWithin={{ y: -2 }}>
              Message
              <textarea rows="5" placeholder="Tell me about the opportunity" />
            </Motion.label>
            <Motion.button
              type="submit"
              className="magnetic-button button-primary form-button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>
                Send Message <FaPaperPlane />
              </span>
            </Motion.button>
          </form>
          <AnimatePresence>
            {submitted ? (
              <Motion.div
                className="success-toast"
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                role="status"
              >
                <Motion.span
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 360, damping: 18 }}
                >
                  <FaCheck />
                </Motion.span>
                Message noted. Connect with me on LinkedIn for the fastest reply.
              </Motion.div>
            ) : null}
          </AnimatePresence>
          <div className="contact-links">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  <Icon />
                  {link.label}
                </a>
              );
            })}
            {externalLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt />
                {link.label}
              </a>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

export default function App() {
  const activeSection = useActiveSection();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useLenis();

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const handleNavigate = useMemo(
    () => (item) => {
      navigate(item.path);
    },
    [navigate],
  );

  return (
    <div className="app-shell">
      <RouteScroller />
      <ScrollProgress />
      <CustomCursor />
      <AmbientStage activeSection={activeSection} />
      <AnimatePresence>{isLoading ? <LoadingScreen /> : null}</AnimatePresence>

      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      <Motion.main
        className="app-main"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isLoading ? 0.35 : 1, y: isLoading ? 10 : 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <HobbiesSection />
        <ContactSection />
      </Motion.main>

      <BackToTop />
      <Footer />
    </div>
  );
}
