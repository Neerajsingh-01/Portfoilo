import "../css/Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiC,
  SiCplusplus,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "REST APIs", icon: "🌐" },
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Python", icon: <FaPython /> },
  ];

  return (
    <section className="skills" id="skills">
      <h2 data-aos="fade-up">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={skill.name}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;