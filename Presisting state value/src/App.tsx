import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils"

const theme = atomWithStorage('dark', false);

function App() {
  
  const [appTheme, setAppTheme] = useAtom(theme);
  const handleClick = () => {
    setAppTheme(!appTheme);
  }
  return (
    <div className={appTheme ? 'bg-black text-white' : 'bg-white text-black'}>
      <div className="flex flex-col justify-center items-center h-[100vh] gap-5">
        <h1>This is a theme switcher</h1>
        <button className="border p-2 cursor-pointer" onClick={handleClick}>{appTheme ? 'DARK' : 'LIGHT'}</button>
      </div>
    </div>
  )
}

export default App
