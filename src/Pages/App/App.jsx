//React
import { useRoutes, BrowserRouter } from 'react-router-dom'
//Pages
import { Home } from '../Home'
import { Servicios } from '../Servicios'
import { SobreNosotros } from '../SobreNosotros'
import { Repuestos } from '../Repuestos'
//Components
import { NavBar } from '../../Components/Navbar'
import { Footer } from '../../Components/Footer'
//Styles
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path:"/", element: <Home/>},
    {path:"/nuestros-servicios", element: <Servicios/>},
    {path:"/sobre-nosotros", element: <SobreNosotros/>},
    {path:"/repuestos", element: <Repuestos/>},
  ])

  return routes
}

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRoutes/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
