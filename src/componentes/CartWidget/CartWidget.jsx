import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/carritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);
    const imgCarrito = "https://img.icons8.com/?size=512&id=23169&format=png"
    return (
        <div>
            <Link className='contenedorCart' to="/cart">
                {/* <img className='cart' src={imgCarrito} alt="" /> */}
                <div className='colorIcon'>
                    <i class="bi bi-cart"></i>
                </div>
                {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget