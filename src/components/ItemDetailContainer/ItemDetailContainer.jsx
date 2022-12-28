import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading'
import { GetItem } from '../util/GetItem/GetItem'

const ItemDetailContainer = () => {
    //Componente que obtiene los datos de algun producto especifico, se usa el componente LOADING para simular una carga y despues manda los datos obtenidos al componente ITEMDETAIL
    const [product, setProduct] = useState({})
    const [loadingProduct, setLoadingProduct] = useState(true)
    const { idProduct } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        GetItem(idProduct)
            .then(info => {
                info.exists() ? 
                    setProduct({ ...info.data() }) 
                    :
                    navigate(`/notfoundorerror/producto-no-existente`)
            })
            .catch(err => console.log(err))
            .finally(() => {
                window.scrollTo(0, 0)
                setLoadingProduct(false)
            })
    }, [])

    return (
        <section className='container d-flex justify-content-center'>
            {
                loadingProduct ?
                    < Loading text={'Cargando datos del producto'} />
                    :
                    < ItemDetail product={product} />
            }
        </section>
    )
}

export default ItemDetailContainer
