import OrderFinishedItem from '../OrderFinishedItem/OrderFinishedItem'
import { currencyFormat } from '../util/Helper/Helper'

const OrderFinishedTableItems = ({ total, listItems }) => {
    return (
        <table className='table table-striped table-bordered table-light'>
            <thead className='table-dark'>
                <tr>
                    <th scope='col'>
                        #ID
                    </th>
                    <th scope='col'>
                        Descripción
                    </th>
                    <th scope='col' className='text-end'>
                        Cantidad
                    </th>
                    <th scope='col' className='text-end'>
                        Precio Unitario
                    </th>
                    <th scope='col' className='text-end'>
                        SubTotal
                    </th>
                </tr>
            </thead>
            <tbody>
                {listItems.map(item => < OrderFinishedItem key={`${item.model}-${item.size}`} item={item} />)}
                <tr>
                    <th colSpan='4' scope='row'>
                        Total
                    </th>
                    <td className='text-end table-dark'>
                        {currencyFormat(total)}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default OrderFinishedTableItems

