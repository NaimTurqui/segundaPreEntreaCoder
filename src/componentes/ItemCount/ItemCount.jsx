import { useState } from "react"
import './ItemCount.css';

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, SetContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            SetContador(contador + 1);
        }
    }
    const decrementar = () => {
        if (contador > inicial) {
            SetContador(contador - 1);
        }
    }



    return (
        <>
            <div className="contador">
                <button className="boton" onClick={decrementar}> - </button>
                <p className="number">{contador}</p>
                <button className="boton" onClick={incrementar}> + </button>
            </div>
                <button className="botonAgregar" onClick={()=> funcionAgregar(contador)}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount