import React from 'react'
import toggleTheme from './toggleTheme'
import "./App.css"
import attachThemeToBody from './attachThemeToBody'

function App() {
  let themePersistant = localStorage.getItem("theme") || "black"
  const [theme, setTheme] = React.useState(themePersistant)

  React.useEffect(()=>{
      attachThemeToBody()
    }
  )
  return (
    <div>
      <h2>
        HELLO <span>👋</span>, I AM MAHMUD, AN ARCHITECTURE DRIVEN SOFTWARE ENGINEER 
      </h2>
      <a href="https://drive.google.com/file/d/1bTsR2RqRUsbmGAzqbw3biF_2EtoypElC/view?usp=sharing">For more info here's my resume</a>
      <button onClick={
        ()=>setTheme(
          (state)=>toggleTheme(state)
        )}>
         <img src={
          theme === "black" ? `${process.env.PUBLIC_URL}sun.png`
            : `${process.env.PUBLIC_URL}half-moon.png`
          } alt="" />
      </button>
      <div></div>
    </div>
   
  )
}

export default App
