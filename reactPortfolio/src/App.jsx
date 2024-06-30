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
        </>
    ]
};

export default App;