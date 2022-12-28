import { useState } from 'react'
import { CartContext } from '../CartContext/CartContext'

const CartContextProvider = ({ children }) => {
    //Estados
    const [cartList, setCartList] = useState([])

    //Operaciones
    const isInCart = (id, size) => cartList.findIndex(product => (product.model === id && product.size === size))

    const addToCart = (product) => {
        const idFound = isInCart(product.model, product.size)
        if (idFound !== -1) {
            const idFoundSize = cartList[idFound].stock.findIndex(stck => stck.size === product.size)
            cartList[idFound].quantity = (cartList[idFound].stock[idFoundSize].quantity > (cartList[idFound].quantity + product.quantity)) 
                ? cartList[idFound].quantity + product.quantity
                : cartList[idFound].stock[idFoundSize].quantity
            setCartList([...cartList])
        } else {
            setCartList([...cartList, product].sort((a,b)=>{
                if (a.name < b.name) {
                    return -1
                }
                if (a.name > b.name) {
                    return 1
                }
                return a.size < b.size ? -1 : 1 
            }))
        }
    }

    const totalQuantity = () => cartList.reduce((quantity, product) => quantity += product.quantity, 0)

    const totalCost = () => cartList.reduce((cost, product) => cost += product.quantity * product.price, 0)

    const emptyList = () => setCartList([])

    const removeItemOfList = (id, size) => setCartList(cartList.filter(product => !(product.model === id && product.size === size)))

    const checkout = ({ name, phone, email }) => {
        const order = {
            buyer: {
                name,
                phone,
                email
            },
            items: cartList.map(({ model, name, price, quantity, size }) => ({ model, name, price, quantity, size })),
            date: new Date(),
            total: totalCost(),
            status: 'Generado'
        }
        return order
    }

    return (
        < CartContext.Provider value={{
            cartList,
            totalQuantity,
            totalCost,
            addToCart,
            emptyList,
            removeItemOfList,
            checkout
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
