
const NavItem = ({textLink = 'NavItem'}) => {
  return (
    <li className="nav-item px-2">
        <a className="nav-link text-uppercase fw-semibold" href="#">{textLink}</a>
    </li>
  )
}

export default NavItem