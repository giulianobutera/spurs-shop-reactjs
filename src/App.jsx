import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomeContainer from './components/Home/HomeContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
import CartContainer from './components/Cart/CartContainer';

function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar cartItems={cartItems} />
          <Routes>
            <Route exact path="/" element={<HomeContainer />} />
            <Route exact path="/kits" element={<ItemListContainer categoria={"kits"} />} />
            <Route exact path="/nike" element={<ItemListContainer categoria={"nike"} />} />
            <Route exact path="/cart" element={<CartContainer />} />
            <Route exact path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
