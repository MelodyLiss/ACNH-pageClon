import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

/**
 * Hook para crear una animación elástica
 * @param {Object} ref - Referencia al elemento a animar
 * @param {Object} options - Opciones de configuración
 * @param {string} options.trigger - Elemento que activa la animación
 * @param {string} options.start - Punto de activación
 * @param {number} options.duration - Duración de la animación
 * @param {number} options.initialScale - Escala inicial
 * @param {number} options.initialY - Posición Y inicial
 */
export const useElasticAnimation = (ref, options = {}) => {
    const {
        trigger,
        start = "top 80%",
        duration = 1,
        initialScale = 0.5,
        initialY = 100
    } = options

    useEffect(() => {
        if (!ref.current) return

        // Configuración inicial
        gsap.set(ref.current, {
            opacity: 0,
            y: initialY,
            scale: initialScale
        })

        // Crear la animación
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: trigger?.current || ref.current,
                start: start,
                toggleActions: "play none none none"
            }
        })

        timeline.to(ref.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: duration,
            ease: "elastic.out(1, 0.5)"
        })

        return () => {
            timeline.kill()
        }
    }, [ref, trigger, start, duration, initialScale, initialY])
} 