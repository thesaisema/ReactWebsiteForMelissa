import NavBar from './components/NavBar'
import Home from "./pages/Home"
import Melissa from "./pages/Melissa"
import Sainimere from "./pages/Sainimere"


function App(){
  let component
  switch (window.location.pathname) {
    case "/":
        component = <Home />
      break
      case "/Melissa":
        component = <Melissa />
        break
      case "/Sainimere":
        component = <Sainimere />
        break
  }
  return (
    <>
    <NavBar />
    {component}
    </>
  )
}

export default App