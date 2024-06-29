import React from "react";
import "./app.css";
import sidebar from './components/sidebar/sidebar';
import home from './components/home/home';
import about from './components/about/about';
import portfolio from './components/portfolio/portfolio';
import resume from './components/resume/resume';
import contact from './components/contact/contact';

function App() {
    return [
        <>
        <sidebar />
        <main className='main'>
            <home />
            <about />
            <portfolio />
            <resume />
            <contact />
        </main>
        </>
    ]
};

export default App;