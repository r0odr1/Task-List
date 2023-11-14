import './App.css'
import { Item } from './components/Item'
import { useItems } from './hooks/useItems'
import { useSEO } from './hooks/useSEO'

export type ItemId = `${string}-${string}-${string}-${string}-${string}`

export interface Item {
  id: ItemId
  timestamp: number
  text: string
}

function App() {
  const { items, addItem, removeItem } = useItems()

  useSEO({
    title: `[${items.length}] Prueba tecnica de React`,
    description: 'Añadir y eliminar tareas a una lista'
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const {elements } = event.currentTarget

    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input === null) return

    addItem(input.value)

    input.value = ''
  }

  const createHandleRemoveItem = (id: ItemId) => () => {
    removeItem(id)
  }

  return (
    <main>
      <aside>
        <h1>Prueba Tecnica React</h1>
        <h2>Añadir y eliminar tareas de una lista</h2>
        <form onSubmit={handleSubmit} aria-label='Añadir eleentos a la lista'>
          <label>
            Nueva Tarea:
            <input
              name='item'
              required
              type='text'
              placeholder='Escribe Tarea'
            />
          </label>
          <button>ADD</button>
        </form>
      </aside>
      <section>
        <h2>Lista de Tareas</h2>
          {
            items.length === 0 ? (
              <p><strong>No hay tareas en la lista</strong></p>
            ) : (
              <ul>
                {
                  items.map((item) => {
                    return (
                      <Item
                        {...item}
                        handleClick={createHandleRemoveItem(item.id)}
                        key={item.id} />
                    )
                  })}
              </ul>
            )
          }
      </section>
    </main>
  )
}

export default App
