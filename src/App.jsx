/**
 * @copyright 2024 Syon Chau
 * @license Apache-2.0
 */


/**
 * 
 * Components
 */
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skill from "./Components/Skill";


const App = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Skill />
            </main>
        </>
    )
}

export default App;