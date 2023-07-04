import { useState, useEffect } from "react";
import { getProductos } from "../../asynmock";
import ItemList from "../ItemList/ItemList";
const ItemListContainer = ({greeting}) => {
    const [productos,setProductos]=useState([]);

    useEffect(()=>{
        getProductos()
        .then(respuesta=> setProductos(respuesta))
    }, [])

return (
    <>
<h2> {greeting} </h2>
<ItemList productos={productos}/>
    </>
)
}

export default ItemListContainer