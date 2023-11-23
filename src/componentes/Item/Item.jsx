import { Link } from "react-router-dom"
import style from "./Item.module.css"

export default function Item({id,nombre,img,precio}) {
  return (
    <div className={style.contenedorCard} key={id}>
    <h2 className= {style.nombreProducto}>{nombre}</h2>
    <img src={img} alt={nombre} width="80%" height="80%"/>
     <h3 className={style.precio}>Precio: {precio}</h3>
   <Link to={`/item/${id}`} className={style.botonDetalles}>Ver Detalle</Link>
    </div>
  )
}   
