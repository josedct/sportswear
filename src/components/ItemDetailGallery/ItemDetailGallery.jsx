import { useState } from 'react'
import { dirProducts } from '../util/Helper/Helper'

const ItemDetailGalery = ({images, id}) => {
    //Componente que recibe un arreglo de imagenes de algun producto en particular y crea una minigaleria donde se pueden ver las imagenes.
    
    const [imgName, setImgName] = useState(images[0])

    const changeImg = (img)=>{
        setImgName(img)
    }

    return (
        <div className='container p-4 h-100'>
            <div className='row p-2'>
                <div className='col p-0 shadow'>
                    <img 
                        src={`${dirProducts}/${id}/${imgName}`} 
                        alt={`${imgName}`} 
                        className='w-100' 
                    />
                </div>
            </div>
            <div className='row p-2'>
                {images.map(img => 
                    <div key={img} className='col-2 p-0 border border-1 border-warning'>
                        <button type='button' className='btn btn-light p-1 rounded-0'>
                            <img 
                                src={`${dirProducts}/${id}/${img}`} 
                                onClick={()=>changeImg(img)} 
                                className='img-thumbnail p-0 rounded-0' 
                                alt={`${img}`} 
                                width={100}
                            >
                            </img>
                        </button>
                    </div>
                )}    
            </div>
        </div>
    )
}

export default ItemDetailGalery
