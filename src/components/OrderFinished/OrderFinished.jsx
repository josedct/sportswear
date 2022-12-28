import OrderFinishedTableItems from '../OrderFinishedTableItems/OrderFinishedTableItems'
import SportsWLogo from './../../assets/spwr-logo.svg'

const OrderFinished = ({ order }) => {
    const { id, date, buyer, items, total, status } = order
    const { name, email, phone } = buyer
    
    return (
        <div className='container p-4 border my-4'>
            <div className='row g-4'>
                <div className='col-12'>
                    <h1 className='text-uppercase text-center pb-5'>
                        <img src={SportsWLogo} alt='SportsWear Logo' width={150} />
                        Comprobante del pedido
                    </h1>
                </div>
            </div>
            <div className='row g-5 justify-content-between'>
                <div className='col-5'>
                    <div className='p-2 border h-100'>
                        <h5 className='text-break'>
                            Datos del Pedido
                        </h5>
                        <p className='text-break mb-0'>
                            Folio de Pedido:
                            <span className='fw-semibold'>
                                {id}
                            </span>
                        </p>
                        <p className='text-break mb-0'>
                            Estado:
                            <span className='fw-semibold'>
                                {status}
                            </span>
                        </p>
                        <p className='text-break mb-0'>
                            Vendido por:
                            <span className='fw-semibold'>
                                Sportswear S.A. de C.V.
                            </span>
                        </p>
                        <p className='text-break mb-0'>
                            Fecha:
                            <span className='fw-semibold'>
                                {date.toDate().toLocaleString()}
                            </span>
                        </p>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='p-2 border h-100'>
                        <h5 className='text-break'>
                            Datos del Cliente
                        </h5>
                        <p className='text-break mb-0'>
                            Nombre:
                            <span className='fw-semibold'>
                                {name}
                            </span>
                        </p>
                        <p className='text-break mb-0'>
                            Correo:
                            <span className='fw-semibold'>
                                {email}
                            </span>
                        </p>
                        <p className='text-break mb-0'>
                            Telefono:
                            <span className='fw-semibold'>
                                {phone}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='row g-5'>
                <div className='col-12 py-4 table-responsive'>
                    < OrderFinishedTableItems total={total} listItems={items} />
                </div>
            </div>
            <div className='row g-4'>
                <div className='col-12 text-center'>
                    <small className='text-uppercase pb-5'>
                        *Comprobante sin validez oficial
                    </small>
                </div>
            </div>
        </div>
    )
}

export default OrderFinished

