import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './page/MainRoutes';
import Navbar from './components/Navbar/Navbar';
// import { HomePage } from './page/HomePage';
import {createContext,useState } from "react"
export const ThemeContext =createContext(null)
function App() {
  const [theme,setTheme]=useState("light")
  const toggleTheme=()=>{
    setTheme((current)=>(current === "light"? "dark" :"light"))
  }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>

    <div className="App" id={theme}>
      <Navbar toggleTheme={toggleTheme}/>
    <MainRoutes/>
    </div>
    </ThemeContext.Provider>
  
  );}


export default App;
