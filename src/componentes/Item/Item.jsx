import './Item.css'
import { Link } from 'react-router-dom'
const Item = ({ id, nombre, precio, img}) => {
    return (
        <div >
            <div className='card'>
                <img className='imgCard' src={img} alt={nombre} />

                <h3 className='detail'> {nombre}</h3>
                <p className='detail'>Precio: ${precio} </p>
                {/* <p className='detail'>Id:{id}</p> */}
                <div className='viewDetail'>
                    <Link className='detailActive' to={`/item/${id}`}> Ver detalles </Link>
                </div>
            </div>
        </div>

    )
}

export default Item