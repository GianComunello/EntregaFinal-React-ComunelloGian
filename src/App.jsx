import Navbar from './componentes/NavBar/NavBar'
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<ItemListContainer titulo="Bienvenido a mi tienda"/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer titulo="Bienvenido a mi tienda"/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App