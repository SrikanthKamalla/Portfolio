import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaReact,
  FaGitAlt,
  FaFigma,
  FaCode,
} from "react-icons/fa";
import { SiMysql, SiPostman, SiRedux } from "react-icons/si";
import "../styles/skills.css";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: FaJs, level: 85, color: "#f7df1e" },
        { name: "Java", icon: FaJava, level: 80, color: "#007396" },
        { name: "SQL", icon: SiMysql, level: 75, color: "#4479a1" },
        { name: "HTML5", icon: FaHtml5, level: 90, color: "#e34c26" },
        { name: "CSS3", icon: FaCss3Alt, level: 85, color: "#1572b6" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "ReactJS", icon: FaReact, level: 85, color: "#61dafb" },
        { name: "Redux", icon: SiRedux, level: 85, color: "#764abc" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 80, color: "#f05032" },
        { name: "Postman", icon: SiPostman, level: 80, color: "#ff6c38" },
        { name: "VS Code", icon: VscVscode, level: 90, color: "#007acc" },
        { name: "Figma", icon: FaFigma, level: 70, color: "#f24e1e" },
      ],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <skill.icon
                        className="skill-icon"
                        style={{ color: skill.color }}
                      />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="leetcode-stats">
          <div className="stats-card">
            <h3>🏆 LeetCode Achievement</h3>
            <div className="stats-content">
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Problems Solved</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Active</span>
                <span className="stat-label">Problem Solver</span>
              </div>
            </div>
            <p className="stats-description">
              Consistent practice on LeetCode, solving algorithmic problems and
              improving problem-solving skills across data structures and
              algorithms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
