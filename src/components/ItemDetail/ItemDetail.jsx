import React from 'react'
import ItemDetailGalery from '../ItemDetailGallery/ItemDetailGallery'
import ItemDetailInfo from '../ItemDetailInfo/ItemDetailInfo'
import ItemDetailOption from '../ItemDetailOption/ItemDetailOption'

const ItemDetail = ({ product }) => {
    //Componente que muestra el detalle de algun producto en particular, se compone de otros dos componentes (ITEMDETAILGALERY e ITEMDETAILINFO) y tambien muestra una descripcion.
    const { name, category, model, price, color, style, image, description, summary } = product
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 col-lg-6'>
                    < ItemDetailGalery
                        images={image}
                        id={model}
                    />
                </div>
                <div className='col-md-12 col-lg-6 p-5'>
                    <ItemDetailInfo
                        name={name}
                        category={category}
                        model={model}
                        price={price}
                        color={color}
                        style={style}
                    />
                    < ItemDetailOption product={product} />
                </div>
            </div>
            <div className='row'>
                <h3 className='text-uppercase'>Lo que necesitas saber</h3>
                <div className='col-md-12 col-lg-6 p-5'>
                    {description.map((txt, index) =>
                        <p key={`${index}DES`} className='fs-6'>{`${txt}`}</p>
                    )}
                </div>
                <div className='col-md-12 col-lg-6 p-4'>
                    <ul className='list-group list-group-flush'>
                        {summary.map((txt, index) =>
                            <li key={`${index}RES`} className='list-group-item bg-light'>{`${txt}`}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail