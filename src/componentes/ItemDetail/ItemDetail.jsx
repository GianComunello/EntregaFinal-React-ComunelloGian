import style from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"


export default function ItemDetail({nombre,precio,img,categoria,descripcion,stock,id}) {

  const [cantidadAgregada, setCantidadAgregada]=useState(0)
  const {agregarItem}=useContext(CartContext)
  const navigate= useNavigate()

  const funcionAgregar=(cantidad)=>{
  setCantidadAgregada(cantidad)
const item={
  id,nombre,precio
}
agregarItem(item,cantidad)
  }

  
  return (
    <div className={style.contenedorProducto}>
    <h1 className={style.nombreProducto}>{nombre}</h1>
    <img
      src={img}
      alt={nombre}
      width="250rem"
      height="250rem"
    />
    <div className={style.categoriaPrecio}>
      <h2 className={style.precio}>Precio: {precio} $USD</h2>
      <h2 className={style.precio}>Categoria: {categoria}</h2>
    </div>
    <h3 className={style.description}>
      Descripcion: {descripcion}
    </h3>
    {
      cantidadAgregada > 0 ? (
        <Link to="/cart" className={style.botonTerminarCompra}>Terminar compra</Link>
      ):(
<ItemCount
      initial={1}
      stock={stock}
      onAdd={funcionAgregar}
    />
      )
    }
    <button onClick={() => navigate(`/`)} className={style.botonInicio}>
      Volver al inicio
    </button>
  </div>
  )
}
