import "../css/Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 data-aos="fade-up">Let's Connect</h2>

      <p className="contact-text" data-aos="fade-up" data-aos-delay="150">
        I'm currently looking for internship opportunities where I can learn,
        build real-world applications, and grow as a Full Stack Web Developer.
        Feel free to reach out through any of the platforms below.
      </p>

      <div className="contact-links">
        <a
          href="mailto:neerajsingh482006@gmail.com"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaEnvelope />
          <span>Email</span>
        </a>

        <a
          href="https://github.com/Neerajsingh-01"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/neerajsingh48"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;