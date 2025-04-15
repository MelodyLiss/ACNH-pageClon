import { ButtonBasic } from "../ui/ButtonBasic"
import patron from '../../img/footer-dots.png'


import logoAmiibo from '../../img/logo-amiibo.svg'
import facebook from '../../img/logo-facebook.svg'
import twitter from '../../img/logo-twitter.svg'
import youtube from '../../img/logo-youtube.svg'
import instagram from '../../img/logo-instagram.svg'
import privacy from '../../img/privacy.svg'
import everyone from '../../img/es-e.svg'
import pino from '../../img/bg-pino.png'



export const Footer = () => {
    return (
        <footer className=" relative p-4 bg-cover bg-center bg-repeat bg-yellow-500" style={{
            backgroundImage: `url(${patron})`,
            backgroundSize: '50px',
            backgroundRepeat: 'repeat'
        }}>

            <div
                className="absolute top-0 left-0 w-full h-[100%] bg-repeat-x bg-[size:1180px] "
                style={{ backgroundImage: `url(${pino})` }}
            />

            <ButtonBasic
                className="mt-40 text-md"
                Text="Servicio al cliente"
                width="w-70"
                padding="py-4 px-4"
                bgColor="bg-yellow-300"
                hoverBgColor="hover:bg-amber-200"
                textColor="text-yellow-900"
                noTextShadow={true}
            />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-10">

                <img src={logoAmiibo} alt="logo_amiibo" />

                <div className="flex flex-col items-center justify-center px-6 mb-5">
                    <h2 className="font-bold pb-4 text-md">Sigue a Nintendo:</h2>
                    <div className="flex  items-center justify-center gap-6">
                        <img src={facebook} alt="facebook" className="w-15" />
                        <img src={twitter} alt="twitter" className="w-15" />
                        <img src={youtube} alt="youtube" className="w-15" />
                        <img src={instagram} alt="instagram" className="w-15" />
                    </div>
                </div>

                <div className="flex items-center justify-center ">
                    <img src={everyone} alt="everyone" className="w-25 h-25 object-contain" />
                    <img src={privacy} alt="privacy" className="w-25 h-25 object-contain" />
                </div>

            </div>

            <ul className="flex items-center justify-center gap-4 pb-10">
                <li className="border-r-2 pr-2 text-sm">
                    <a
                        href="https://www.nintendo.com/privacy-policy"
                        className="no-underline hover:underline cursor-pointer"
                    >
                        Política de privacidad
                    </a>
                </li>
                <li className="border-r-2 pr-2 text-sm">
                    <a
                        href="https://www.nintendo.com/terms-of-use"
                        className="no-underline hover:underline cursor-pointer"
                    >
                        Términos de uso (Inglés)
                    </a>
                </li>
                <li className="text-sm">
                    <a
                        href="https://www.nintendo.com/cookie-policy"
                        className="no-underline hover:underline cursor-pointer"
                    >
                        Política de cookies
                    </a>
                </li>
            </ul>

            <div className="flex flex-col items-center justify-center gap-2 pb-10 sm:w-2/3 mx-auto text-xs text-center">
                <p>Usa la función de control parental para restringir el acceso al modo 3D para niños de 6 años o menores.</p>
                <p>Se requiere una conexión a internet para acceder a las funciones en línea. Para más información visita <a href="https://en-americas-support.nintendo.com/app/region/d/home" className="underline">support.nintendo.com</a></p>
                <p>Los juegos y las figuras amiibo se venden por separado. Las figuras no se muestran en su tamaño real y su diseño puede variar. La compatibilidad y funcionalidad del amiibo pueden variar dependiendo del juego. Visita <a href="https://www.nintendo.com/us/amiibo/" className="underline">amiibo.com</a> para ver detalles más específicos sobre la funcionalidad del amiibo.</p>
                <p>© 2001 - 2024 Nintendo. Nintendo properties are trademarks of Nintendo.</p>
                <p>Proyecto con fines educativos. Clon de la web <a href="https://animalcrossing.nintendo.com/es/" className="underline">Oficial de Animal Crossing</a></p>
            </div>

        </footer>
    )
}
