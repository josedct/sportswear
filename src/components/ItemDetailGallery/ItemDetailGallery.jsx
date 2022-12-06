import { useState } from "react"

const ItemDetailGalery = ({ArrayGalery, IdProduct}) => {
    //Componente que recibe un arreglo de imagenes de algun producto en particular y crea una minigaleria donde se pueden ver las imagenes.
    const dirproductos = 'https://reactcoder.consultoriainformaticaon.com/productos'
    const [imgsrc, setImgsrc] = useState(ArrayGalery[0])

    const changeImg = (img)=>{
        setImgsrc(img)
    }

    return (
        <div className="container p-4 h-100">
            <div className="row p-2">
                <div className="col p-0 shadow">
                    <img src={`${dirproductos}/${IdProduct}/${imgsrc}`} alt={`${imgsrc}`} className="w-100" />
                </div>
            </div>
            <div className="row p-2">
                {
                    ArrayGalery.map(picture => 
                        <div key={picture} className="col-2 p-0 border border-1 border-warning">
                            <button type="button" className="btn btn-light p-1 rounded-0">
                                <img src={`${dirproductos}/${IdProduct}/${picture}`} onClick={()=>changeImg(picture)} className="img-thumbnail p-0 rounded-0" alt={`${picture}`} width={100}></img>
                            </button>
                        </div>
                    )
                }    
            </div>
        </div>
    )
}

export default ItemDetailGalery