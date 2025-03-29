import { NavLogin } from "../elements/NavLogin"
import { BannerHeader } from "../elements/BannerHeader"
import { ButtonAnimation } from "../elements/ButtonAnimation"
import { VillagerBirthday } from "./VillagerBirthday"
export const Header = () => {
    return (
        <header>
            <NavLogin />
            <ButtonAnimation />

            <div className="relative">
                <BannerHeader />
                <VillagerBirthday className="top-0 left-0" />
            </div>
        </header>
    )
}
