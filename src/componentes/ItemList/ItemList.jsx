import style from "./ItemList.module.css"
import Item from "../Item/Item"
export default function ItemList({ products }) {

  return (
    <div className={style.contenedorItems}>
      {products.map(prod => <Item key= {prod.id} {...prod}/>)}
    </div>
  )
}
