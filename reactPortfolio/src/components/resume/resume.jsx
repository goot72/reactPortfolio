import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";

function resume(){
    return(
        <section className="resume container section" id="resume">
            <h2 className="seciton__title">Experience</h2>

            <div className="resume__container grid">
                <div className="timeline grid">
                    {Data.map((val,id)=>{
                        if(val.category === "education"){
                            return(
                                <Card key={id} icon={val.icon} title={val.title} year={val.year} description={val.description}/>
                            )
                        }
                    })}
                </div>


                <div className="timeline grid">
                    {Data.map((val,index)=>{
                        if(val.category === "experience"){
                            return(
                                <Card  key={index} icon={val.icon} title={val.title} year={val.year} description={val.description}/>
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

export default resume;