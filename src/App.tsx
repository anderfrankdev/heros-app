import { AppRouter } from "./heros/router/AppRouter"
import { Navbar } from "./ui"
import './App.css'

function App() {

  return (
    <div className="app">
      {Navbar}
      {AppRouter}
    </div>
  )

}

export default App
