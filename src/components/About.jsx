import "../css/About.css";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <h2 data-aos="fade-up">About Me</h2>

      <p
        className="about-text"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        I'm <span>Neeraj Singh</span>, a BCA student at Graphic Era Hill
        University with a passion for Full Stack Web Development. I enjoy
        building responsive, user-friendly web applications while continuously
        improving my skills and exploring modern technologies.
        <br />
        <br />
        My current focus is on React, Node.js, Express.js, PHP, MySQL, and REST
        APIs. I'm actively looking for internship opportunities where I can
        apply my knowledge, learn from experienced developers, and contribute
        to real-world projects.
      </p>

      <div className="about-grid">
        <div className="about-card" data-aos="fade-up" data-aos-delay="200">
          <FaGraduationCap className="about-icon" />
          <h3>Education</h3>
          <p>BCA<br />Graphic Era Hill University</p>
        </div>

        <div className="about-card" data-aos="fade-up" data-aos-delay="300">
          <FaCode className="about-icon" />
          <h3>Focus</h3>
          <p>Full Stack Web Development</p>
        </div>

        <div className="about-card" data-aos="fade-up" data-aos-delay="400">
          <FaLaptopCode className="about-icon" />
          <h3>Experience</h3>
          <p>Academic & Personal Projects</p>
        </div>

        <div className="about-card" data-aos="fade-up" data-aos-delay="500">
          <FaMapMarkerAlt className="about-icon" />
          <h3>Location</h3>
          <p>Uttarakhand, India</p>
        </div>
      </div>
    </section>
  );
}

export default About;