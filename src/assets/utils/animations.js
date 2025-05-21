import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const createElasticAnimation = (elements, options = {}) => {
    const {
        trigger,
        start = "top 80%",
        duration = 1,
        delay = 0.5,
        initialScale = 0.5,
        initialY = 100,
        type = 'elastic'
    } = options

    // Verificar que todos los elementos existan
    if (!elements.every(element => element.current)) return

    // Configuración inicial de los elementos
    gsap.set(elements.map(el => el.current), {
        opacity: 0,
        y: initialY,
        scale: type === 'elastic' ? initialScale : 1
    })

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: trigger.current,
            start: start,
            toggleActions: "play none none none"
        }
    })

    // Crear la animación para cada elemento
    elements.forEach((element, index) => {
        const animationConfig = {
            y: 0,
            opacity: 1,
            duration: duration,
            ease: type === 'elastic' ? "elastic.out(1, 0.5)" : "power2.out"
        }

        if (type === 'elastic') {
            animationConfig.scale = 1
        }

        timeline.to(element.current, animationConfig, index === 0 ? 0 : `-=${delay}`)
    })

    return timeline
} 