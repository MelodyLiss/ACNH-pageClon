import { RibbonBirthday } from "../elements/RibbonBirthday"
import { createRayasStyle } from "../../utils/createRayasStyle"

export const VillagerBirthday = () => {
    return (
        <div className="relative">
            <RibbonBirthday/>
            <div className=" h-[85%] sm:h-[70%] w-full absolute top-0 left-0 z-10" style={createRayasStyle('#e7000b','#fb2c36')}>
            </div>
        </div>

    )
}
