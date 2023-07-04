
const misProductos=[
    {id:1, nombre:"jordan94", precio:900, img:"./img/shoes-one.jpg"},
    {id:2, nombre:"gucci Short", precio:700, img:"./img/shoes-one.jpg"},
    {id:3, nombre:"ChromeHearts Jean", precio:800, img:"./img/shoes-one.jpg"},
    {id:4, nombre:"air94 Nike", precio:600, img:"./img/shoes-one.jpg"},
    {id:5, nombre:"nike Short", precio:200, img:"./img/shoes-one.jpg"},
    {id:6, nombre:"Custom Jean", precio:450, img:"./img/shoes-one.jpg"},
    {id:7, nombre:"adidas short", precio:200, img:"./img/shoes-one.jpg"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        },2000)
    })
}

export const getUnProducto = (id) => {
    return new promise (resolve => {
        setTimeout(()=>{
            const producto=misProductos.find(prod=>prod.id ===id);
            resolve(producto);
        },2000)
    })
}