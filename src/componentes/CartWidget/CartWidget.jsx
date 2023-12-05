import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from "./CartWidget.module.css"
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
 

export default function CartWidget() {
  const {cart}=useContext(CartContext)
  return (
    <>
    <Link to='/cart'className={style.iconoCarrito} style={{display: cart.length>0 ? "flex" : "none" }}>
    <ShoppingCartIcon color="inherit" fontSize="large"/> <h2>{cart.length}</h2>
    </Link>
    </>
  )
}