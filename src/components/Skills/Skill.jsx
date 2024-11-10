import React from "react";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import styles from "./Skill.module.css";

export const Skill = () => {
    return (
        <section className={styles.container} id="skills">
            <h2 className={styles.title}>skills</h2>
            <div className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img
                                    src={getImageUrl(skill.imageSrc)}
                                    alt={skill.title}
                                />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    );
                })}
            </div>
            
        </section>
    );
};
