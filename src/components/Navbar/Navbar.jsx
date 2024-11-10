import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Portfolio
            </a>

            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl("closeIcon.png")
                            : getImageUrl("menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${
                        menuOpen && styles.menuOpen
                    }`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#experience">experience</a>
                    </li>
                    <li>
                        <a href="#skills">skills</a>
                    </li>

                    <li>
                        <a href="#projects">projects</a>
                    </li>
                    <li>
                        <a href="#contact">contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
