import { useState, useRef, useLayoutEffect, useEffect } from "react"
import { ButtonBasic } from "../ui/ButtonBasic"
import { CornerTriangle } from "../ui/CornerTriangle"
import { createRayasStyle } from "../../utils/createRayasStyle"
import video from "../../video/video_ACNH.mp4"
import videoImage from "../../img/bg-acnh.jpg"

import { animations } from "../../utils/animations"

export const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [hasStarted, setHasStarted] = useState(false)
    const section2ref = useRef(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const videoRef = useRef(null)

    const {
        createScrollTimeline,
        animateParallel,
        animateBasic,
        cleanAnimate,
        timelineRef,
    } = animations();

    useLayoutEffect(() => {
        const timeline = createScrollTimeline(section2ref.current);

        
        animateParallel(timeline, [ref1.current, ref2.current], ["bounce","bounce"]);
        animateBasic(timeline, ref3.current, "slideUp");
        animateBasic(timeline, ref4.current, "bounce");

        // Guardar referencias por si necesitas limpiar después
        timelineRef.current = timeline;

        return () => cleanAnimate();
    }, []);




    const togglePlayPause = () => {
        if (videoRef.current) {
            if (!hasStarted) {
                setHasStarted(true)
            }

            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
        }
    }

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const handlePlay = () => setIsPlaying(true)
        const handlePause = () => setIsPlaying(false)

        video.addEventListener("play", handlePlay)
        video.addEventListener("pause", handlePause)

        return () => {
            video.removeEventListener("play", handlePlay)
            video.removeEventListener("pause", handlePause)
        }
    }, [])

    const shouldShowPlayButton = !hasStarted || (!isPlaying && hasStarted)

    return (
        <section >
            <div className="w-full max-w-4xl mx-auto p-4">
                <div className="w-full relative mb-5"
                    ref={ref1}>
                    <CornerTriangle position="top-left" className="w-16" style={createRayasStyle('#fef9c2', '#fdc700', -135, 30)} />
                    <CornerTriangle position="top-right" className="w-16" style={createRayasStyle('#fef9c2', '#fdc700', 225, 30)} />
                    <CornerTriangle position="bottom-left" className="w-16" style={createRayasStyle('#fef9c2', '#fdc700', 225, 30)} />
                    <CornerTriangle position="bottom-right" className="w-16" style={createRayasStyle('#fef9c2', '#fdc700', -135, 30)} />

                    {/* Imagen inicial */}
                    {!hasStarted && (
                        <img
                            ref={section2ref}
                            src={videoImage}
                            alt="video"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg border-10 border-white z-10"
                        />
                    )}

                    <video
                        className="w-full rounded-lg shadow-lg border-10 border-white"
                        loop
                        playsInline
                        ref={videoRef}
                        controls={hasStarted}
                    >
                        <source src={video} type="video/mp4" />
                        Tu navegador no soporta el video.
                    </video>

                    {shouldShowPlayButton && (
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <button
                                className="bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition-all duration-300 flex items-center justify-center"
                                onClick={togglePlayPause}
                            >
                                <i className="fa-solid fa-play text-4xl"></i>
                            </button>
                        </div>
                    )}
                </div>

                <div className="text-center my-4">
                    <h3 className="text-yellow-900 text-2xl font-bold mb-2" ref={ref2}>Animal Crossing: New Horizons</h3>
                    <p className="text-yellow-900 text-2xl" ref={ref3}>Mira el tráiler para el juego Animal Crossing: New Horizons</p>
                </div>

                <div ref={ref4}>
                    <ButtonBasic Text="Visita el sitio oficial" />
                </div>
            </div>
        </section>
    )
}
