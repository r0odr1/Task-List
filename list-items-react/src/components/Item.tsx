
export function Item ({ text, handleClick } : { text: string, handleClick: () => void }) {
  return (
    <li>
      {text}
      <button onClick={handleClick}>
        Eliminar Tarea
      </button>
    </li>
  )
}