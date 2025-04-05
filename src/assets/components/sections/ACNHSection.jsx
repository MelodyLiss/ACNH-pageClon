import bg_triangle from "../../img/triangles-yellow.png"

import { VideoSection } from "../elements/VideoSection"

export const ACNHSection = () => {
    return (
        <section 
            className="bg-yellow-400 pt-20 pb-10 relative top-[-100px] w-full rounded-b-[80%_15%] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1/2  before:bg-[url('../../img/triangles-yellow.png')] before:bg-center before:bg-repeat before:bg-[size:180px] ">            
            <VideoSection/>
        </section>
    )
}

