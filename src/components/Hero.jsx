import "../css/Hero.css";
import profile from "../assets/profile.png";

import { Typewriter } from "react-simple-typewriter";

import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";

import { SiExpress, SiMysql } from "react-icons/si";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* ================= LEFT SIDE ================= */}

      <div className="hero-text">
        <div
          className="hero-badge"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          🟢 Available for Internship
        </div>

        <p
          className="intro"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Hi, I'm
        </p>

        <h1
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Neeraj <span>Singh</span>
        </h1>

        <h2
          data-aos="fade-right"
          data-aos-delay="450"
        >
          <Typewriter
            words={[
              "Full Stack Web Developer",
              "React Developer",
              "Frontend Developer",
              "Backend Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1800}
          />
        </h2>

        <p
          className="hero-description"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          Passionate BCA student focused on building modern, responsive and
          scalable web applications using React, JavaScript, Node.js,
          Express.js, PHP and MySQL. I enjoy solving real-world problems and
          continuously learning new technologies.
        </p>

        {/* Buttons */}

        <div
          className="hero-buttons"
          data-aos="zoom-in"
          data-aos-delay="700"
        >
          <a href="#projects" className="btn primary">
            View Projects
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>

        {/* Social Icons */}

        <div
          className="hero-social"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          <a
            href="https://github.com/Neerajsingh-01"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/neerajsingh48"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}

      <div
        className="hero-image"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <div className="image-wrapper">
          <div className="image-glow"></div>

          <img src={profile} alt="Neeraj Singh" />

          {/* Floating Tech Icons */}

          <div className="floating-icon react">
            <FaReact />
          </div>

          <div className="floating-icon js">
            <FaJsSquare />
          </div>

          <div className="floating-icon node">
            <FaNodeJs />
          </div>

          <div className="floating-icon express">
            <SiExpress />
          </div>

          <div className="floating-icon mysql">
            <SiMysql />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;