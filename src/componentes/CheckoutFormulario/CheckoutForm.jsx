import { useState } from "react"
import style from "./CheckoutForm.module.css"
export default function CheckoutForm({onConfirm}) {
    const [nombre, setNombre]= useState("")
    const [telefono, setTelefono]= useState("")
    const [email, setEmail]=useState("")

    const handleConfirm=(event)=>{
        event.preventDefault()
        const userData={
            nombre,telefono,email
        }
        onConfirm(userData)
    }
  return ( 
    <div className={style.contenedorForm}>
        <form onSubmit={handleConfirm} className={style.form}>
            <label className={style.label}>
                Nombre
                <input type="text"
                className={style.input}
                value={nombre}
                onChange={({target})=> setNombre(target.value)} />
            </label>
            <label className={style.label}>
                Telefono
                <input type="text"
                className={style.input}
                value={telefono}
                onChange={({target})=> setTelefono(target.value)} />
            </label>
            <label className={style.label}>
                Email
                <input type="email"
                className={style.input}
                value={email}
                onChange={({target})=> setEmail(target.value)} />
            </label>
            <div className={style.crearOrden}>
                <button type='submit' className={style.botonCrearOrden}>Crear orden</button>
            </div>
        </form>
    </div>
  )
}
