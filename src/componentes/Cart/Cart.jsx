import { useContext , useEffect, useState } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import style from "./Cart.module.css"
import { getProducts } from "../../../asyncMock"

export default function Cart () {
    const {cart, limpiarCarrito, totalCantidad, total, eliminarItem}=useContext(CartContext)
    const [productos, setProductos] = useState(null)

    useEffect(()=>{
        getProducts().then(response=>{
            setProductos(response)
        }).catch(error=>{
            console.error(error)
        })
    },[])

    if(cart.length === 0){
        return(
            <div className={style.contenedorSinItems}>
                <h1 className={style.noHayItems}>No hay items en el carrito</h1>
                <Link to="/" className={style.volverProductos}>Ver productos</Link>
            </div>
        )
    }
  return (
    <div className={style.cuerpo}>
    <div className={style.carritoContenedor}>
        {cart.map(p=> 
            <div key={p.id} className={style.contenedorCartItem}> 
            <img src={p.img} alt={p.nombre}/>
            <h2 className={style.nombreCartItem}>{p.nombre}</h2>
            <h3>Precio: {p.precio}</h3>
            <h3>Cantidad:</h3>
            <h3>Categoria: {p.categoria}</h3>
            <button className={style.botonEliminarDelCarrito} onClick={() => eliminarItem(p.id)}>X</button>
            </div>)}
        <h3 className={style.total}>Total: ${total}</h3>
        <button onClick={()=> limpiarCarrito()} className={style.botonVaciarCarrito}>Vaciar carrito</button>
        <Link to='/checkout'className={style.botonCheckout} >Checkout</Link>
    </div>
    </div>
  )
}
