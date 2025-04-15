import { AmiiboCard } from "../elements/amiiboCard"
import { ButtonBasic } from "../ui/ButtonBasic"
import bg_green from "../../img/bg-green.png"
import pueblo from "../../img/pueblo.png"
import canela from "../../img/amiibo-canela.png"
import capitán from "../../img/amiibo-capitan.png"
import fran from "../../img/amiibo-fran.png"
import tendoNendo from "../../img/amiibo-tendoNendo.png"

export const AmiiboSection = () => {
    return (
        <div className="relative w-full overflow-hidden top-[-250px]">
            <section className="relative flex flex-col lg:flex-row gap-4 items-center justify-center bg-green-700 rounded-t-[100%_15%] sm:rounded-t-[100%_55%] overflow-hidden -mx-[20%] w-[140%]">
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        backgroundImage: `url(${bg_green})`,
                        backgroundSize: '200px',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'repeat'
                    }} />

                <div className="relative z-20 flex flex-col gap-4 items-center justify-center w-full">

                    <h2 className="text-white text-3xl sm:text-5xl text-center font-bold p-20 [text-shadow:_0_4px_4px_rgb(100_50_20_/_0.8)]">Figuras amiibo™ destacadas</h2>
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center w-full max-w-7xl mx-auto px-4 sm:max-w-3xl lg:max-w-7xl">
                        <AmiiboCard nombre="Canela - con el conjunto de verano" amiibo={canela} />
                        <AmiiboCard nombre="Capitán" amiibo={capitán} />
                        <AmiiboCard nombre="Fran" amiibo={fran} />
                        <AmiiboCard nombre="Tendo y Nendo" amiibo={tendoNendo} />
                    </div>

                    <ButtonBasic
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
    )
}
