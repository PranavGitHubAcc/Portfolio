import React from "react";

import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
                    <a href="mailto:pranavmahajan18@gmail.com">
                        pranavmahajan18@gmail.com
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/pranav-suyog-mahajan/">
                        linkedin.com/in/pranav-suyog-mahajan
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("githubIcon.png")}
                        alt="Github icon"
                    />
                    <a href="https://github.com/PranavGitHubAcc">
                        github.com/PranavGitHubAcc
                    </a>
                </li>
            </ul>
        </footer>
    );
};
