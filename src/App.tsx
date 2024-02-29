// import Board from "./components/Board"
import Footer from "./components/Footer"

import { useEffect, useState } from "react"
import value from "./data/value.json"

import "./index.css"
import Card from "./components/Card"

export default function App() {
  const [cards, setCards] = useState([{ value: 0, id: 0, matched: false }])
  const [choiceOne, setChoiceOne] = useState<{ id: number; value: number } | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<{ id: number; value: number } | null>(null)
  const [disabled, setDisabled] = useState(false)

  function handleClick(card: { id: number, value: number }) {
    if (!disabled) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }
  }

  function resetTurn() {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.value === choiceTwo.value) {
        setCards(prevCards => prevCards.map((card) => {
          if (card.id === choiceOne.id || card.id === choiceTwo.id) {
            return { ...card, matched: true }
          }
          return card
        }))

        resetTurn()
      }
      setTimeout(() => resetTurn(), 1000)
    }

  }, [choiceOne, choiceTwo])

  useEffect(() => {
    const previousCards = [...value]
    setCards([...previousCards])
  }, [])

  return (
    <div className="game">
      <h1>Memory Game</h1>
      {/* <Board cards={cards} handleClick={handleClick} flipped={false} /> */}
      <div className="board">
        {cards.map((card) => {
          const flipped = choiceOne?.id === card.id || choiceTwo?.id === card.id || card.matched
          return <Card key={card.id} value={card.value} flipped={flipped} card={card} handleClick={handleClick} />
        })}
      </div>
      <Footer />
    </div>
  )
}
