import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'


import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <h1>Street wear</h1>
            </Link>
            <nav>
                <ul>
                    <li >
                        <NavLink className='cat' to="/categoria/1">Sneakers</NavLink>
                    </li>
                    <li >
                        <NavLink className='cat' to="/categoria/2">Short</NavLink>
                    </li>
                    <li >
                        <NavLink className='cat' to="/categoria/3">pant</NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar