import React from 'react'
import { useState } from "react"

const ItemListContainer = ({mensaje, fn}) => {
  const [contadorCarrito, setContadorCarrito] = useState(0)
  const click = () =>{
    setContadorCarrito(contadorCarrito + 1)
    fn(contadorCarrito)
  }

  return (
    <>
      <div>
        <div>{mensaje}</div>
        <button onClick={()=>click()}>Agregar al carrito</button>
      </div>
    </>
  )
}

export default ItemListContainer