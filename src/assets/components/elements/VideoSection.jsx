import { ButtonBasic } from "../ui/ButtonBasic"
import { CornerTriangle } from "../ui/CornerTriangle"
import { createRayasStyle } from "../../utils/createRayasStyle"
import video from "../../video/Que_es_Animal_Crossing_ New Horizons.mp4"

export const VideoSection = () => {
    return (
        <section>
            <div className="w-full max-w-4xl mx-auto p-4 ">
                <div className="w-full relative mb-5">
                    <CornerTriangle position="top-left" className="w-20" style={createRayasStyle('#fef9c2','#fdc700',-135,30)} />
                    <CornerTriangle position="top-right" className="w-20" style={createRayasStyle('#fef9c2','#fdc700',135,30)} />
                    <CornerTriangle position="bottom-left" className="w-20" style={createRayasStyle('#fef9c2','#fdc700',-135,30)} />
                    <CornerTriangle position="bottom-right" className="w-20" style={createRayasStyle('#fef9c2','#fdc700',135,30)} />
                    <video
                        className="w-full rounded-lg shadow-lg border-10 border-white"
                        muted
                        loop
                        playsInline
                    >
                        <source src={video} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            className="bg-black/50 text-white p-4  rounded-full hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                            <i className="fa-solid fa-play text-4xl"></i>
                        </button>
                    </div>
                </div>

                <div className="text-center my-4">
                    <h3 className="text-yellow-900 text-2xl font-bold mb-2">Animal Crossing: New Horizons</h3>
                    <p className="text-yellow-900 text-2xl">Mira el tráiler para el juego Animal Crossing: New Horizons</p>
                </div>

                <ButtonBasic
                    Text="Visita el sitio oficial"
                />
            </div>
        </section>
    )
}
