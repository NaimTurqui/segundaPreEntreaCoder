import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
const App = () => {

  return (
    < >
        <NavBar/>
        <ItemListContainer greeting={"Bienvenido a la mejor tienda de Streetwear"}/>
        {/* <ItemDetailContainer/> */}
        {/* aqui es donde tuve un problema, ya que al descomentar el componente 
        "ItemDetailContainer" la pagina queda en blanco. Segui los pasos que el profesor
        hizo en clase y revise mi codigo 3 veces, pero no encuentro diferencias. Espero
        pueda explicarme como solucionarlo */}
    </>

  )
}

export default App