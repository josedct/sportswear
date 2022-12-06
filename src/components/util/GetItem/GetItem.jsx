import DocProduct from '../../../assets/product.json'

export const GetItem = (id) => {
  return new Promise((res) => {
        const Product = DocProduct.find(prod => prod.MODELO === id)
        setTimeout(()=>{
            res(Product)
        },2000)
  })
}
