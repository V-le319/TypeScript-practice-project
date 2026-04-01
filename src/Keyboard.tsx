import { useState } from "react";

type KeyboardProps = {
    activeLetters: string[]
    disable?: boolean
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

export function Keyboard({activeLetters, disable = false, inactiveLetters, addGuessedLetter}: KeyboardProps) {
    const KEY = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const [clicked, setClicked] = useState<string[]>([]);
    const handleClicked = (key: string) => {
        if(!clicked.includes(key)) {
            setClicked([...clicked, key])
        }
    };

    return (
        <div className="max-w-screen h-full p-2 flex flex-wrap  justify-center gap-1 text-black">
            {KEY.map(key => {
                const isInactive = inactiveLetters.includes(key);
                const isActive = activeLetters.includes(key)
                return (<button 
                    className={`w-20 text-2xl border-2 p-4 uppercase cursor-pointer duration-300
                            ${isInactive
                                ? "bg-gray-300 text-gray-400 border-gray-300 cursor-not-allowed"
                                : "hover:bg-indigo-300"
                            }`}
                key={key}
                onClick= {()=> {addGuessedLetter(key)}}
                disabled ={isInactive || isActive || disable}
                >{key}
                </button>);
            })}
        </div>
    )
}