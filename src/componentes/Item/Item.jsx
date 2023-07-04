import './Item.css'
const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='containCard'>
            <div className='card'>
                <img src={img} alt={nombre} />
                <h3 className='detail'> {nombre}</h3>
                <p className='detail'>Precio: {precio} </p>
                <p className='detail'>Id:{id}</p>
                <button> Ver detalles </button>
            </div>
        </div>

    )
}

export default Item