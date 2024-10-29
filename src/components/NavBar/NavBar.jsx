import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

function NavBar({cantidadCarrito}) {
  return (
    <nav>
      <h1>Spurs Shop</h1>
      <CartWidget cantidadCarrito={cantidadCarrito}/>
    </nav>
  );
}

export default NavBar;