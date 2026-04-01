type HangmanWordProps = {
    guessedLetters: string[];
    wordToGuess: string;
    reveal?: boolean
}
export function HangmanWord({guessedLetters, wordToGuess, reveal = false}: HangmanWordProps ){
   
    return (
        <div className="max-w-screen h-full p-4 flex flex-row justify-items-center gap-6 text-6xl font-bold uppercase">
{wordToGuess.split("").map((letter, index) => (
    <span className="border-b-4 border-black p-2">
        <span key={index}
        style={{visibility: guessedLetters.includes(letter) || reveal
            ? "visible"
            : "hidden",
        color: !guessedLetters.includes(letter) && reveal 
        ? "cyan"
        : "black"
        }}
        >{letter}</span> {/* span here to control the visibilityy of letter */}
        </span>
))
}
        </div>
    )
}