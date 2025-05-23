import {useRef, useLayoutEffect} from 'react'
import { CardGame } from "../elements/CardGame"
import game_1 from '../../img/game_1.jpg'
import game_2 from '../../img/game_2.jpg'
import game_3 from '../../img/game_3.jpg'
import game_4 from '../../img/game_4.jpg'
import icon_game_1 from '../../img/icon_game_1.png'
import icon_game_2 from '../../img/icon_game_2.png'
import icon_game_3 from '../../img/icon_game_3.png'
import canelita from '../../img/canelita2.png'
import patron from '../../img/play-dots.png'
import { animations } from '../../utils/animations'

export const CanelitaSection = () => {

    const sectionRef = useRef(null)
    const CanelitaRef = useRef(null)
    const textRef = useRef(null)
    const card1Ref = useRef(null)
    const card2Ref = useRef(null)
    const card3Ref = useRef(null)
    const card4Ref = useRef(null)

    const { animateBasic, createScrollTimeline } = animations()
    useLayoutEffect(() => {
        const timeline = createScrollTimeline(sectionRef.current)

        // Animación de texto
        animateBasic(timeline, textRef.current, "slideUp")
        animateBasic(timeline, CanelitaRef.current, "slideLeft")
        animateBasic(timeline, card1Ref.current, "bounce",">-=0.2")
        animateBasic(timeline, card4Ref.current, "bounce",">-=0.2")
        animateBasic(timeline, card2Ref.current, "bounce",">-=0.2")
        animateBasic(timeline, card3Ref.current, "bounce",">-=0.2")

    }, [])




    return (
        <article ref={sectionRef} className="relative pb-40">
            <div 
                className="absolute inset-0 -top-[250px]  z-0" 
                style={{ 
                    backgroundImage: `url(${patron})`,
                    backgroundSize: '50px',
                    backgroundRepeat: 'repeat'
                }} 
                aria-hidden="true"
            />
            <section 
                className="flex items-center justify-center mt-[-150px] relative z-10"
            >
                <aside className="relative z-10 hidden lg:block">
                    <img 
                        ref={CanelitaRef}
                        src={canelita} 
                        alt="Ilustración de Canela" 
                        className="w-full scale-125" 
                    />
                </aside>

                <div className="flex flex-col items-center justify-center relative z-10">
                    <header>
                        <h1 className="text-5xl font-bold text-center p-6 text-yellow-900" ref={textRef}>
                            Canela y sus amigos en Play Nintendo
                        </h1>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
                        <CardGame
                            ref={card1Ref}
                            gameImage={game_1}
                            gameIcon={icon_game_1}
                            gameType="Personality Quiz"
                            gameTitle="Cup Quiz"
                            gameDescription="You can choose race courses from the Mario Kart 8 Deluxe game to find out which cup might best match your personality!."
                        />
                        <CardGame
                            ref={card2Ref}
                            gameImage={game_2}
                            gameIcon={icon_game_1}
                            gameType="Personality Quiz"
                            gameTitle="Video game vacations"
                            gameDescription="You can tell us about your ideal getaway.and we'll show you game destination might match it!."
                            scaleImage="scale-120"
                            direction="flex-row-reverse"
                            bgColor="bg-yellow-300"
                            borderColor="border-yellow-300"
                        />
                        <CardGame
                            ref={card3Ref}
                            gameImage={game_3}
                            gameIcon={icon_game_2}
                            gameType="Poll"
                            gameTitle="New year, new island?"
                            gameDescription="You can ring in 2025 with a poll inspired by the Animal Crossing: New Horizons game!."
                            scaleImage="scale-120"
                            direction="flex-row-reverse"
                            bgColor="bg-cyan-400"
                            borderColor="border-cyan-400"
                        />
                        <CardGame
                            ref={card4Ref}
                            gameImage={game_4}
                            gameIcon={icon_game_3}
                            gameType="Tips & Tricks"
                            gameTitle="Snowboy? Oh boy!"
                            gameDescription="A few for creating the perfect Snowboy in the Animal Crossing: New Horizons game!."
                            scaleImage="scale-120"
                            bgColor="bg-cyan-400"
                            borderColor="border-cyan-400"
                        />
                    </div>
                </div>
            </section>
        </article>
    )
}
