import Board from "./components/Board"
import Footer from "./components/Footer"
import value from "./data/value.json"

import { useEffect, useState } from "react"

import "./index.css"

interface CardChoice {
  choiceOne: { id: number; value: number } | null
  choiceTwo: { id: number; value: number } | null
}

export default function App() {
  const [cards, setCards] = useState([{ value: 0, id: 0, matched: false }])
  const [choice, setChoice] = useState<CardChoice>({} as CardChoice)
  const [turns, setTurns] = useState(0)
  const [disabled, setDisabled] = useState(false)

  function handleClick(card: { id: number, value: number }) {
    if (!disabled && card != choice.choiceOne && card != choice.choiceTwo) {
      choice.choiceOne ? setChoice({ ...choice, choiceTwo: card }) : setChoice({ ...choice, choiceOne: card })
    }
  }

  function resetTurn() {
    setChoice({} as CardChoice);
    setDisabled(false)
  }

  function start () {
    const previousCards = [...value].sort(() => Math.random() - 0.5)
    setCards([...previousCards])
    resetTurn()
    setTurns(0)
  }

  useEffect(() => {
    if (choice.choiceOne && choice.choiceTwo) {
      setDisabled(true)
      setTurns(prevTurns => prevTurns + 1)
      if (choice.choiceOne.value === choice.choiceTwo.value) {
        setCards(prevCards => prevCards.map((card) => {
          if (card.id === choice.choiceOne?.id || card.id === choice.choiceTwo?.id) {
            return { ...card, matched: true }
          }
          return card
        }))
      }
      setTimeout(() => resetTurn(), 1000)
    }

  }, [choice.choiceOne, choice.choiceTwo])

  useEffect(() => {
    start()
  }, [])


  return (
    <div className="game">
      <h1>Memory Game</h1>
      <Board cards={cards} handleClick={handleClick} choiceOne={choice.choiceOne} choiceTwo={choice.choiceTwo} />
      <Footer turns={turns} handleClick={start}/>
    </div>
  )
}
