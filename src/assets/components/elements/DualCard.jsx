import { useRef, useLayoutEffect, useEffect } from "react"
import pocketCampLogo from "../../img/pocket-camp-logo.png"
import pocketCampArt from "../../img/pocket-camp-art.png"
import { ButtonBasic } from "../ui/ButtonBasic"
import { createRayasStyle } from "../../utils/createRayasStyle"
import { animations } from "../../utils/animations"

export const DualCard = () => {

    const sectionref = useRef(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)

    const { createScrollTimeline, animateBasic, cleanAnimate, timelineRef, } = animations();

    useLayoutEffect(() => {
        const timeline = createScrollTimeline(sectionref.current);

        animateBasic(timeline, sectionref.current, "bounce", "0");         
        animateBasic(timeline, ref1.current, "slideUp");           
        animateBasic(timeline, ref2.current, "slideUp","-=0.2" );           
        animateBasic(timeline, ref3.current, "bounce","-=0.5");                
        animateBasic(timeline, ref4.current, "bounce");               
        animateBasic(timeline, ref5.current, "bounce");         


    }, [])


    return (
        <section ref={sectionref} className="w-full sm:w-2/3 max-w-4xl mx-auto p-8 flex flex-col sm:flex-row sm:gap-4 justify-center items-center rounded-xl relative">
            {/* Fondo con rayas */}
            <div className="absolute inset-0 rounded-xl" style={createRayasStyle('#7dc49b', '#89cba4', 135, 30)}></div>

            {/* Contenido principal */}
            <div className=" p-4 flex flex-col lg:flex-row sm:gap-4 justify-center items-center bg-yellow-200 rounded-xl relative z-10">

                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col justify-center items-center relative">
                        <img ref={ref3} src={pocketCampLogo} alt="pocketCampLogo" className="relative z-10 " />
                        <img ref={ref4} src={pocketCampArt} alt="pocketCampArt" className="relative -mt-15 z-0 " />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 text-center">
                    <h3 ref={ref1} className="text-3xl font-bold text-green-900 pb-4">¡Crea una parcela que se ajuste a tu estilo!</h3>

                    <p ref={ref2} className="pb-4 text-lg">
                        Hamacas, tiendas de campaña, chimeneas, un sofá de peluche... ¡Deja volar tu imaginación con una variedad de ideas de decoración en el juego móvil Animal Crossing: Pocket Camp! ¡Crea una moderna cafetería o coloca algunos micrófonos y guitarras para disfrutar un festival de música al aire libre! ¡Incluso puedes fabricar una piscina o llenar el cielo de brillantes fuegos artificiales!
                    </p>

                    <ButtonBasic
                        ref={ref5}
                        Text="Más Detalles"
                        width="sm:w-50"
                        padding="py-4"
                    />
                </div>
            </div>
        </section>
    )
}
