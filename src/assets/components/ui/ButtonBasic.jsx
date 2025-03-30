export const ButtonBasic = ({Text}) => {
    return (
        <button className="bg-red-600 text-amber-200 text-base font-bold [text-shadow:_0_4px_4px_rgb(100_50_20_/_0.8)] px-4 py-2 rounded-xl hover:bg-red-800 transition-all duration-300 w-[90%] sm:w-1/2 mx-auto block mb-4">
            {Text}
        </button>
    )
}
