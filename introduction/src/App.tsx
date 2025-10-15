import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { atom, useAtom } from 'jotai';

const counter = atom(0);
const object = atom({
  name: "Harshit",
  age: 21
})
const arr = atom([1, 2, 3]);

function App() {
  const [count, setCount] = useAtom(counter)
  const [obj, setObj] = useAtom(object)
  const [array, setArray] = useAtom(arr)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{obj.name} {obj.age}</h1>
      <button onClick={() => setObj(prev => ({
        ...prev,
        age: prev.age + 1
      }))}>Changed</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <ul>{array.map(e => {
        return <li key={e} style={{ marginRight: "10px" }}>{e}</li>
      })}
      </ul>

      <button onClick={() => setArray(prev => [...prev, prev.length + 1])}>Add</button>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
