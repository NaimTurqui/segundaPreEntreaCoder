import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/carritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, logo, stock }) => {
    const [agregarCantidad, SetAgregarCantidad] = useState(0);

    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        SetAgregarCantidad(cantidad)
        // console.log("productos agregados:" + cantidad);
        const item = { id, nombre, precio }
        agregarProducto(item, cantidad);
    }

    return (
        <div className='detailContainer'>
            <div>
                <img className='imgDetail' src={img} alt={nombre} />
            </div>

            <div>
                <div className='detailNameIcon'>
                    <img className='icon' src={logo} alt="" />
                    <h2 className='detailName'> {nombre}</h2>
                </div>


                <h3 className='detail'> ${precio}</h3>
                {/* <p >{id}</p> */}
                <p className='detail'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est numquam recusandae hic quaerat pariatur vitae dignissimos eum commodi, eveniet nobis corrupti expedita! Animi sint quis repudiandae temporibus consequuntur quibusdam? Quo.</p>
                {
                    agregarCantidad > 0 ? (<Link className='btnTerminarCompra' to="/cart"> Terminar compra</Link>) :
                        (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                }
            </div>


        </div>
    )
}

export default ItemDetail