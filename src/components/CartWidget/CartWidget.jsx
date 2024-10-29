import React from 'react'
import { PiShoppingCartSimpleThin } from "react-icons/pi"

const CartWidget = ({cantidadCarrito}) => {
  return (
    <>
      <span>Mi carrito: {cantidadCarrito}</span>
      <PiShoppingCartSimpleThin /> 
    </>
  )
}

export default CartWidget