import React from 'react'
import ItemDetailGalery from '../ItemDetailGallery/ItemDetailGallery'
import ItemDetailInfo from '../ItemDetailInfo/ItemDetailInfo'

const ItemDetail = ({prodDetail} ) => {
    //Componente que muestra el detalle de algun producto en particular, se compone de otros dos componentes (ITEMDETAILGALERY e ITEMDETAILINFO) y tambien muestra una descripcion.
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    < ItemDetailGalery ArrayGalery={prodDetail.IMG} IdProduct={prodDetail.MODELO}/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <ItemDetailInfo 
                        nombre={prodDetail.NOMBRE}
                        categoria={prodDetail.CATEGORIA}
                        modelo={prodDetail.MODELO}
                        precio={prodDetail.PRECIO}
                        stock={prodDetail.STOCK}
                        color={prodDetail.COLOR}
                        estilo={prodDetail.ESTILO}
                    />
                </div>
            </div>
            <div className="row">
                <h3 className='text-uppercase'>Lo que necesitas saber</h3>
                <div className="col-md-12 col-lg-6 p-5">
                    {
                        prodDetail.DESCRIP.map((txt,index) => 
                            <p key={index} className='fs-6'>{`${txt}`}</p>
                        )
                    }
                </div>
                <div className="col-md-12 col-lg-6 p-4">
                    <ul className="list-group list-group-flush">
                    {
                        prodDetail.RESUMEN.map((txt,index) => 
                            <li key={index} className="list-group-item bg-light">{`${txt}`}</li>
                        )
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail