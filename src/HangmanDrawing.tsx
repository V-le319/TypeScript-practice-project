const HEAD = (
        <div className="absolute w-20 h-20 rounded-full border-black border-10 top-9 -right-8"></div>
    );
    const BODY = (
        <div className="absolute w-3 h-32 bg-black top-28 right-0 "></div>
    );
    const RIGHT_ARM = (
        <div className="absolute w-3 h-28 bg-black -right-10 top-20 transform rotate-45"></div>
    );
    const LEFT_ARM = (
        <div className="absolute w-3 h-28 bg-black right-10 top-20 transform -rotate-45"></div>
    );
    const RIGHT_LEG = (
        <div className="absolute w-3 h-28 bg-black -right-10 top-52 transform -rotate-45"></div>
    );
    const LEFT_LEG = (
        <div className="absolute w-3 h-28 bg-black right-10 top-52 transform rotate-45"></div>
    );
    const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

    type HangmanDrawingProps = {
        numberOfGuesses: number
    }
export function HangmanDrawing({numberOfGuesses} : HangmanDrawingProps) {
    
    return (
    <div className="relative scale-50">
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className="h-10 w-3 bg-black absolute top-0 right-0"></div>
        <div className="h-3 w-60 bg-black ml-28 "></div>
        <div className="w-3 h-80 ml-28 bg-black "></div>
        <div className="w-60 h-3 bg-black"></div>
{/* When you set absolute on a child <div>, it positions itself relative to the nearest parent that has position: relative.
    top-0 → sets top: 0 → the top edge of the element touches the top of the relative parent.
right-0 → sets right: 0 → the right edge of the element touches the right of the relative parent.
mean: “Place this box at the top-right of the parent box.”
*/}
    </div>
    )
}