import { useEffect, useState } from "react"
import style from "./ItemDetailContainer.module.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getProductById } from "../../../asyncMock"

export default function ItemDetailContainer() {
    const [product, setProduct] = useState(null)
    const [cargando, setCargando]=useState(true)
const {itemId}=useParams()

    useEffect(()=>{
        getProductById(itemId).then(response=>{
            setProduct(response)
            setCargando(false) 
        }).catch(error=>{
            console.error(error)
             setCargando(false) 
        })
    },[itemId])
  return (
    <div className={style.detalleContenedor}>
        <h1 className={style.titulo}>Detalles del producto</h1>
        {
      cargando ? <div className={style.cargar}></div> :<ItemDetail {...product} />  }

    </div>
  )
}
