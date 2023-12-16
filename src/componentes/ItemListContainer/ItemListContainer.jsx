import {useEffect, useState } from "react"
import style from "./ItemListContainer.module.css"
import ItemList from "../ItemList/ItemList"

import { useParams } from "react-router-dom"
import {getDocs, collection, query, where} from "firebase/firestore"
import { db } from "../../firebase/client"


export default function ItemListContainer({titulo}) {
  const [products, setProducts]=useState([])
  const [cargando, setCargando]=useState(true)
  const {categoryId} =useParams()

   useEffect(()=>{
    setCargando(true)
    setTimeout(() => {
      const collectionRef = categoryId ? query(collection(db, "productos"),where("categoria", "==", categoryId))
      : collection(db, "productos")
      getDocs(collectionRef)
      .then(response =>{
        const productsAdapted = response.docs.map(doc =>{
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProducts(productsAdapted)
      })
      .catch(error=>{
        console.log(error)
      })
      .finally(()=>{
        setCargando(false)
      })
  }, 1000) 
   },[categoryId])

  return (
    <>
    <div className={style.contendorTitulo}>
    <h1 className={style.tituloProp}>{titulo}</h1>
    </div>
    {
      cargando ? <div className={style.contenedorCargar}> <div className={style.cargar}></div></div> : <ItemList products={products}/>      
    }

    </>
  )
}