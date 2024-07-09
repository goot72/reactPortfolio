import React from "react";
import "./about.css";
import About from "../../assets/about.jpeg";

function about() {
    return(
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img id="aboutPic"src={About} alt="" className="about__img"></img>

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">My name is Aaron Gutierrez, i am a beginning full stack engineer. </p>
                        <a href="" className="btn"></a>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default about;