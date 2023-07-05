import React from 'react'
import './ItemDetail.css'
const ItemDetail = ({id,nombre,precio,img}) => {
    return (
        <div className='detailContainer'>
                <img className='imgDetail' src={img} alt={nombre}/>
                <h2> {nombre}</h2>
                <h3> ${precio}</h3>
                <p >{id}</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est numquam recusandae hic quaerat pariatur vitae dignissimos eum commodi, eveniet nobis corrupti expedita! Animi sint quis repudiandae temporibus consequuntur quibusdam? Quo.</p>
        </div>
    )
}

export default ItemDetail