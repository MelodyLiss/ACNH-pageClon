import { CardGame } from "../elements/CardGame"
import game_1 from '../../img/game_1.jpg'
import game_2 from '../../img/game_2.jpg'
import game_3 from '../../img/game_3.jpg'
import game_4 from '../../img/game_4.jpg'
import icon_game_1 from '../../img/icon_game_1.png'
import icon_game_2 from '../../img/icon_game_2.png'
import icon_game_3 from '../../img/icon_game_3.png'



export const CanelitaSection = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-center pb-4 text-yellow-900">Canela y sus amigos en Play Nintendo</h1>

            <div className="flex flex-col w-full">
                <CardGame 
                    gameImage={game_1}
                    gameIcon={icon_game_1}
                    gameType="Personality Quiz"
                    gameTitle="Cup Quiz"
                gameDescription="You can choose race courses from the Mario Kart 8 Deluxe game to find out which cup might best match your personality!."
            />
            <CardGame 
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
    )
}
