import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import OrderFinished from '../OrderFinished/OrderFinished'
import { GetOrder } from '../util/GetOrder/GetOrder'

const OrderFinishedContainer = () => {
    const [orderData, setOrderData] = useState({})
    const [loadingOrder, setLoadingOrder] = useState(true)
    const { idOrder } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        GetOrder(idOrder)
            .then(info => {
                info.exists()?
                    setOrderData({ id: info.id, ...info.data() })
                    :
                    navigate('/notfoundorerror/pedido-no-existente')
            })
            .catch(err => console.log(err))
            .finally(() => {
                window.scrollTo(0, 0)
                setLoadingOrder(false)
            })
    }, [])

    return (
        <div className='container '>
            {
                loadingOrder ?
                    < Loading text={'Cargando los datos del pedido'} />
                    :
                    <OrderFinished order={orderData} />
            }
        </div>
    )
}


export default OrderFinishedContainer