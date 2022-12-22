import { useState } from 'react'
import { CartContext } from '../CartContext/CartContext'

const CartContextProvider = ({children}) => {
    //Estados
    const[cartList, setCartList]=useState([])
    
    //Operaciones
    const isInCart = (id,talla) => cartList.findIndex(prod => (prod.MODELO === id && prod.talla === talla))

    const addToCart = (prod) => {
        const idFind = isInCart(prod.MODELO,prod.talla)
        if(idFind !== -1){
            const idFindSize = cartList[idFind].STOCK.findIndex(stck => stck.TALLA === prod.talla)
            if(cartList[idFind].STOCK[idFindSize].CANTIDAD > (cartList[idFind].count + prod.count) ){
                cartList[idFind].count += prod.count
            }else{
                cartList[idFind].count = cartList[idFind].STOCK[idFindSize].CANTIDAD
            }
            setCartList([...cartList])
        }else{
            setCartList([...cartList,prod])
        }
    }

    const cantTotal = () => cartList.reduce((count,prod) => count+=prod.count,0)

    const costTotal = () => cartList.reduce((count,prod) => count+=prod.count * prod.PRECIO,0) 

    const emptyList = () => setCartList ([])
    
    const removeItemOfList = (id,talla) => setCartList(cartList.filter(prod => !(prod.MODELO === id && prod.talla === talla)))

    const checkout = ({name,phone,email}) => {
        const order = {
            buyer:{
                name,
                phone,
                email
            },
            item:cartList.map(({MODELO,NOMBRE,PRECIO})=>({MODELO,NOMBRE,PRECIO})),
            date: new Date(),
            total: costTotal()
        }
        return order 
    }

    return (
        < CartContext.Provider value={{
            cartList,
            cantTotal,
            costTotal,
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