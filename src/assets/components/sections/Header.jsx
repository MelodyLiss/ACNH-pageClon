import { NavLogin } from "../elements/NavLogin"
import { BannerHeader } from "../elements/BannerHeader"
import { ButtonAnimation } from "../elements/ButtonAnimation"
export const Header = () => {
    return (
        <header>
            <NavLogin />
            <ButtonAnimation />
            <BannerHeader />
        </header>
    )
}
