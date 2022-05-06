import React from "react"
import ReactDOM from "react-dom"
import Slider from "./js/slider.js"

var s = [
    "assets/images/1.jpg",
    "assets/images/2.jpg",
    "assets/images/3.jpg",
    "assets/images/4.jpg",
    "assets/images/5.jpg",
    "assets/images/6.jpg",
    "assets/images/7.jpg",
    "assets/images/8.jpg"
];

function main () {
    ReactDOM.render (
        <Slider sources={s} oneDuration={4000} />,
        document.getElementById("slider-1")
    )
    ReactDOM.render (
        <Slider sources={s} oneDuration={6000} direction="reverse" />,
        document.getElementById("slider-2")
    )
}

document.onreadystatechange = function () {
    if (document.readyState === "complete") main()
    else window.onload = function () { main() }
}