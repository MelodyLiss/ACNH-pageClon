import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import './RibbonBirthday.css'

import confetti from '../../img/confetti.png'
import regalo from '../../img/birthday-giftbox.png'
import { animations } from '../../utils/animations'
import { solicitudApi } from '../../utils/solicitudApi'


export const RibbonBirthday = () => {

    // ANIMACIONES
    const sectionRef = useRef(null)
    const ribbonRef = useRef(null)
    const textRef = useRef(null)
    const imageRef = useRef(null)
    const confettiRef = useRef(null)
    const giftRef = useRef(null)

    const { animateBasic, animateParallel, createScrollTimeline, animateSwitch} = animations()

    useLayoutEffect(() => {
        const timeline = createScrollTimeline(sectionRef.current)

        animateBasic(timeline, ribbonRef.current, "bounce");
        timeline.to({}, { duration: 1.5 }); // pausa de 1.5 segundos vacía
        animateParallel(timeline, [textRef.current, giftRef.current], ["slideLeft", "slideRight"]);
        animateBasic(timeline, imageRef.current, "bounceBig", "<+=0.3");
        animateBasic(timeline, confettiRef.current, "bounceBig")

    }, [])

    // API
    const [festivos, setFestivos] = useState([]);
    console.log(festivos)

    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const { obtenerFestivos } = solicitudApi();
        obtenerFestivos(5).then(data => {
            setFestivos(data);
            setCurrentIndex(0); // reset índice al cargar
        });
    }, []);

    const handleNext = () => {
        setCurrentIndex(prev => (prev === 0 ? prev : prev - 1));
    };

    const handlePrev = () => {
        setCurrentIndex(prev => (prev === festivos.length - 1 ? 0 : prev + 1));
    };

    const Festivo = festivos.length > 0 ? festivos[currentIndex] : null;

    const isFirstRender = useRef(true); 

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return; // saltamos la animación en el primer render
        }
        const timeline = createScrollTimeline(sectionRef.current)
        animateSwitch(timeline, imageRef, textRef);

        

    }, [currentIndex]);


    return (
        <section ref={sectionRef} className="relative top-[-30px] sm:top-[-40px] z-20">

            <div className="flex flex-col sm:flex-row items-center sm:justify-center md:justify-evenly 2xl:justify-center w-2/3 mx-auto relative z-10">
                {/* informacion del villager */}
                <div ref={textRef} className="text-center pt-6">
                    <p className="text-amber-200 [text-shadow:_0_4px_4px_rgb(100_50_20_/_0.8)] text-xl md:text-2xl  sm:text-xl font-bold mb-4">Hoy es el cumpleaños de</p>
                    <h2 className="text-white [text-shadow:_0_4px_4px_rgb(100_50_20_/_0.8)] text-2xl md:text-3xl sm:text-2xl font-bold mb-4">{Festivo?.name || "Cargando..."}</h2>
                    <div className="flex items-center justify-center pb-6">

                        <button
                            className={`shadow-xl text-3xl text-amber-200 px-4 py-2 rounded-2xl mr-8 transition-all duration-300 ${currentIndex === 6 ? "opacity-40" : "bg-red-600 hover:bg-red-700 cursor-pointer"}`}
                            onClick={handlePrev}
                            disabled={currentIndex === 6}
                        >
                            <i className="fa-solid fa-caret-left"></i>
                        </button>

                        <button
                            className={` shadow-xl text-3xl text-amber-200 px-4 py-2 rounded-2xl mr-8 transition-all duration-300 ${currentIndex === 0 ? "opacity-40" : "bg-red-600 hover:bg-red-700 cursor-pointer"}`}
                            onClick={handleNext}
                            disabled={currentIndex === 0}
                        >
                            <i className="fa-solid fa-caret-right"></i>
                        </button>

                    </div>
                </div>
                {/* imagen del villager */}

                <div>
                    <div className="relative w-[250px] h-[250px]">
                        <img
                            ref={imageRef}
                            src={Festivo?.image_url || ""}
                            alt={Festivo?.name || "Imagen no disponible"}
                            className="w-full h-full object-contain"
                        />
                        <img ref={confettiRef} src={confetti} alt="confetti" className="w-80 absolute top-10  -z-10" />
                    </div>
                </div>

                <div
                    ref={giftRef}
                    className="hidden sm:flex flex-col items-center justify-center w-[150px] h-[150px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] bg-red-600 rounded-full p-18 hover:bg-red-700 transition-all duration-300 cursor-pointer  "
                >
                    <div className="flex flex-col items-center justify-center h-full ">
                        <img src={regalo} alt="regalo" className=" sm:w-18 " />
                        <p className="text-amber-200 [text-shadow:_0_4px_4px_rgb(100_50_20_/_0.8)] font-bold text-sm sm:text-[12px] md:text-base lg:text-lg text-center w-[85%]">¡Celebra su cumpleaños!</p>
                    </div>
                </div>
            </div>

            {/* contenedor de la cinta */}
            <section
                ref={ribbonRef}
                className="ribbon bg-red-500 w-[90%] sm:w-full lg:w-250 xl:w-300 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] sm:h-[95%] flex items-center justify-between "
            >
            </section>
        </section>
    )
}
