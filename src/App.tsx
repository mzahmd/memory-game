import Board from "./components/Board"
import Footer from "./components/Footer"

import { ICardMatched } from "./interfaces/CardMatched"
import { ICardChoice } from "./interfaces/CardChoice"

import value from "./data/value.json"

import { useEffect, useState } from "react"

import "./index.css"

export default function App() {
  const [cards, setCards] = useState<ICardMatched[]>([])
  const [choice, setChoice] = useState<ICardChoice>({} as ICardChoice)
  const [turns, setTurns] = useState(0)
  const [disabled, setDisabled] = useState(false)

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

  function handleClick(card: { id: number, value: number }) {
    if (!disabled && card != choice.choiceOne && card != choice.choiceTwo) {
      choice.choiceOne ? setChoice({ ...choice, choiceTwo: card }) : setChoice({ ...choice, choiceOne: card })
    }
  }

  function resetTurn() {
    setChoice({} as ICardChoice);
    setDisabled(false)
  }

  function start() {
    const previousCards = [...value].sort(() => Math.random() - 0.5)
    setCards([...previousCards])
    resetTurn()
    setTurns(0)
  }

  return (
    <div className="game">
      <h1>Memory Game</h1>
      <Board cards={cards} handleClick={handleClick} choiceOne={choice.choiceOne} choiceTwo={choice.choiceTwo} />
      <Footer turns={turns} handleClick={start} />
    </div>
  )
}
