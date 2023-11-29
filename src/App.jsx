import Navbar from './componentes/NavBar/NavBar'
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import CartProvider from './context/cartContext'
import Cart from './componentes/Cart/Cart'

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
      <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>}/>
     </Routes>
     </CartProvider>
     </BrowserRouter>
    </>
  )
}

export default App