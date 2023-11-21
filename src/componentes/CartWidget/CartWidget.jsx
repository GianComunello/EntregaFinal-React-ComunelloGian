import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from "./CartWidget.module.css"

export default function CartWidget() {
  return (
    <div className={style.iconoCarrito}>
    <ShoppingCartIcon color="inherit" fontSize="large"/> <h2>0</h2>
    </div>
  )
}