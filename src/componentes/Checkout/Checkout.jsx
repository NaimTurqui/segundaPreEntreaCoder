import { useState, useContext } from "react"
import { CarritoContext } from "../../context/carritoContext"
import { db } from "../../service/config"
import { collection, addDoc } from "firebase/firestore"
import './Checkout.css';
const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);


    const manejadorFormulario = (event) => {
        event.preventDefault();
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos");
            return;
        }
        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito()
            })
            .catch(error => {
                console.log("Error al crear la orden", error);
                setError("Error al crear la orden")
            })
    }

    return (
        <div className="CheckoutBody">
            {
                    carrito.map(producto => (
                        <div className="itemCartCk" key={producto.item.id}>
                            <p>{producto.item.nombre} x {producto.cantidad}</p>
                            <p>{producto.item.precio}</p>
                            
                        </div>
                    ))
                }
                            <h2 className="ckTitulo">Checkout</h2>

            <form onSubmit={manejadorFormulario}>
                
                <div className="form-group">
                    <label htmlFor="">Nombre :</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Apellido :</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Telefono : </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email :</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email Confirmacion :</label>
                    <input type="text" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>
                {
                    error && <p>{error}</p>
                }
                <button className="btnFin" type="submit">Finalizar compra</button>
            </form>
            {
                ordenId && (
                    <strong>Gracias por tu compra! Tu numero de orden es {ordenId} </strong>
                )
            }
        </div>
    )
}

export default Checkout