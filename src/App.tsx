import { useState, useEffect, useCallback } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  //to tract what word to guess
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const inCorrectLetters = guessedLetters.filter(letter => 
    !wordToGuess.includes(letter)
  );

  //set condition for winner and loser
    const isLoser = inCorrectLetters.length >= 6; // Because we have 6 body parts for hangman
    const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))


  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) return
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isLoser, isWinner])
  
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if(!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler)
    }

  }, [guessedLetters])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
      const key = e.key
          if (key !== "Enter") return
          e.preventDefault()
          setGuessedLetters([])
          setWordToGuess(getWord())
    }
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler)
    }
      
    }, [])

  return (
    <div className=" max-w-screen min-h-screen p-6 py-10 flex flex-col gap-4 items-center justify-center ">
      <h1 className="text-base">
        {isLoser && "Nice try! Refresh page for another try!"}
        {isWinner && "Winner! Refresh page for another go!"}
      </h1>

    <HangmanDrawing numberOfGuesses = {inCorrectLetters.length}/>

    <HangmanWord guessedLetters = {guessedLetters} 
                wordToGuess = {wordToGuess}
                reveal = {isLoser}
                />

    <div className="self-stretch"></div>

    <Keyboard activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
              inactiveLetters={inCorrectLetters}
              
              addGuessedLetter={addGuessedLetter}/>

    </div>
  );
}

export default App;




