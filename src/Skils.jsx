import React from "react";

export default function Skills(){
    return(
        <>
        <div className="skills" id="skills">
        <h1>Skills</h1>
        <p>I have gained skills in Html, Css, Javascript,React, Mysql </p>
        <p>With variety of projects i gained great experinces in web development.</p>
        <div className="services-card">
            <div className="card">
                <div className="heading">
                <h2>Html</h2></div>
                <div className="c-icon">
                <img src="html.png" alt="html"></img></div>
                <p>I offer perfect HTML services when creating mark-ups for websites</p>

            </div>
            <div className="card">
                <div className="heading">
            <h2>Css</h2>
            </div>
            <div className="c-icon">
            <img src="css.png" alt="css"></img></div>
                <p>I use Css to bring out the best blend when styling websites</p>

            </div>
            <div className="card">
                <div className="heading">
            <h2>Javascript</h2></div>
            <div className="c-icon">
                       <img src="js.png" alt="javascript"></img></div>
                <p>In order to make websites more user friendly and interactive i achieve it using Javascript.</p>

            </div>
            <div className="card">
                <div className="heading">
            <h2>React</h2></div>
            <div className="c-icon">
            <img src="react.png" alt="react"></img></div>
                <p>With the improvements in the tech industry i apply React to bring lightweight and dynamic web applications</p>

            </div>
            <div className="card">
                <div className="heading">
            <h2>Mysql</h2></div>
            <div className="c-icon">
            <img src="mysql.png" alt="mysql"></img></div>
                <p>I use Mysql for databases of my web-applications.</p>

            </div>
        </div>
        </div>
        </>
    )
}