
const misProductos=[
    {id:"1", nombre:"jordan94", precio:900, img:"../img/jordan94.jpeg", idCat: "1"},
    {id:"2", nombre:"gucci Short", precio:700, img:"../img/gucciShort.jpeg", idCat: "2"},
    {id:"3", nombre:"ChromeHearts Jean", precio:800, img:"../img/ChromeHeartsJean.jpeg", idCat: "3"},
    {id:"4", nombre:"air94 Nike", precio:600, img:"../img/nike94.jpeg", idCat: "1"},
    {id:"5", nombre:"nike Short", precio:200, img:"../img/nikeShort.jpeg", idCat: "2"},
    {id:"6", nombre:"Custom Jean", precio:450, img:"../img/CustomJean.jpeg", idCat: "3"},
    {id:"7", nombre:"adidas short", precio:200, img:"../img/adidasShort.jpeg", idCat: "2"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        },100)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout(()=>{
            const producto=misProductos.find(prod=>prod.id ===id);
            resolve(producto);
        },100)
    })
}

export const getProductosPorCategoria = (idCategoria) =>{
    return new Promise(resolve => {
        setTimeout(()=>{
            const ProductosCategoria = misProductos.filter(prod=>prod.idCat===idCategoria);
            resolve(ProductosCategoria);
        },100)
    })
}