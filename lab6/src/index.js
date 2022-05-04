import Slider from "./js/slider.js"

document.sliders = []

function main () {
    document.querySelectorAll(".slider").forEach(function(el){ 
        document.sliders.push(Slider.setUp(el))
    })
}

document.onreadystatechange = function () {
    if (document.readyState === "complete") main()
    else window.onload = function () { main() }
}
