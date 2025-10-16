import { atom, useAtom } from 'jotai'

const themer = atom('light');

function App() {
  const [theme, setTheme] = useAtom(themer);

  const onHandleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={theme === "light" ? "bg-black text-white h-[100vh]" : "bg-white text-black h-[100vh]"}>
      <div className="flex flex-col justify-center items-center h-[100vh]" data-theme={theme}>
        <h1>This is a theme switcher</h1>
        <button className='border p-2 cursor-pointer' onClick={onHandleTheme}>{theme === 'light' ? "Dark" : "Light"}</button>
      </div>
    </div>
  )
}

export default App
