export const createRayasStyle = (BgColor, stripeColor, orientation = 135, stripeWidth = 30) => ({
    background: `repeating-linear-gradient(${orientation}deg, ${stripeColor} 0, ${stripeColor} ${stripeWidth}%, transparent 0, transparent 50%)`,
    backgroundSize: '1em 1em',
    opacity: 1,
    backgroundColor: `${BgColor}`,
    filter: 'blur(1px)'
});