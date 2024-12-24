import { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const agregarItem = (item) => {
    const index = cart.findIndex(i => i.id === item.id);
    if (index > -1) {
      const oldAmount = cart[index].amount;
      cart.splice(index, 1);
      setCart([...cart, {...item, amount: item.amount + oldAmount}]);
    }
    else {
      setCart([...cart, {...item, amount: item.amount}]);
    }
  };

  const vaciarCarrito = () => {
    setCart([]);
  }

  const eliminarItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  }

  const sumaPrecioItems = () => {
    return cart.reduce((acum, valor) => (acum + (valor.amount * valor.price)), 0);
  }  

  return (
    <CartContext.Provider value={{cart, agregarItem, vaciarCarrito, eliminarItem, sumaPrecioItems}}>
      {children}
    </CartContext.Provider>
  );
}
