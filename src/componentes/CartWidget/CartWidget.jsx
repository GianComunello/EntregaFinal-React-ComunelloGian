import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from "./CartWidget.module.css"
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
 

export default function CartWidget() {
  const {cart}=useContext(CartContext)
  const [totalCart,setTotalCart]=useState(0)
  const getCantidad = ()=>{
    let cantidad = 0
    cart?.forEach(el=>cantidad+= el.cantidad)
    setTotalCart(cantidad)
  }
  useEffect(()=>{
    getCantidad()
  },[cart])
  return (
    <>
    <Link to='/cart'className={style.iconoCarrito} style={{display: cart.length>0 ? "flex" : "none" }}>
    <ShoppingCartIcon color="inherit" fontSize="large"/> <h2>{totalCart}</h2>
    </Link>
    </>
  )
}