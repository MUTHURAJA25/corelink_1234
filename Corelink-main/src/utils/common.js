import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


// Fade up animations
export const initFadeAnimations = () => {
    document.querySelectorAll(".fade-up").forEach((title, i) => {
        gsap.fromTo(
            title,
            { opacity: 0, y: 80 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: title,
                    start: "top 95%",
                    toggleActions: "play none none reverse",
                    id: `fade-up-${i}`,
                    // markers:true
                },
            }
        )
    });
    // Fade up animations
    document.querySelectorAll(".fade-left").forEach((title, i) => {
        gsap.fromTo(
            title,
            { opacity: 0, x: 80 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: title,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                    id: `fade-up-${i}`
                },
            }
        )
    });
    // Fade up animations
    document.querySelectorAll(".fade-right").forEach((title, i) => {
        gsap.fromTo(
            title,
            { opacity: 0, x: -80 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: title,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                    id: `fade-up-${i}`
                },
            }
        )
    })
}