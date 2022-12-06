
const CartWidget = () => {
  return (
    <button className="btn btn-warning position-relative">
        <i className="bi bi-cart fw-semibold"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge text-bg-secondary fw-semibold"> 
          0
          <span className="visually-hidden">unread messages</span>
        </span>
    </button>
  )
}

export default CartWidget