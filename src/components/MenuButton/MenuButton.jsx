const MenuButton = () => {
    //Componente que solo sirve para interaccion de un menu responsivo.
    return (
        <button 
            className='navbar-toggler' 
            type='button' 
            data-bs-toggle='collapse' 
            data-bs-target='#navbarMenu'
        >
            <span className='navbar-toggler-icon'>
            </span>
        </button>
    )
}

export default MenuButton