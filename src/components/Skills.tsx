const skills = [
    "HTML",
    "CSS",
    "SCSS",
    "Git",
    "GitHub",
    "Material UI",
    "JavaScript",
    "Gulp",
    "React",
    "Angular",
    "TypeScript",
    "MySQL",
    "MongoDB",
    "Node.js",
    "Express",
    "NestJS",
    "IntelliJ IDEA",
];

function Skills() {
    return (
        <section>
            <h2>HARD SKILLS</h2>

            <ul className="skills-list">
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;