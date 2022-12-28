import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext/CartContext'
import { AddOrder } from '../util/AddOrder/AddOrder'

const CartForm = () => {
    const [userData, setUserData] = useState({ name: '', lastName: '', email: '', confirmEmail: '', phone: '' })
    const [errorForm, setErrorForm] = useState({ name: '', email: '', confirmEmail: '', phone: '' })
    const { checkout, emptyList } = useCartContext()
    const navigate = useNavigate()

    const actionInInput = (e) => {
        const { name, value } = e.target
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const validateForm = () => {
        const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/
        const regexTel = /^\d{10}$/
        let error = {}

        if (!userData.name.trim()) {
            error.name = 'Se requiere un Nombre'
        }

        if (!userData.lastName.trim()) {
            error.name = 'Se requiere un Apellido'
        }

        if (!userData.name.trim() && !userData.lastName.trim()) {
            error.nombre = 'Se requiere Nombre y Apellido'
        }

        if (!userData.email.trim()) {
            error.email = 'Se requiere un Email'
        }

        if (userData.email.trim() && !regexEmail.test(userData.email.trim())) {
            error.email = 'Email no valido, revise'
        }

        if (!userData.confirmEmail.trim()) {
            error.confirmEmail = 'Se requiere confirmar email'
        }

        if (userData.confirmEmail.trim() && !regexEmail.test(userData.confirmEmail.trim())) {
            error.confirmEmail = 'Email no valido, revise'
        }

        if (userData.confirmEmail.trim() && userData.email.trim() && userData.confirmEmail.trim() !== userData.email.trim()) {
            error.confirmEmail = 'Los email no son iguales verifique'
        }

        if (!userData.phone.trim()) {
            error.phone = 'Se requiere un telefono'
        }

        if (userData.phone.trim() && !regexTel.test(userData.phone.trim())) {
            error.phone = 'El numero debe tener 10 dígitos'
        }

        setErrorForm(error)
    }

    const sendOrder = (e) => {
        e.preventDefault()

        if (Object.keys(errorForm).length === 0) {
            const user = {
                name: `${userData.name} ${userData.lastName}`,
                phone: userData.phone,
                email: userData.email
            }

            const order = checkout(user)

            AddOrder(order)
                .then(resp => { navigate(`/orderfinished/${resp.id}`) })
                .catch(err => console.log(err))
                .finally(() => { emptyList() })
        }
    }

    useEffect(() => {
        validateForm()
    }, [userData])

    return (
        <div className='px-2 py-2 col-md-11 col-lg-4 bg-light rounded align-self-start shadow border'>
            <div className='text-uppercase text-center pm-2'>
                <h3> Finalizar compra </h3>
                <small> Ingresa tus datos</small>
            </div>
            <form onSubmit={sendOrder}>
                <div className='input-group mt-3'>
                    <span className='input-group-text'>
                        <i className='bi bi-person-square'></i>
                    </span>
                    <input
                        name='name'
                        value={userData.name}
                        onChange={actionInInput}
                        type='text'
                        className='form-control'
                        placeholder='Nombre'
                    />
                    <input
                        name='lastName'
                        value={userData.lastName}
                        onChange={actionInInput}
                        type='text'
                        className='form-control'
                        placeholder='Apellido'
                    />
                </div>
                {errorForm.name && <sup className='ps-2'>{errorForm.name}</sup>}
                <div className='input-group mt-3'>
                    <span className='input-group-text'>
                        <i className='bi bi-envelope-at'></i>
                    </span>
                    <input
                        name='email'
                        value={userData.email}
                        onChange={actionInInput}
                        type='email'
                        className='form-control'
                        placeholder='Email'
                    />
                </div>
                {errorForm.email && <sup className='ps-2'>{errorForm.email}</sup>}
                <div className='input-group mt-3'>
                    <span className='input-group-text'>
                        <i className='bi bi-envelope-at'></i>
                    </span>
                    <input
                        name='confirmEmail'
                        value={userData.confirmEmail}
                        onChange={actionInInput}
                        type='email'
                        className='form-control'
                        placeholder='Confirmar Email'
                    />
                </div>
                {errorForm.confirmEmail && <sup className='ps-2'>{errorForm.confirmEmail}</sup>}
                <div className='input-group mt-3'>
                    <span className='input-group-text'>
                        <i className='bi bi-phone'></i>
                    </span>
                    <input
                        name='phone'
                        value={userData.phone}
                        onChange={actionInInput}
                        type='tel'
                        className='form-control'
                        placeholder='Telefono'
                    />
                </div>
                {errorForm.phone && <sup className='ps-2'>{errorForm.phone}</sup>}
                <button
                    className='w-100 btn btn-warning text-uppercase mt-3'
                    disabled={Object.keys(errorForm).length === 0 ? false : true}
                >
                    <i className='bi bi-cart-check'></i>
                    Hacer pedido
                </button>
            </form>
        </div>
    )
}

export default CartForm