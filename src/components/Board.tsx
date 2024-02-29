import Card from "./Card"

interface Props {
  cards: number[]
}

export default function Board({ cards }: Props) {
  console.log(cards);
  
  return (
    <div className="board">
      {cards.map((card) => {
        return <Card key={card} value={card}/>
      })}
    </div>
  )
}