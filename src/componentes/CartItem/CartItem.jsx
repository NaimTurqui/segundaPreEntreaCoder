import { useContext } from "react";
import { CarritoContext } from "../../context/carritoContext";
import './CartItem.css'

const CartItem = ({item,cantidad}) => {
    const {eliminarProducto}=useContext(CarritoContext);

    return (
        <div className="itemCart">
            <h4>{item.nombre}</h4>

            <p>Cantidad:{cantidad}</p>
            <p>Precio:${item.precio}</p>
            <button className="btn-eliminar" onClick={()=>eliminarProducto(item.id)}><i class="bi bi-trash3-fill"></i></button>

        </div>
        
    )
}

export default CartItem