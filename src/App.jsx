import Navbar from './componentes/NavBar/Navbar'
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import CartProvider  from './context/CartContext'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Checkout/Checkout'
import Footer from './componentes/footer/Footer'


function App() {

  return (
    <>
    <BrowserRouter>
    <CartProvider>
     <Navbar/>
     <Routes> 
      <Route path='/' element={<ItemListContainer titulo="Bienvenido a mi tienda"/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer titulo="Bienvenido a mi tienda"/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>}/>
     </Routes>
     <Footer/>
     </CartProvider>
     </BrowserRouter>
    </>
  )
}

export default App