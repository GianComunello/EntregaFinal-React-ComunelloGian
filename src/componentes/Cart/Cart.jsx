import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import style from "./Cart.module.css"
import CartItem from "../CartItem/CartItem"

export default function Cart() {
    const {cart, limpiarCarrito, totalCantidad, total }=useContext(CartContext)
    if(totalCantidad === 0){
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/" className={style.volverProductos}>Ver productos</Link>
            </div>
        )
    }
  return (
    <div className={style.cuerpo}>
    <div className={style.carritoContenedor}>
        {cart.map(p=> <CartItem key={p.id} {...p}/>)}
        <h3 className={style.total}>Total: ${total}</h3>
        <button onClick={()=> limpiarCarrito()} className={style.botonVaciarCarrito}>Vaciar carrito</button>
        <Link to='/checkout'className={style.botonCheckout} >Checkout</Link>
    </div>
    </div>
  )
}
