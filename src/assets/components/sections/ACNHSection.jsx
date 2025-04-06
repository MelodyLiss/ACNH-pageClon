import { VideoSection } from "../elements/VideoSection"
import triangles from "../../img/triangles-yellow.png"

export const ACNHSection = () => {
    return (
        <div className="relative w-full overflow-hidden top-[-125px]">
            <section 
                className="bg-yellow-400 mt-[150px] pt-20 p-10 relative -mx-[20%] w-[140%] top-[-100px] rounded-b-[100%_20%] md:rounded-b-[100%_55%] overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1/2 before:z-0"
                style={{
                    '--triangles-image': `url(${triangles})`,
                }}
            >            
                <style jsx>{`
                    section::before {
                        background-image: var(--triangles-image);
                        background-size: 180px;
                        background-position: center;
                        background-repeat: repeat;
                    }
                `}</style>
                <div className="relative z-20">
                    <VideoSection />
                </div>
            </section>
        </div>
    )
}

