import { DualCard } from "../elements/DualCard"
import bg_apple from "../../img/bg-apple.png"
import gift_balloon from "../../img/char-balloon_2x.png"

export const PocketCampSection = () => {
    return (
        <section className="relative pt-40 top-[-300px] z-[-10] bg-gradient-to-b from-cyan-300 to-white ">
            <div
                className="absolute top-0 left-0 w-full h-[100%] bg-repeat-x bg-[size:1180px] "
                style={{ backgroundImage: `url(${bg_apple})` }}
            />
            <div className="flex  relative z-10">
                <DualCard />

                <img src={gift_balloon} className="h-80 absolute hidden lg:block left-240 z-20" alt=" regalo flotante con globo" />
            </div>

        </section>
    )
}
