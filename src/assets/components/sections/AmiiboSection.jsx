import { useLayoutEffect, useRef } from "react";
import { AmiiboCard } from "../elements/AmiiboCard";
import { ButtonBasic } from "../ui/ButtonBasic";
import bg_green from "../../img/bg-green.png";
import pueblo from "../../img/pueblo.png";
import canela from "../../img/amiibo-canela.png";
import capitán from "../../img/amiibo-capitan.png";
import fran from "../../img/amiibo-fran.png";
import tendoNendo from "../../img/amiibo-tendoNendo.png";
import { animations } from "../../utils/animations";

export const AmiiboSection = () => {
    const { animateBasic, createScrollTimeline,} = animations();
    const sectionRef = useRef(null);

    const imgRefs = useRef([]);
    const bgRefs = useRef([]);

    const textRef = useRef(null);
    const buttonRef = useRef(null);

    useLayoutEffect(() => {
        const timeline = createScrollTimeline(sectionRef.current);

        animateBasic(timeline, textRef.current, "slideUp", 0);

        imgRefs.current.forEach((img, index) => {
            animateBasic(timeline, img, "slideDown", index === 0 ? 0 : 0.3 * index);
        });

        bgRefs.current.forEach((bg, index) => {
            animateBasic(timeline, bg, "fadeinBG", index === 0 ? ">-=0.5" : ">-=0.2");
        });
        animateBasic(timeline, buttonRef.current, "bounce", ">-=0.4");
    }, []);


    return (
        <div className="relative w-full overflow-hidden top-[-250px]" >
            <section className="relative flex flex-col lg:flex-row gap-4 items-center justify-center bg-green-700 rounded-t-[100%_15%] sm:rounded-t-[100%_55%] overflow-hidden -mx-[20%] w-[140%]">
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        backgroundImage: `url(${bg_green})`,
                        backgroundSize: '200px',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'repeat'
                    }} />

                <div className="relative z-20 flex flex-col gap-4 items-center justify-center w-full"
                ref={sectionRef}>
                    <h2 className="text-white text-3xl sm:text-5xl text-center font-bold p-20 [text-shadow:_0_4px_4px_rgb(100_50_20_/_0.8)]" ref={textRef}>
                        Figuras amiibo™ destacadas
                    </h2>
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center w-full max-w-7xl mx-auto px-4 sm:max-w-3xl lg:max-w-7xl">
                        {[canela, capitán, fran, tendoNendo].map((amiibo, index) => (
                            <AmiiboCard
                                key={index}
                                nombre={["Canela - con el conjunto de verano", "Capitán", "Fran", "Tendo y Nendo"][index]}
                                amiibo={amiibo}
                                refImg={(el) => (imgRefs.current[index] = el)}
                                refBG={(el) => (bgRefs.current[index] = el)}
                            />
                        ))}
                    </div>

                    <ButtonBasic
                        ref={buttonRef}
                        Text="Ver el catálogo de figuras amiibo"
                        width="w-100"
                        padding="py-4 px-4"
                        bgColor="bg-yellow-500"
                        hoverBgColor="hover:bg-amber-200"
                        textColor="text-yellow-900"
                        noTextShadow={true}
                    />
                    <img src={pueblo} alt="pueblo" className="w-[75%]" />
                </div>
            </section>
        </div>
    );
};
