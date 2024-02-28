import Card from "./Card"

export default function Board() {
  return (
    <div className="game-board">
      <div className="board-row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="board-row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="board-row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="board-row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}