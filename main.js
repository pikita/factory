import './style.css'
import { gsap } from "gsap";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(MotionPathPlugin, TextPlugin);

gsap.to(".pre-chache", {
    delay: 0,
    autoAlpha: 0,
    duration: 0.3,
})

gsap.from(".primary-header", {
    autoAlpha: 0,
    delay: 6,
})

const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power1.out" } });

tl.from(".black", {
    autoAlpha: 0,
    x: 100,
})

tl.from(".block-left", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "none",
    x: -200,
    /* borderRadius: "50% 50%", */
})

tl.from(".nero", {
    opacity: 0,
    x: -200,
    /* duration: 1, */
    ease: "none",
})
tl.from(".nero2", {
    opacity: 0,
    x: -200,
    /* duration: 1, */
    ease: "none",
    /* reversible: false, */
}, "<")

tl.from(".blu", {
    y: 200,
    opacity: 0.1,
    /* duration: 3, */
    ease: "none",
})

tl.from(".celeste", {
    autoAlpha: 0,
    /* delay: 0.2, */
    x: 200,
    /* duration: 3, */
})

tl.from(".red", {
    /* delay: 0.2, */
    /* duration: 3, */
    /*     x: -2000,
        y: 1000, */
    autoAlpha: 0,
    x: 200,
    /* rotation: 180, */
    /*     motionPath: {
            path: pathRed,
        } */
})

tl.from(".orange", {
    /* delay: 0.2, */
    duration: 1,
    autoAlpha: 0,
    x: 200,
    ease: "none",
    /* rotation: 360, */
    /*     motionPath: {
            path: pathOrange,
        } */
}, '<-=1') // parte assieme al .red

tl.from(".centered-text", {
    /* delay: 0.2, */
    duration: 1.5,
    y: 500,
    autoAlpha: 0,
    /* x: 200, */
    ease: "power3.out",
    /* rotation: 360, */
    color: "#0085FE",
}, '<')

tl.eventCallback("onComplete", () => {
    tl.reverse(0).delay(0); // Reverse the timeline and add a 1-second delay
    gsap.set(".block-right", {
        delay: 4,
        zIndex: -999,
    })
});
/* 
MENU --------------........----------++++++++++++++++
*/
const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {

    gsap.set(".nav-list", { y: 0 });
    gsap.from(".nav-list", {
        y: -200,
        duration: 1,
    })

    primaryNav.hasAttribute("data-visible")
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
});


