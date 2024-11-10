import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Pranav Mahajan</h1>
                <p className={styles.description}>
                    A third year computer science student specializing in Data
                    Science and Full Stack Development
                </p>
                <a
                    href="mailto:pranavmahajan18@gmail.com"
                    className={styles.email}
                >
                    Email me!
                </a>
            </div>
            <img src={getImageUrl("photo.png")} className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
