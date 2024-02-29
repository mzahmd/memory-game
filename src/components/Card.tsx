import { useState } from "react"
import react from "../assets/react.svg"

interface Props {
  value: number
}

export default function Card({ value }: Props) {
  const [flip, setFlip] = useState(false)

  function handleClick() {
    setFlip(!flip)
  }

  return (
    <>
      <div className="card" onClick={handleClick}>
        <div className="card-inner">
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