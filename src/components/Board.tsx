import Card from "./Card"

import { ICardMatched } from "../interfaces/CardMatched";

interface Props {
  cards: ICardMatched[]
  choiceOne: { id: number; value: number; } | null
  choiceTwo: { id: number; value: number; } | null
  handleClick: (card: ICardMatched) => void
}

export default function Board({ cards, choiceOne, choiceTwo, handleClick }: Props) {

  return (
    <div className="board">
      {cards.map((card) => {
        const flipped = choiceOne?.id === card.id || choiceTwo?.id === card.id || card.matched
        return <Card key={card.id} value={card.value} flipped={flipped} card={card} handleClick={handleClick} />
      })}
    </div>
  )
}