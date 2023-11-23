import {useEffect, useState } from "react"
import style from "./ItemListContainer.module.css"
import ItemList from "../ItemList/ItemList"
import { getProducts, getProductsByCategory } from "../../../asyncMock"
import { useParams } from "react-router-dom"


export default function ItemListContainer({titulo}) {
  const [products, setProducts]=useState([])
  const [cargando, setCargando]=useState(true)
  const {categoryId} =useParams()

   useEffect(()=>{
    const asyncFunc= categoryId ? getProductsByCategory : getProducts
    asyncFunc(categoryId).then(response=>{
      setProducts(response)
      setCargando(false) 
    }).catch(error=>{
      console.error(error)
       setCargando(false) 
    })
   },[categoryId])

  return (
    <>
    <div className={style.contendorTitulo}>
    <h1 className={style.tituloProp}>{titulo}</h1>
    </div>
    {
      cargando ? <div className={style.cargar}></div> : null      
    }
    {<ItemList products={products}/>}
    </>
  )
}