import { AppRouter } from "./router"
import './App.css'
import { AuthProvider } from "./auth/AuthContext"

function App() {

  return (
    <AuthProvider>
      <div className="app">
        {AppRouter}
      </div>
    </AuthProvider>   
  )

}

export default App
