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
        <header>
          <NavBar cartItems={cartItems} />
        </header>
        <main>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<HomeContainer />} />
              <Route exact path="/category/:categoryName" element={<ItemListContainer />} />
              <Route exact path="/product/:id" element={<ItemDetailContainer />} />
              <Route exact path="/cart" element={<CartContainer />} />
              <Route path="*" element={<HomeContainer />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
