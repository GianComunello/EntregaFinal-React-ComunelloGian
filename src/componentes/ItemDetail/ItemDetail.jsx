import style from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"
import { useNavigate } from "react-router-dom"
export default function ItemDetail({nombre,precio,img,categoria,descripcion}) {
  const navigate= useNavigate()
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
    <ItemCount
      initial={1}
      stock={10}
      onAdd={(cantidad) => console.log("Cantidad agregada: ", cantidad)}
    />
    <button onClick={() => navigate(`/`)} className={style.botonInicio}>
      Volver al inicio
    </button>
  </div>
  )
}
