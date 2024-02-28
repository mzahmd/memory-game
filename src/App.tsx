import Board from "./components/Board"
import Footer from "./components/Footer"

import "./index.css"

export default function App() {

  return (
    <div className="game">
      <h1>Memory Game</h1>
      <Board />
      <Footer />
    </div>
  )
}
