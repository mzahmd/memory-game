import { VscDebugRestart } from "react-icons/vsc";

interface Props {
  turns: number
  handleClick: () => void
}

export default function Footer({ turns, handleClick }: Props) {
  return (
    <>
      <h1> {turns} Moves</h1>
      <button onClick={handleClick} className="restart">
        <VscDebugRestart size={50}/>
      </button>
    </>
  )
}