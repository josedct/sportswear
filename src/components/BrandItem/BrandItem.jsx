import SportsWLogo from './../../assets/spwr-logo.svg'

const BrandItem = () => {
  return (
    <a className='navbar-brand'>
        <img src={SportsWLogo} alt="SportsWear Logo" width={150}/>
    </a>
  )
}

export default BrandItem