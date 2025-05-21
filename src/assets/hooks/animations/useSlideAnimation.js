import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

/**
 * Hook para crear una animación de deslizamiento
 * @param {Object} ref - Referencia al elemento a animar
 * @param {Object} options - Opciones de configuración
 * @param {string} options.trigger - Elemento que activa la animación
 * @param {string} options.start - Punto de activación
 * @param {number} options.duration - Duración de la animación
 * @param {number} options.initialY - Posición Y inicial
 * @param {string} options.direction - Dirección del deslizamiento ('up' o 'down')
 */
export const useSlideAnimation = (ref, options = {}) => {
    const {
        trigger,
        start = "top 80%",
        duration = 0.8,
        initialY = 50,
        direction = 'up'
    } = options

    useEffect(() => {
        if (!ref.current) return

        // Configuración inicial
        gsap.set(ref.current, {
            opacity: 0,
            y: direction === 'up' ? initialY : -initialY
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
            duration: duration,
            ease: "power2.out"
        })

        return () => {
            timeline.kill()
        }
    }, [ref, trigger, start, duration, initialY, direction])
} 