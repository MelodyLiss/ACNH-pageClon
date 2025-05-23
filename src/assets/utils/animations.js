import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animations = () => {
    const timelineRef = useRef(null);

    const presets = {
        bounce: {
            from: { scale: 0.5, opacity: 0 },
            to: { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)", clearProps: "all" }
        },
        bounceBig: {
            from: { scale: 0.2, opacity: 0 },
            to: { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)", clearProps: "all" }
        },
        slideUp: {
            from: { y: 50, opacity: 0 },
            to: { y: 0, opacity: 1, duration: 0.3, ease: "power2.out", clearProps: "all" }
        },
        slideDown: {
            from: { y: -120, opacity: 0 },
            to: { y: 0, opacity: 1, duration: 0.2, ease: "power2.out", clearProps: "all" }
        },
        slideLeft: {
            from: { x: 50, opacity: 0 },
            to: { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", clearProps: "all" }
        },
        slideRight: {
            from: { x: -50, opacity: 0 },
            to: { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", clearProps: "all" }
        },
        fadein: {
            from: { opacity: 0 },
            to: { opacity: 1, duration: 0.5, ease: "power2.out", clearProps: "all" }
        },
        fadeinBG: {
            from: { opacity: 0, scale: 0.5 },
            to: { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out", clearProps: "all" }
        },
        exitLeft: {
            from: { x: 0, opacity: 1 },
            to: { x: -300, opacity: 0, duration: 0.5, ease: "power2.inOut", clearProps: "all" }
        },
        enterRight: {
            from: { x: 300, opacity: 0 },
            to: { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", clearProps: "all" }
        },
        floatLoop: {
            y: -60,
            duration: 6,
            repeat: -1,             // infinito
            yoyo: true,             // sube y baja
            ease: "sine.inOut"      // movimiento suave
        }

    };

    // Crear timeline con ScrollTrigger
    const createScrollTimeline = (triggerElement) => {
        return gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                start: "top 50%",
                end: "top 20%",
                toggleActions: "play none none none",
                once: true,
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
    const animateBasic = (timeline, element, presetName, position = ">") => {
        const preset = presets[presetName] || presets.slideUp;
        if (!element || !preset) return;

        timeline.fromTo(element, preset.from, preset.to, position);
    };

    // animaciones infinitas
    const animateLooping = (element, presetName) => {
        const preset = presets[presetName];
        if (!element || !preset) return;

        gsap.to(element, preset);
    };

    const animateSwitch = (timeline, oldEl, newEl, exitPreset = "exitLeft", enterPreset = "enterRight") => {
        const exit = presets[exitPreset];
        const enter = presets[enterPreset];

        if (oldEl && exit) {
            timeline.fromTo(oldEl, exit.from, exit.to, 0);
        }
        if (newEl && enter) {
            timeline.fromTo(newEl, enter.from, enter.to, ">"); 
        }
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
        animateLooping,
        animateSwitch,
        cleanAnimate,
        timelineRef,

    };
};
