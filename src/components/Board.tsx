import Card from "./Card"

export interface ICard {
  id: number,
  value: number,
  matched: boolean
}


interface Props {
  cards: ICard[]
  flipped: boolean
  handleClick: (card: ICard) => void
}

export default function Board({ cards, flipped, handleClick }: Props) {

  return (
    <div className="board">
      {cards.map((card) => {
        return <Card key={card.id} value={card.value} flipped={flipped} card={card} handleClick={handleClick} />
      })}
    </div>
  )
}