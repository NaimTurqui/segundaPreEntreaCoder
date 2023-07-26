import { useContext } from "react"
import { CarritoContext } from "../../context/carritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>
                    No hay productos en el carrito.
                    <Link to="/">
                        Ver productos
                    </Link>
                </h2>
            </>
        )
    }

    return (
        <div className="cartContent" >
            {carrito.map(producto => <CartItem key={producto.id}
                {...producto} />)}
            <button className="btnVaciar" onClick={() => vaciarCarrito()}> vaciar Carrito</button>
            <div className="detailCompra">
                <h2 className="tituloResumen">Resumen total de la compra</h2>
                <div className="valorResumen">
                    <h3 className="detOne">Total:${total}</h3>
                    <h3 className="detTwo">Cantidad total:{cantidadTotal}</h3>
                </div>

                <div>
                    <Link className="btnCheckout" to="/checkout"> Finalizar compra </Link>
                </div>
            </div>

        </div>
    )
}

export default Cart