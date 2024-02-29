import Board from "./components/Board"
import Footer from "./components/Footer"

import { useEffect, useState } from "react"

import "./index.css"

export default function App() {
  const [cards, setCards] = useState([0])
  // const [choiceOne, setChoiceOne] = useState()
  // const [choiceTwo, choiceTwo] = useState()


  useEffect(() => {
    const previousCards = [1, 2, 3, 4, 5, 6, 7, 8]
    setCards([...previousCards, ...previousCards])
  }, [])

  return (
    <div className="game">
      <h1>Memory Game</h1>
      <Board cards={cards} />
      <Footer />
    </div>
  )
}
