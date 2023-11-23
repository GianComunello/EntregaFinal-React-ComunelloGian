const products = [
    {
        id:"1",
        nombre:"Iphone 12",
        precio:1000,
        categoria: "celular",
        img: "https://www.macstation.com.ar/img/productos/small/2156-11111.jpg",
        stock:25,
        descripcion: "Es un celular de ultima generacion de la marca iphone el cual tiene una camara de gran calidad y mucha comodidad al uso"
    },
    {
        id:"2",
        nombre:"Samsung A22",
        precio:600,
        categoria: "celular",
        img:"https://1.bp.blogspot.com/-CGfGoiHf4Wc/YTFjXGz1ycI/AAAAAAAAJI8/YjbXKm3xILEfINmIyj-gxAOP4mmK6E9vwCLcBGAsYHQ/s0/samsung-galaxy-a22.png",
        stock:30,
        descripcion: "Es un celular de la marca Samsung el cual tiene una gran comodidad al uso, es muy practico y cumple con todas las necesidades que podes llegar a tener"
    },
    {
        id:"3",
        nombre:"Motorola G22",
        precio: 700,
        categoria: "celular",
        img:"https://fixechelectronica.com.ar/wp-content/uploads/2022/04/g22-5.png",
        stock:20,
        descripcion: "Es un celular de la marca Motorola el cual tiene una gran comodidad al uso, es muy recomendable, tiene una duracion larga ademas de realizar todas las acciones de gran forma"
    },
    {
        id:"4",
        nombre:"Samsung Galaxy Tab A7",
        precio: 800,
        categoria: "tablet",
        img:"https://i.blogs.es/ec6e13/samsung-galaxy-tab-a7-2020-02/840_560.jpg",
        stock:24,
        descripcion: "Es una tablet de la marca Samsung el cual tiene una gran comodidad al uso, es muy recomendable y cumple con todas las necesidades que podes llegar a tener"
    },
    {
        id:"5",
        nombre:"Tablet Lenovo Tab M10",
        precio: 700,
        categoria: "tablet",
        img:"https://s1.eestatic.com/2022/02/28/elandroidelibre/moviles-android/653694751_222253680_1706x1280.jpg",
        stock:20,
        descripcion: "Es una tablet de la marca Lenovo el cual tiene una gran comodidad al uso, es muy recomendable y cumple con todas las necesidades que podes llegar a tener"
    },
    {
        id:"6",
        nombre:"Televisor Smart TV 50 Crystal UHD 4K AU7000",
        precio: 1200,
        categoria: "televisor",
        img:"https://www.multipoint.com.ar/Image/0/750_750-Nuevo%20proyecto%20-%202021-10-28T142209.7611.jpg",
        stock:15,
        descripcion: "Es un televisor de grandisima calidad y gran definicion el cual es ideal para ver peliculas"
    },
    {
        id:"7",
        nombre:"LG NanoCell TV 50'' NANO80 4K UHD",
        precio: 1300,
        categoria: "televisor",
        img:"https://www.lg.com/cac_en/images/tvs/md07555625/gallery/D-2.jpg",
        stock:18,
        descripcion: "Es un televisor de grandisima calidad, mucho sonido y gran definicion el cual es ideal para ver documentales"
    },
    {
        id:"8",
        nombre:"Laptop gamer Legion 5 Gen 6",
        precio: 1600,
        categoria: "notebook",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvwR5O0bjScwl3FkjSSKgt-RityV3RGdLkIyZwxFbRSIfnX5QQ1nxdMFmAZPPTZTzJjk&usqp=CAU",
        stock:20,
        descripcion: "Es una notebook de gran calidad, excelente velocidad la cual es ideal para jugar videojuegos y resaltarte en ellos"
    },
    {
        id:"9",
        nombre:"Notebook Lenovo 82KT AMD",
        precio: 1300,
        categoria: "notebook",
        img:"https://tlr-notebooks.com/wp-content/uploads/2023/05/1-5.webp",
        stock:23,
        descripcion: "Es una notebook de buenisima calidad, la cual te va a sorprender con la capacidad que te da de hacer lo que te imagines con ella"
    },
    {
        id:"10",
        nombre:"SMART TV SAMSUNG 50",
        precio: 1100,
        categoria: "televisor",
        img:"https://images.start.com.ar/UN50AU7000GCZB-2.jpg",
        stock:19,
        descripcion: "Es un televisor con una gran definicion y una vista increible para sentirte dentro de la pelicula"
    },
    {
        id:"11",
        nombre:"Iphone 14",
        precio: 900,
        categoria: "celular",
        img:"https://www.tiendaip.com.ar/img/fotos/101711-31O8D6p7sfL._SL500_.jpg",
        stock: 25,
        descripcion: "Es un celular marca Iphone la cual es de los ultimos que salieron que tienen todo lo que un celular puede tener, es estupendo"
    },
    {
        id:"12",
        nombre:"XPLODE Tablet XP-1 10.1",
        precio: 800,
        categoria: "tablet",
        img:"https://http2.mlstatic.com/D_NQ_NP_815743-MLA48636611677_122021-O.webp",
        stock: 23,
        descripcion: "Es una tablet super recomendable con gran calidad de vision, sonido y una rapidisima velocidad"
    },
]
export const getProducts=()=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}
export const getProductById=(productId)=>{
return new Promise ((resolve)=>{
setTimeout(() => {
    resolve(products.find(prod=> prod.id === productId))
}, 2000);
    })
}
export const getProductsByCategory=(categoryId)=>{
    return new Promise ((resolve)=>{
    setTimeout(() => {
        resolve(products.filter(prod=> prod.categoria === categoryId))
    }, 500);
        })
    }