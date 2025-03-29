import logoNintendo from '../../img/nintendo-racetrack.svg'

export const NavLogin = () => {
    return (
        <nav className="bg-red-600 p-2 md:p-6">

            <ul className="flex justify-between items-center text-white font-bold px-4">
                <li className= "mr-5">
                    <a href="#">
                        <img src={logoNintendo} alt="logo nintendo" className="w-30" />
                    </a>
                </li>
                <li>
                    <a className="flex items-center gap-2" href="#">
                        <i className="fa-solid fa-user text-2xl "></i>
                        <p className=" text-center text-xl  md:text-base">Iniciar sesión/Crear cuenta</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
