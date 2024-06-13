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
    delay: 6.5,
})

const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power1.out" } });
/* INIZIO TL */

tl.from(".block-left", {
    y: -900,
    duration: 0.7,
    ease: "none",
})

tl.add("blockLeft")

tl.from(".black", {
    autoAlpha: 0,
    x: 200,
}, "blockLeft+=0.2")

tl.from(".nero2", {
    y: 1200,
    ease: "none",
}, "blockLeft+=0.2")

tl.from(".blu", {
    y: 200,
    opacity: 0.1,
    ease: "none",
}, "blockLeft+=0.2")

tl.from(".orange", {
    autoAlpha: 0,
    x: 200,
    ease: "none",
}, "blockLeft+=0.2")

/* PARTE 2 */

tl.add("afterOrange")

tl.from(".nero", {
    opacity: 0,
    x: -200,
    ease: "none",
}, "afterOrange+=0.2")

tl.from(".celeste", {
    autoAlpha: 0,
    x: 200,
}, "afterOrange+=0.2")
tl.from(".red", {
    autoAlpha: 0,
    x: 200,
}, "afterOrange+=0.2")

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

/* FINE TL */
tl.eventCallback("onComplete", () => {
    tl.reverse(0).delay(0.5); // Reverse the timeline and add a 1-second delay
    gsap.set(".blocks", {
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


