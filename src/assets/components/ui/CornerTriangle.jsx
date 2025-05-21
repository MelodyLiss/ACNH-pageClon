import "./CornerTriangle.css"

export const CornerTriangle = ({ position = "top-left", className = "w-20", style }) => {
    const positions = {
        "top-left": "-top-2 -left-2 rotate-0",
        "top-right": "-top-2 -right-2 rotate-90",
        "bottom-left": "-bottom-2 -left-2 -rotate-90",
        "bottom-right": "-bottom-2 -right-2 rotate-180"
    }

    return (
        <div className={`absolute z-20 ${positions[position]}`}>
            <div className={`triangle ${className}`} style={style}></div>
        </div>
    )
}

