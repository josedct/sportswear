import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'
import { GetItems } from '../util/GetItems/GetItems'

const ItemListContainer = () => {
    //Componente contenedor de la lista de productos,que muestra todos o alguna categoria en particular segun idCategory, se hace uso de los componentes ITEMLIST y el componente LOADING.
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        GetItems((idCategory) ? idCategory : 'all')
            .then(info => { 
                info.empty ?
                    navigate(`/notfoundorerror/categoria-no-existente`)
                : 
                    setListProducts(info.docs.map(product => ({ ...product.data() })))
            })
            .catch(err => console.log(err))
            .finally(() => {
                window.scrollTo(0, 0)
                setLoading(false)
            })
    }, [idCategory])

    return (
        <section className='container d-flex justify-content-center py-4'>
            {
                loading ?
                    < Loading text={'Cargando productos'} />
                    :
                    <div className='container'>
                        <h1 className='text-uppercase text-warning bg-dark text-center p-2 my-4 shadow-lg'>
                            {idCategory
                                ? `Compra solo ${idCategory}`
                                : 'Compra lo que mas te guste'}
                        </h1>
                        < ItemList items={listProducts} />
                    </div>
            }
        </section>
    )
}

export default ItemListContainer