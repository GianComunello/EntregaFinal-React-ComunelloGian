import { useEffect, useState } from "react"
import style from "./ItemDetailContainer.module.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import {doc, getDoc} from "firebase/firestore"
import { db } from "../../firebase/client"

export default function ItemDetailContainer() {
    const [product, setProduct] = useState(null)
    const [cargando, setCargando]=useState(true)
const {itemId}=useParams()

    useEffect(()=>{
        setCargando(true)
        setTimeout(() => {
        const docRef= doc(db, "productos", itemId)
        getDoc(docRef)
        .then(response =>{
          const data = response.data()
          const productAdapted = { id: response.id, ...data}
          setProduct(productAdapted)
        })
        .catch(error=>{
          console.log(error)
        })
        .finally(()=>
        setCargando(false))
      }, 1000)
    },[itemId])
  return (
    <div className={style.detalleContenedor}>
        <h1 className={style.titulo}>Detalles del producto</h1>
        {
      cargando ? <div className={style.cargar}></div> :<ItemDetail {...product} />  }

    </div>
  )
}
