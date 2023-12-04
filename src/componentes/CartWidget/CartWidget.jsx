import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from "./CartWidget.module.css"
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

export default function CartWidget() {
  const {cart}=useContext(CartContext)
  return (
    <div className={style.iconoCarrito}>
    <ShoppingCartIcon color="inherit" fontSize="large"/> <h2>{cart.length}</h2>
    </div>
  )
}