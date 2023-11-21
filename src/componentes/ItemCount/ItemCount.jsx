import { useState } from "react"
import style from "./ItemCount.module.css"

export default function ItemCount({stock, initial, onAdd}) {
    const [cantidad, setCantidad] = useState(initial)
    function sumar(){
        if(cantidad < stock){
            setCantidad(cantidad+1)
        }
    }
    function restar(){
        if(cantidad > 1){
            setCantidad(cantidad-1)
        }
    }
  return (
    <div className={style.contadorContenedor}>
        <div className={style.contador}>
            <button className={style.boton} onClick={restar}>-</button>
            <h3 className={style.numero}> {cantidad}</h3>
            <button className={style.boton} onClick={sumar}>+</button>
        </div>
        <button className={style.botonAgregar} onClick={()=> onAdd(cantidad)} disabled={!stock}>Agregar al carrito</button>

    </div>
  )
}
