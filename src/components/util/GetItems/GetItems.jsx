import DocProduct from '../../../assets/product.json'

export const GetItems = (filter) => {
    return new Promise((res)=>{
        const filterProduct = (filter === 'all') ? DocProduct : DocProduct.filter(prod => prod.CATEGORIA === filter)
        setTimeout(()=>{
            res(filterProduct)            
        }, 2000)
    } )
}
