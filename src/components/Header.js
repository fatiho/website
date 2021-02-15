import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <a id="home">
        <div className="header-wraper">
            <div className="main-info">
                <h1>Hi. I'm Fatih...</h1>
                <Typed
                    className="typed-text"
                    strings={["Software enthusiast", "History buff", "Teaching assistant"]} 
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    />
                {/* <a href="#" className="btn-main-offer">Resume</a> */}
            </div>
        </div>
        </a>
    )
}

export default Header
