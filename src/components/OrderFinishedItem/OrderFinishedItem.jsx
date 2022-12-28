import { currencyFormat } from '../util/Helper/Helper'

const OrderFinishedItem = ({ item }) => {
    const { name, model, price, size, quantity } = item
    
    return (
        <tr>
            <th scope='row'>
                {model}
            </th>
            <td>
                {name} <br />
                Talla: {size}
            </td>
            <td className='text-end'>
                {quantity}
            </td>
            <td className='text-end'>
                {currencyFormat(price)}
            </td>
            <td className='text-end'>
                {currencyFormat(quantity * price)}
            </td>
        </tr>
    )
}

export default OrderFinishedItem