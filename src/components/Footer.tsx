interface Props {
  turns: number
}

export default function Footer({ turns }: Props) {
  return (
    <h1> {turns} Moves</h1>
  )
}