import React from 'react';
import "./slider.css"
const Slider = () => {
    const next = () => {
        document.getElementById("img1").style.zIndex = 2
        document.getElementById("img2").style.zIndex = 3
        document.getElementById("img3").style.zIndex = 1
        document.getElementById("next1").style.display="none"
        document.getElementById("next2").style.display="block"
        document.getElementById("img2").style.transform = "translate"
    }
    const next2 = () => {
        document.getElementById("img1").style.zIndex = 1
        document.getElementById("img2").style.zIndex = 2
        document.getElementById("img3").style.zIndex = 3
        document.getElementById("next2").style.display="none"
        document.getElementById("next3").style.display="block"
    }
    const next3 = () => {
        document.getElementById("img1").style.zIndex = 3
        document.getElementById("img2").style.zIndex = 2
        document.getElementById("img3").style.zIndex = 1
        document.getElementById("next3").style.display="none"
        document.getElementById("next1").style.display="block"
    }
    return (
        <div className="slider">
            <button id="next1" onClick={next}>Next</button>
            <button id="next2" onClick={next2}>Next</button>
            <button id="next3" onClick={next3}>Next</button>

            <div className="images">
                <div className="slides">
                    <img id="img1" src="https://www.roscosmos.ru/media/img/foto/2018/wallpapers/0014.jpg"/>
                    <img id="img2" src="http://conceptartworld.com/wp-content/uploads/2013/10/Mathieu_Latour-Duhaime_Concept_Art_Thief_01-680x340.jpg"/>
                    <img id="img3" src="http://conceptartworld.com/wp-content/uploads/2013/10/Mathieu_Latour-Duhaime_Concept_Art_Thief_07-680x340.jpg"/>
                </div>
            </div>
        </div>
    );
};

export default Slider;