import Card from "./Card"

export interface ICard {
  id: number,
  value: number,
  matched: boolean
}

interface Props {
  cards: ICard[]
  choiceOne: { id: number; value: number; } | null
  choiceTwo: { id: number; value: number; } | null
  handleClick: (card: ICard) => void
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