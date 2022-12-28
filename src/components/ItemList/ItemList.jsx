import { memo } from 'react'
import Item from '../Item/Item'

const ItemList = memo(({ items }) => {
    //Componente que mapea con ITEM la lista de productos que se le envia segun. 
    
    return (
        <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-5'>
            {items.map(({model,name,price,image}) =>
                < Item
                    key = {model}
                    id = {model}
                    name = {name}
                    price = {price}
                    imgName = {image[0]}
                />
            )}
        </div>
    )
})

export default ItemList

