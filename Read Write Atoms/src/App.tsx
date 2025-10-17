import { atom, useAtom } from "jotai"

const count = atom(1);

const readWriteAtom = atom((get) => get(count), (get, set) => {
  set(count, get(count) + 1);
}) 

function App() {

  const [num, setNum] = useAtom(readWriteAtom);

  return (
    <>
      <h1>{num}</h1>
      <button onClick={() => setNum()}>Increment</button>
    </>
  )
}

export default App
