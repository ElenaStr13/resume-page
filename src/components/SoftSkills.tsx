function SoftSkills() {

    const skills = [
        "Teamwork",
        "Communication",
        "Problem-solving",
        "Flexibility",
        "Self-learning",
    ];

    return (
        <section>
            <h2>SOFT SKILLS</h2>

            <ul className="soft-skills-list">
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}

export default SoftSkills;