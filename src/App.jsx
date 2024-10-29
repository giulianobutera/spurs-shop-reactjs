import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { useState } from 'react'

function App() {
  const[cantidadCarrito, setCantidadCarrito] = useState(0)

  return (
    <>
      <NavBar cantidadCarrito={cantidadCarrito}/>
      <ItemListContainer mensaje="¡Bienvenido a Spurs Shop!" fn={setCantidadCarrito}/>
    </>
  )
}

export default App
