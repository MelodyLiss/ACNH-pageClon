import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animations = () => {
    const timelineRef = useRef(null);

    const presets = {
        bounce: {
            from: { scale: 0.9, opacity: 0 },
            to: { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", clearProps: "all" }
        },
        slideUp: {
            from: { y: 20, opacity: 0 },
            to: { y: 0, opacity: 1, duration: 0.2, ease: "power2.out", clearProps: "all" }
        },
        slideLeft: {
            from: { x: 50, opacity: 0 },
            to: { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", clearProps: "all" }
        },
        fadein: {
            from: { opacity: 0 },
            to: { opacity: 1, duration: 0.5, ease: "power2.out", clearProps: "all" }
        }
    };

    // Crear timeline con ScrollTrigger
    const createScrollTimeline = (triggerElement) => {
        return gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                start: "top 80%",
                toggleActions: "play none none none",
                once: true
            }
        });
    };

    // Animación en paralelo
    const animateParallel = (timeline, elements = [], presetOption) => {
        if (!Array.isArray(elements) || elements.length === 0) return;

        elements.forEach((element, index) => {
            if (!element) return;
            const presetName = Array.isArray(presetOption) ? presetOption[index] : presetOption;
            const preset = presets[presetName] || presets.slideUp;

            timeline.fromTo(element, preset.from, preset.to, "<"); // "<" = al mismo tiempo
        });
    };

    // Animación individual
    const animateBasic = (timeline, element, presetName) => {
        const preset = presets[presetName] || presets.slideUp;
        if (!element || !preset) return;

        timeline.fromTo(element, preset.from, preset.to);
    };

    // Limpiar 
    const cleanAnimate = () => {
        timelineRef.current?.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
        timelineRef.current = null;
        
    };

    return {
        presets,
        createScrollTimeline,
        animateParallel,
        animateBasic,
        cleanAnimate,
        timelineRef,
        
    };
};
