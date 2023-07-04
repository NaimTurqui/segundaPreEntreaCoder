import React from 'react'

const ItemDetail = (id,nombre,precio,img) => {
    return (
        <div>
                <img src={img} alt={nombre}/>
                <h2>nombre: {nombre}</h2>
                <h3>precio: {precio}</h3>
                <p >Id:{id}</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est numquam recusandae hic quaerat pariatur vitae dignissimos eum commodi, eveniet nobis corrupti expedita! Animi sint quis repudiandae temporibus consequuntur quibusdam? Quo.</p>
        </div>
    )
}

export default ItemDetail