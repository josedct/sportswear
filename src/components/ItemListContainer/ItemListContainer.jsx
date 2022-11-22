
const ItemListContainer = ({ greeting = 'ItemListContainer'}) => {
  return (
    <section className="d-flex justify-content-center align-items-center text-uppercase fs-4 py-4">
       <i className="bi bi-info-circle"></i> {greeting}
    </section>
  )
}

export default ItemListContainer