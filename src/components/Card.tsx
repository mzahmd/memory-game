import react from "../assets/react.svg"
import { ICardMatched } from "../interfaces/CardMatched"

interface Props {
  value: number
  flipped: boolean
  card: ICardMatched
  handleClick: (card: ICardMatched) => void
}

export default function Card({ value, flipped, card, handleClick }: Props) {

  return (
    <>
      <div className={flipped ? "flip-container card" : "card"} onClick={() => handleClick(card)}>
        <div className={flipped ? "flip card-inner" : "card-inner"}>
          <div className="card-front">
            <img src={react} />
          </div>
          <div className="card-back">
            {value}
          </div>
        </div>
      </div>
    </>
  )
}