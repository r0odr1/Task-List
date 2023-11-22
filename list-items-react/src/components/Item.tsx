
export function Item (
  { text, handleClick }:
  { text: string, handleClick: () => void
}) {
  return (
    <li>
      {text}
        <button className="blist" onClick={handleClick}>
          Delete Task
        </button>
    </li>
  )
}