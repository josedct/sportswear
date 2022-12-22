import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext/CartContext"

const CartForm = () => {
    const [userData, setUserData] = useState({nombre:"",apellido:"",email:"",confemail:"",telefono:""})

    const {checkout,emptyList} = useCartContext()

    const actionInInput = (e) => {
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        })
    }

    const sendOrder = (e) => {
        e.preventDefault()
        
        const user = {
            name: `${userData.nombre} ${userData.apellido}`,
            phone: userData.email,
            email: userData.telefono
        }

        const order = checkout(user)
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => emptyList())
    }

    return (
        <div className="px-2 py-2 col-md-11 col-lg-4 bg-light rounded align-self-start shadow border">
                <div className="text-uppercase text-center pm-2">
                    <h3> Finalizar compra </h3>
                    <small> Ingresa tus datos</small>
                </div>
                <form onSubmit={sendOrder}>
                    <div className="input-group mt-3">
                        <span className="input-group-text"><i className="bi bi-person-square"></i></span>
                        <input name="nombre" value={userData.nombre} onChange={ actionInInput } type="text" className="form-control" placeholder="Nombre" />
                        <input name="apellido" value={userData.apellido} onChange={ actionInInput } type="text" className="form-control" placeholder="Apellido" />
                    </div>
                    <sup className="ps-2">es requerido</sup>
                    <div className="input-group mt-3">
                        <span className="input-group-text"><i className="bi bi-envelope-at"></i></span>
                        <input name="email" value={userData.email} onChange={ actionInInput } type="email" className="form-control" placeholder="Email" />
                    </div>
                    <sup className="ps-2">es requerido</sup>
                    <div className="input-group mt-3">
                        <span className="input-group-text"><i className="bi bi-envelope-at"></i></span>
                        <input name="confemail" value={userData.confemail} onChange={ actionInInput } type="email" className="form-control" placeholder="Confirmar Email" />
                    </div>
                    <sup className="ps-2">es requerido</sup>
                    <div className="input-group mt-3">
                        <span className="input-group-text"><i className="bi bi-phone"></i></span>
                        <input name="telefono" value={userData.telefono} onChange={ actionInInput } type="tel" className="form-control" placeholder="Telefono" />
                    </div>
                    <sup className="ps-2">es requerido</sup>
                    <button className="w-100 btn btn-warning text-uppercase mt-3"> 
                        <i className="bi bi-cart-check"></i> Hacer pedido 
                    </button>
                </form>
        </div>       
    )
}

export default CartForm