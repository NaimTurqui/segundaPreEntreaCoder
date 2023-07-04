import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito= "https://img.icons8.com/?size=512&id=23169&format=png"
return (
    <div>
        <img className='cart' src={imgCarrito} alt="" />
        <strong> 10 </strong>
    </div>
)
}

export default CartWidget