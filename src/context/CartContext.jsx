import {createContext, useState } from "react"

export const CartContext = createContext({
  cart:[]})

export default function CartProvider({children}) {
  const [cart, setCart]=useState([])
 
  const agregarItem = (item,cantidad)=>{
if(!enCarrito(item.id)){
  setCart(prev=>[...prev, {...item, cantidad}])
}else{
  console.error("El producto ya fue agregado")
}
  }
  const eliminarItem = (itemId,cantidad) =>{
    if(cantidad>1){
      setCart((prev) =>
        prev.map((prod) =>
          prod.id === itemId ? { ...prod, cantidad: prod.cantidad - 1 } : prod
        )
      )
    }else{
    const carritoActualizado = cart.filter(prod=> prod.id !== itemId)
    setCart(carritoActualizado)
  }
  }
  const limpiarCarrito=()=>{
    setCart([])
  }
  const enCarrito = (itemId)=>{
return cart.some(prod=> prod.id===itemId)
  }
  
  return (
    <div>
        <CartContext.Provider value={{cart, agregarItem, eliminarItem, limpiarCarrito}}>
          {children}
        </CartContext.Provider>
    </div>
  )
}
