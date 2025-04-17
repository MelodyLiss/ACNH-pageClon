import banner_verano from '../../img/hero-bg.jpg'
import logo_ACNH from '../../img/logo.png'
import tablero from '../../img/tablero.png'
import canelita1 from '../../img/canelita1.png'

export const BannerHeader = () => {
    return (
        <div className="relative w-full h-screen sm:h-auto overflow-hidden">
            <div className="absolute inset-0 z-10">
                <img
                    src={banner_verano}
                    alt="fondo isla verano"
                    className="w-full h-full object-cover sm:scale-110 lg:scale-130"
                />
            </div>
            <div className="relative z-20 r flex flex-col items-center justify-center">
                <p className="text-yellow-900 text-2xl font-bold my-8">Sitio no oficial de </p>

                <div className="flex flex-col items-center justify-center gap-4 ">
                    <img src={logo_ACNH} alt="logo_ACNH" className="mb-4 w-60 sm:w-80 lg:w-100" />

                    <div className="relative flex flex-col items-center justify-center ">


                        <img src={canelita1} alt="canelita" className="absolute top-[-25px] left-50%  w-45 sm:w-65 sm:top-[-20%] sm:left-100 sm:z-30 lg:w-75 lg:top-[-40%] lg:left-130" />
                        

                        <div className="relative top-55 sm:top-10 sm:z-20">
                            <img src={tablero} alt="tablero" className="mb-4 w-95 sm:w-130 lg:w-150" />
                            <p className="text-white [text-shadow:_0_4px_4px_rgb(100_50_20_/_0.8)] text-center absolute top-6 left-9 w-72 flex  text-md sm:text-xl sm:top-15 sm:left-25 md:top-11 md:left-30 lg:w-100 lg:text-2xl lg:top-20 lg:left-25">Haz amistad con los adorables habitantes animales y diviértete creando tu propio mundo en la serie de Animal Crossing</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
