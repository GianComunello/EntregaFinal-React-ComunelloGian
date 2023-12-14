import style  from "./Footer.module.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <>
        <footer className={style.footer}> <p className={style.parrafo}>Todos los derechos reservados </p>
     <ul className={style.ul}>
      <li className={style.li}>
        <InstagramIcon className={style.iconoIg}/>
        <p className={style.redes}>@espacio.horizonte.zarate</p></li>
        <li className={style.li}>
        <FacebookIcon className={style.iconoFb}/>
        <p className={style.redes}>Espacio Horizonte Zarate</p></li>
        </ul>
        </footer>
    </>
  )
}
