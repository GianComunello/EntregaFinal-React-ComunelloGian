import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch} from "firebase/firestore"
import { db } from "../../firebase/client"
import style from "./Checkout.module.css"
import CheckoutForm from "../CheckoutFormulario/CheckoutForm"

export default function Checkout() {
    const [cargando, setCargando]=useState(false)
    const [ordenId, setOrdenId]=useState("")
    const {cart, limpiarCarrito} = useContext(CartContext)
    const crearOrden = async ({nombre,telefono,email})=>{
        setCargando(true)
        try{
            const objOrden={
                buyer:{
                    nombre,telefono,email
                },
                items:cart,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const fueraDeStock=[]
            const ids =cart.map(prod=> prod.id)
            const productosRef=collection(db, "productos")
            const productosAgragadosFirestore= await getDocs(query(productosRef, where(documentId(), "in", ids)))
            const {docs}= productosAgragadosFirestore
            docs.forEach(doc=>{
                const dataDoc = doc.data()
                const stockDb=dataDoc.stock
                const productoAgregadoCarrito= cart.find(prod=> prod.id === doc.id)
                const prodCantidad = productoAgregadoCarrito?.cantidad
                if(stockDb>= prodCantidad){
                    batch.update(doc.ref,{stock: stockDb - prodCantidad})
                }else{
                    fueraDeStock.push({id: doc.id, ...dataDoc})
                }
            })
            if(fueraDeStock.length === 0){
                await batch.commit()
                const orderRef= collection(db, "orders")
                const orderAgregada= await addDoc(orderRef, objOrden)
                setOrdenId(orderAgregada.id)
                limpiarCarrito()
            }else{
                console.error("Hay productos que estan fuera de stock")
            }
        } catch (error) {
            console.log(error);
          } finally {
            setCargando(false); 
          }
    }
    if(cargando){
        return <div className={style.cargar}></div>
    }
    if(ordenId){
        return <>
        <div className={style.idCompra}> <h1>El id de tu compra es <strong>{ordenId}</strong></h1> </div>
        </>
    }
  return (
    <div className={style.contenedorCheckout}> 
        <h1>Checkout</h1>
    <CheckoutForm onConfirm={crearOrden}/>
    </div>
  )
}
