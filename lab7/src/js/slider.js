import React, { useRef } from "react"

function setUpSlider (el) {
    var sliderWrapper = el
    var sliderPlot = el.firstElementChild
    var m = []
    var rm = []

    sliderPlot.childNodes.forEach (function (child) {
        if (child.nodeName == "IMG") {
            m.push(child.cloneNode())
        }
        else {
            rm.push(child)
        }
    })

    rm.forEach (function (child) {
        child.remove()
    })

    m.forEach (function (child) {
        sliderPlot.appendChild(child)
    })

    var animationDuration = (Number(el.dataset["oneDuration"]) || 2000) * m.length
    var animationDirNormal = (el.dataset["direction"] || "").toLowerCase() != "reverse"

    console.log("anim. duration: " + animationDuration)

    var anim = undefined

    function setAnimation() {
        if (anim != undefined) {
            anim.cancel()
        }
        anim = sliderPlot.animate([
          { transform: animationDirNormal ? 'translateX(0%)' : 'translateX(-50%)' },
          { transform: animationDirNormal ? 'translateX(-50%)' : 'translateX(0%)' }
        ], {
          duration: animationDuration,
          iterations: Infinity
        });
    }

    setAnimation()

    return {
        element: sliderWrapper,
        setOneDuration: function (val) {
            animationDuration = (Number(val) || 2000) * m.length
            setAnimation()
        },
        setDirection: function (val) {
            animationDirNormal = val.toLowerCase() != "reverse"
            setAnimation()
        },
        pause: function () {
            anim.pause()
        },
        resume: function () {
            anim.play()
        }
    }
}

export default function (props) {

    var animationDuration = (Number(props.oneDuration) || 2000) * props.sources.length
    var animationDirNormal = (props.direction || "").toLowerCase() != "reverse"

    const _ref = useRef(null)

    var anim = undefined;

    function animateSelf () {
        if (anim) return;
        anim = _ref.current.animate([
            { transform: animationDirNormal ? 'translateX(0%)' : 'translateX(-50%)' },
            { transform: animationDirNormal ? 'translateX(-50%)' : 'translateX(0%)' }
        ], {
            duration: animationDuration,
            iterations: Infinity
        });
    }

    return (
        <div ref={_ref} onLoad={animateSelf}>
            { props.sources.map ((item, index) => 
                <img key={index} src={item} />
            ) }
            { props.sources.map ((item, index) => 
                <img key={index + props.sources.length} src={item} />
            ) }
        </div>
    )
}
