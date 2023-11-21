import style from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
export default function Navbar() {
  return (
    <>
    <div className={style.navContainer}>
      <Link to="/"className={style.navLink}>
    <h1>HorizonteShop</h1>
    </Link>
    <ul className={style.ulNav}>
      <NavLink to={"/category/celular"} className={style.navLink}>
    <li>Celulares</li>
    </NavLink>
    <NavLink to={"/category/tablet"} className={style.navLink}>
    <li>Tablet</li>
    </NavLink>
    <NavLink to={"/category/televisor"}className={style.navLink}>
    <li>Televisores</li>
    </NavLink>
    <NavLink to={"/category/notebook"}className={style.navLink}>
    <li>Notebooks</li>
    </NavLink>
    </ul>
    <CartWidget/>
    </div>
    </>
  )
}