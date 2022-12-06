
const Loading = () => {
  //Componente que solo muestra un mensaje y una animacion mientras carga los datos, ya sea una lista o un detalle de producto.
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column vh-100"> 
        <p className="fs-2"> Keep calm and prepare your credit card </p>
        <div className="spinner-border spinner-border-lg text-warning" style={{width: "6rem", height:"6rem"}} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default Loading