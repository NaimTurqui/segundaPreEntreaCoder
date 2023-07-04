import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
return (
    <header>
        <h1>Street wear shop</h1>
        <nav>
            <ul>
                <li>Sneakers</li>
                <li>Shorts</li>
                <li>Pants </li>
                <li>Accesories</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
)
}

export default NavBar