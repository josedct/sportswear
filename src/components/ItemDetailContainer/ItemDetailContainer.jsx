import { getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"
import { GetItem } from "../util/GetItem/GetItem"

const ItemDetailContainer = () => {
    //Componente que obtiene los datos de algun producto especifico, se usa el componente LOADING para simular una carga y despues manda los datos obtenidos al componente ITEMDETAIL
    const [productDetail,setProductDetail] = useState({})
    const [loadingDetail,setLoadingDetail] = useState(true)
    const {idProduct} = useParams()

    useEffect(()=>{
        const queryData = GetItem(idProduct)
        getDoc(queryData)
        .then(info => setProductDetail( {...info.data()} ))
        .catch(err => console.log(err))
        .finally(()=> {
            window.scrollTo(0, 0)
            setLoadingDetail(false)})
    },[])

    return (
        <section className="container d-flex justify-content-center">
            {
                loadingDetail ? 
                    < Loading />
                :  
                    < ItemDetail prodDetail={productDetail}/>
            }
        </section>
    )
}

export default ItemDetailContainer