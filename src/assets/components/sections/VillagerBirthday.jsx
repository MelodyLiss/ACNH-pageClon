import { RibbonBirthday } from "../elements/RibbonBirthday"
export const VillagerBirthday = () => {
    return (
        <div className="relative">
            <RibbonBirthday/>
            <div className="bg-red-700 h-[65%] w-full absolute top-0 left-0 z-10"></div>
        </div>

    )
}
