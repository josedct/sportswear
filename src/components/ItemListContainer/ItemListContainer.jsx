import { getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import Loading from '../Loading/Loading'
import { GetItems } from '../util/GetItems/GetItems'

const ItemListContainer = () => {
  //Componente contenedor de la lista de productos,que muestra todos o alguna categoria en particular segun idCategory, se hace uso de los componentes ITEMLIST y el componente LOADING.
  const [listProduct,setListProduct] = useState([])
  const [loading,setLoading] = useState(true)
  const {idCategory} = useParams()
  
  useEffect(()=>{
    //.then(data =>data.docs.map(prod => ({...prod.data()})))
    setLoading(true)
    const queryData = GetItems((idCategory)? idCategory : 'all')
    getDocs(queryData)
    .then(info => setListProduct(info.docs.map(prod => ({...prod.data()}))))
    .catch(err => console.log(err))
    .finally(()=> {
      window.scrollTo(0, 0)
      setLoading(false)})
  },[idCategory])

  return (
    <section className="container d-flex justify-content-center py-4">
      {
        loading ?
          < Loading />
        : 
          <div className='container'>
            <h1 className='text-uppercase text-warning bg-dark text-center p-2 my-4 shadow-lg'>{(idCategory) ? `Compra solo ${idCategory}` : "Compra lo que mas te guste"}</h1>
            < ItemList items={listProduct}/>
          </div>
      }
    </section>
  )
}

export default ItemListContainer