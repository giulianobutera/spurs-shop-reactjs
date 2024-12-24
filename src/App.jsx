import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import HomeContainer from './components/Home/HomeContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/Cart/CheckoutForm';

function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <main>
            <div className="App">
              <Routes>
                <Route exact path="/" element={<HomeContainer />} />
                <Route exact path="/category/:categoryName" element={<ItemListContainer />} />
                <Route exact path="/product/:id" element={<ItemDetailContainer />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/cart/checkout" element={<CheckoutForm />} />
                <Route path="*" element={<HomeContainer />} />
              </Routes>
            </div>
          </main>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
