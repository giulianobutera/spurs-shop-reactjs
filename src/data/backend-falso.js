const products = [
    {
        id: 1,
        title: 'Camiseta Titular 2024/25',
        price: '131000',
        category: 'kits',
        description: 'Siéntete como un profesional esta temporada cuando salgas corriendo al campo o salgas a las gradas con la camiseta de local Elite Tottenham Hotspur para hombre 2024/25. Esta camiseta de los Spurs tiene exactamente el diseño auténtico que usan los jugadores en el Tottenham Hotspur Stadium, para que puedas sentirte como uno más del equipo dondequiera que estés.',
        image: '../src/assets/backend-falso-imagenes/home-kit.webp',
    },
    {
        id: 2,
        title: 'Camiseta Suplente 2024/25',
        price: '98300',
        category: 'kits',
        description: 'Inspírate a nivel profesional en el campo o en las gradas con esta equipación de visitante de esta temporada con la camiseta de visitante Elite Tottenham Hotspur para hombre 2024/25. Representa a tu equipo con esta camiseta de primera calidad, esta camiseta tiene un diseño auténtico y es el mismo aspecto que usan los profesionales en el campo, una manera perfecta para que te sientas como uno más de los jugadores.',
        image: '../src/assets/backend-falso-imagenes/away-kit.webp',
    },
    {
        id: 3,
        title: 'Camiseta Alternativa 2024/25',
        price: '163800',
        category: 'kits',
        description: 'El estilo se une al máximo rendimiento con el tercer kit de esta temporada. Representa a tu equipo con la tercera camiseta Elite Tottenham Hotspur para hombre 2024/25. Esta camiseta está modelada y tiene el mismo aspecto que usan los profesionales en el campo. Fabricado con una calidad premium, también tiene un diseño auténtico. Es una manera perfecta para que te sientas como uno más de los jugadores.',
        image: '../src/assets/backend-falso-imagenes/third-kit.webp',
    },
    {
        id: 4,
        title: 'Camiseta Spurs Nike Polo',
        price: '78600',
        category: 'nike',
        description: 'Todo viaje a la grandeza comienza con el dominio de los fundamentos. Pero no te equivoques, el Polo Spurs Nike Mens Slim White & Navy 2024/25 es cualquier cosa menos básico. Un polo perfecto para que cualquier aficionado del Tottenham Hotspur lo lleve en sus entrenamientos, sin dejar lugar a dudas sobre qué equipo tiene tu corazón. Dale un toque especial al cuello plegable con tapeta de botones, el logotipo Swoosh bordado y el icónico gallo de los Spurs estampado con orgullo en el pecho. Hecho de 100% poliéster y se puede lavar a máquina.',
        image: '../src/assets/backend-falso-imagenes/spurs-polo.jpg',
    },
    {
        id: 5,
        title: 'Buzo Spurs Swoosh Crew',
        price: '88000',
        category: 'nike',
        description: 'La sudadera Spurs Nike Swoosh Crew para hombre 2024/25 es una prenda básica del armario. La sudadera crew es un diseño clásico con un cómodo estilo polar para elevar un look diario. Esta sudadera es perfecta para cualquier fan de los Spurs y Nike, ya que la sudadera muestra el swoosh de Nike en el pecho y la marca de los Spurs y se puede lavar a máquina.',
        image: '../src/assets/backend-falso-imagenes/spurs-swoosh.jpg',
    },
    {
        id: 6,
        title: 'Hoodie Spurs Verde Oscuro',
        price: '85200',
        category: 'nike',
        description: 'Maravillosamente cálida para su peso, esta sudadera con capucha Spurs Nike Dark Green Crest Wash 2024/25 para hombre es perfecta para mantenerse abrigado y representar a su equipo al mismo tiempo. Nuestro forro polar de primera calidad, ligero y liso tanto por dentro como por fuera te proporciona mucha calidez. Confeccionada con material de felpa francesa de peso medio, suave por fuera con bucles sin cepillar en el interior, esta sudadera con capucha es transpirable y lo suficientemente cómoda como para usarla durante todo el año.',
        image: '../src/assets/backend-falso-imagenes/spurs-hoodie.jpg',
    },
];

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 1000);
});
  
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        let product = undefined;
        setTimeout(() => {
            product = products.find((prod) => prod.id == parseInt(id))
            if (product) {
                resolve(product);
            } else {
                reject(new Error('Producto no encontrado'));
            }
        }, 500);
    });
};

export const getCategory = (category) => {
    return new Promise((resolve, reject) => {
        let categoryProducts = [];
        setTimeout(() => {
            categoryProducts = products.filter((product) => product.category === category);
            if (categoryProducts.length > 0) {
                resolve(categoryProducts);
            } else {
                reject(new Error('Categoría no encontrada'));
            }
        }, 500);
    });
};