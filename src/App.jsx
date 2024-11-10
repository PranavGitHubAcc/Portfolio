import styles from "./App.module.css";
import { Experience } from "./components/Experience/Experience";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skill } from "./components/Skills/Skill";

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Hero />
            <Experience />
            <Skill />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
