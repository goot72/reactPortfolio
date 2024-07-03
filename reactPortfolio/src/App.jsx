import React from "react";
import "./app.css";
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';

function App() {
    return [
        <>
        <Sidebar />
        <main className='main'>
            <Home />
            <About />
            <Portfolio />
            <Resume />
            <Contact />
        </main>
        <footer className='footer'>
            <a href="https://github.com/goot72" className="button__link">Git Hub</a>
            <a href="https://www.linkedin.com/in/aaron-gutierrez-13a6a7317/" className="button__link">linkedin</a>
            <a href="https://www.instagram.com/aarongutierrez_72/?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" className="button__link">Instagram</a>

        </footer>
        </>

    ]
};

export default App;