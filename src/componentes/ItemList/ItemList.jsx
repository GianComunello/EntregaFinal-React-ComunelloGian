import style from "./ItemList.module.css"
import Item from "../Item/Item"
import { useParams } from "react-router-dom" 
export default function ItemList({ products }) {
  const {categoryId} =useParams()
  return (
    <>
    {categoryId == null ? <h2 className={style.categoriaTitulo}>Todos los productos: </h2> :  <h2 className={style.categoriaTitulo}> Categoria: {categoryId}</h2> }
    <div className={style.contenedorItems}>
      {products.map(prod => <Item key= {prod.id} {...prod}/>)}
    </div>
    </>
  )
}
