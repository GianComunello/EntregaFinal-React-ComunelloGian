import { useState } from "react"
import style from "./CheckoutForm.module.css"
export default function CheckoutForm({onConfirm}) {
    const [nombre, setNombre]= useState("")
    const [telefono, setTelefono]= useState("")
    const [email, setEmail]=useState("")
    const [mostrarError, setMostrarError]= useState(false);
    function validarFormulario(){
        const soloLetrasRegex = /^[A-Za-z]+$/;
        const soloNumerosRegex = /^\d+$/;
            if (nombre === "" || !soloLetrasRegex.test(nombre)) {
                console.log("Error en el nombre");
              setMostrarError(true);
      return false;
            }
            
            if (telefono === "" || !soloNumerosRegex.test(telefono)) {
                console.log("Error en el tel");
              setMostrarError(true);
      return false;
            }
        
            if (email === "") {
                console.log("Error en el mail");
              setMostrarError(true);
              return false;
            } 
            return true;
    }

    const handleConfirm=(event)=>{
        event.preventDefault()
        const esFormularioValido = validarFormulario()
        setNombre("");
        setTelefono("");
        setEmail("");
        if(esFormularioValido){
            console.log("Formulario completado con éxito!!");
            const userData={
                nombre,telefono,email
            }
            onConfirm(userData)
        }
       
    }
  return ( 
    <div className={style.contenedorForm}>
        <form onSubmit={handleConfirm} className={style.form}>
            <label className={style.label}>
                Nombre
                <input type="text"
                className={style.input}
                placeholder="Debe colocar su nombre"
                value={nombre}
                onChange={({target})=> setNombre(target.value)} />
            </label>
            <label className={style.label}>
                Telefono
                <input type="text"
                className={style.input}
                placeholder="Debe colocar su numero de telefono"
                value={telefono}
                onChange={({target})=> setTelefono(target.value)} />
            </label>
            <label className={style.label}>
                Email
                <input type="email"
                className={style.input}
                placeholder="Debe colocar su email"
                value={email}
                onChange={({target})=> setEmail(target.value)} />
            </label>
            {mostrarError && (
          <p className={style.error}>Por favor, completa todos los campos correctamente.</p>
        )}
            <div className={style.crearOrden}>
                <button type='submit' className={style.botonCrearOrden}>Crear orden</button>
            </div>
        </form>
    </div>
  )
}
