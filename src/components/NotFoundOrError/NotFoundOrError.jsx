import { useParams } from 'react-router-dom'
import swLogoError from './../../assets/spwr-error.svg'

const NotFoundOrError = () => {
    const {idError} = useParams()
    return (
        <div className='container my-5'>
            <div className='row flex-column align-items-center'>
                <div className='col-10 d-flex justify-content-center'>
                    <img src={swLogoError} className='w-75' alt='spwr-error.svg'/>
                </div>
                <div className='col-12 d-flex justify-content-center'>
                    <p className='text-center text-uppercase fs-2'> 
                        {idError.replaceAll('-',' ')} 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotFoundOrError