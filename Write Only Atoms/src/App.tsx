import { atom, useAtom } from "jotai"

const textAtom = atom('write only atoms')
const uppercase = atom(null, (get, set) => {
  set(textAtom, get(textAtom).toUpperCase())
})

function App() {

  const [text] = useAtom(textAtom)
  const [, setUppercase] = useAtom(uppercase)

  return (
    <>
      <h1>{text}</h1>

      <button className="border mt-4" onClick={() => setUppercase()}>Uppercase</button>
    </>
  )
}

export default App
