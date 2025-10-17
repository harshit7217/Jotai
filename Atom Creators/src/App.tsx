import { atom, useAtom } from "jotai"

const count = atom(1);
const doubleCount = atom((get) => get(count)*2);
const square = atom((get) => get(count) * get(count))
function App() {
  const [c, setC] = useAtom(count);
  const [double] = useAtom(doubleCount);
  const [sq] = useAtom(square);
  return (
    <>
      <h1>Count : {c}</h1>
      <div>Double Count: {double}</div>
      <div>Square: {sq}</div>

      <button onClick={() => setC(c + 1)}>Count </button>
    </>
  )
}

export default App
