export const slides = [
    {
        title: "Top giày chạy bộ nike ",
        desc: "Khám phá nhanh các mẫu giày chạy bộ được ưa chuộng nhất tới từ Nike",
        img: "http://localhost:3000/assets/imgs/slide1.jpg",
        link: "http://localhost:3000/assets/imgs/slide1.jpg",
    },

    {
        title: "Top giày chạy bộ Adidas ",
        desc: "Những sản phẩm giày chạy adidas được yêu thích nhất",
        img: "http://localhost:3000/assets/imgs/slide2.jpg",
        link: "http://localhost:3000/assets/imgs/slide2.jpg",

    },
    {
        title: "Sản phẩm mới nhất từ Nike ",
        desc: "Sản phẩm mới nhất từ Nike đã có mặt tại shop",
        img: "http://localhost:3000/assets/imgs/slide3.jpg",
        link: "http://localhost:3000/assets/imgs/slide3.jpg",

    },
    {
        title: "Sale up to 50%",
        desc: "Gấu chưa có gió đông đã về, đừng lo có Dio Shoes supper sale",
        img: "http://localhost:3000/assets/imgs/slide4.jpg",
        link: "http://localhost:3000/assets/imgs/slide4.jpg",
    }
];

// eslint-disable-next-line 
// const product1 = {
//     _id: '62a17afasfhafhasfasfa',
//     code: 'ADIDAS-001',
//     name: 'Ultraboost Bayonce',
//     brand: 'Adidas',
//     description: 'Siêu phẩm giày thể thao Ultraboost tới từ châu âu',
//     sale: 50,  // default 0
//     price: 100,
//     categories: ['men', 'running'],
//     color: 'red',
//     quantity: 10,
//     size: 40,
//     images: [
//         "http://localhost:3000/assets/imgs/slide1.jpg",
//         "http://localhost:3000/assets/imgs/slide2.jpg",
//         "http://localhost:3000/assets/imgs/slide3.jpg",
//         "http://localhost:3000/assets/imgs/slide4.jpg"
//     ],
// }
// specs: [
//     {"k": "color", "v": "red" },
//     {"k": "size", "v": 40 },
//     {"k": "quantity", "v": 10 },

// ]
// Product.createIndexes({ "specs.k": 1, "specs.v": 1 });

export const productList = [
    {
        _id: 'sjfISWIJFASIFJOAeiu',
        name: 'Adidas Ultraboost',
        slug: 'adidas-ultraboost',
        brand: 'Adidas',
        gender: 'men',
        categories: ['running'],
        colors: 2,
        thumbnail: 'http://localhost:3000/assets/imgs/slide1.jpg',
        price: 1200000,
        sale: 0,

    },
    {
        _id: 'sjfISWeegetiSIFf',
        name: 'Nike R109',
        slug: 'nike-r109',
        brand: 'Nike',
        gender: 'women',
        categories: ['running'],
        colors: 1,
        thumbnail: 'http://localhost:3000/assets/imgs/slide2.jpg',
        price: 1000000,
        sale: 25,
    },
    {
        _id: 'sjfItetweweseu',
        name: 'Nike Air 97',
        slug: 'nike-air-97',
        brand: 'Nike',
        gender: 'women',
        categories: ['running'],
        colors: 2,
        thumbnail: 'http://localhost:3000/assets/imgs/slide3.jpg',
        price: 3000000,
        sale: 0,
    },
    {
        _id: 'sjfISWufiejnJOAeiu',
        name: 'Adidas Ultraboost',
        slug: 'adidas-ultraboost',
        brand: 'Adidas',
        gender: 'women',
        categories: ['running'],
        colors: 2,
        thumbnail: 'http://localhost:3000/assets/imgs/slide1.jpg',
        price: 1200000,
        sale: 0,

    },
    {
        _id: 'sjfuenckutiSIFf',
        name: 'Nike R109',
        slug: 'nike-r109',
        brand: 'Nike',
        gender: 'men',
        categories: ['running'],
        colors: 1,
        thumbnail: 'http://localhost:3000/assets/imgs/slide2.jpg',
        price: 1000000,
        sale: 25,
    },
    {
        _id: 'sjfISWmeunwiwseu',
        name: 'Nike Air 97',
        slug: 'nike-air-97',
        brand: 'Nike',
        gender: 'women',
        categories: ['running'],
        colors: 2,
        thumbnail: 'http://localhost:3000/assets/imgs/slide3.jpg',
        price: 3000000,
        sale: 0,
    },
]

///     detail   list   database 

// eslint-disable-next-line 
const database = {
    _id: "asdasdasdasdasdasd",
    name: 'Ultraboost Bayonce',
    slug: 'ultraboost-bayounce',
    brand: 'adidas',
    gender: 'men',
    description: 'Siêu phẩm giày thể thao Ultraboost tới từ châu âu',
    categories: ['men', 'running'],
    images: [
        {
            public_id: 'faifdfjaidfjaifjadofi',
            url: 'http://localhost:3000/assets/imgs/slide1.jpg'
        },
        {
            public_id: 'faexetferaererereafdofi',
            url: 'http://localhost:3000/assets/imgs/slide2.jpg'
        },
        {
            public_id: 'oraoirtjaierjaifjadofi',
            url: 'http://localhost:3000/assets/imgs/slide3.jpg'
        },
        {
            public_id: 'aidfauiehfjaifjadofi',
            url: 'http://localhost:3000/assets/imgs/slide4.jpg'
        },

    ],
    variants: [
        {
            color: 'red',
            sku: 'dfjafdiadff',
            size: 30,
            stock: 10,
            price: 100000,
            sale: 50,
            img: 'http://localhost:3000/assets/imgs/slide1.jpg',
        },
        {
            color: 'red',
            sku: 'dfjafdifjif',
            size: 29,
            stock: 10,
            price: 100000,
            sale: 50,
            img: 'http://localhost:3000/assets/imgs/slide2.jpg',
        },
    ]
}

// var variant;
// for (let index = 0; index < variants.length; index++) {
//     const element = array[index];
//     variant[element.color].push(element)
// }

// detail API 
export const productDetail = {
    _id: "safhjawufhasiufyasfu",
    name: "Ultraboost Bayonce",
    slug: "ultraboost-bayounce",
    brand: "adidas",
    description: "Siêu phẩm giày thể thao Ultraboost tới từ châu âu Let the Nike Pegasus 39 help you ascend to new heights. More lightweight up top than the Pegasus 38 and ideal to wear in any season, it has a supportive sensation to help keep your feet contained, while underfoot cushioning and double Zoom Air units (1 more than the Peg 38) give you an extra pop to your step. Your trusted workhorse with wings is back. Time to fly",
    categories: ["running"],
    gender: "male",
    images: [
        "http://localhost:3000/assets/imgs/slide1.jpg",
        "http://localhost:3000/assets/imgs/slide2.jpg",
        "http://localhost:3000/assets/imgs/slide3.jpg",
        "http://localhost:3000/assets/imgs/slide4.jpg",
    ],
    minPrice: 100000,
    variants: {
        red: [
            {
                sku: "dfjafdasdfif",
                color: 'red',
                size: 34,
                stock: 10,
                price: 100000,
                sale: 0,
                img: "http://localhost:3000/assets/imgs/slide1.jpg",
            },
            {
                color: 'red',
                sku: "asdfasdf",
                size: 35,
                stock: 1,
                price: 100000,
                sale: 20,
                img: "http://localhost:3000/assets/imgs/slide1.jpg",
            },
        ],
        blue: [
            {
                color: 'blue',
                sku: "dfasdfif",
                size: 40,
                stock: 0,
                price: 100000,
                sale: 50,
                img: "http://localhost:3000/assets/imgs/slide2.jpg",
            },
            {
                color: 'blue',
                sku: "asdsdsdf",
                size: 41,
                stock: 10,
                price: 100000,
                sale: 50,
                img: "http://localhost:3000/assets/imgs/slide2.jpg",
            },
        ],
    }
}


// filter product
// eslint-disable-next-line
const filter = {
    brand: {
        nike: true,
        adidas: true,
    },
    gender: {
        male: true,
        female: true,
    },
    price: {
        sale: false,
        low: true,  // < 1.000.000
        medium: true,  // 1.000.000 - 3.000.000
        high: false, // over 3.000.000
    },

}

/*
    https://dioshoes.shop/category/running
    https://dioshoes.shop/all-product

*/

// Mirage Mock api server

/* api list
     products?brand=adidas+nike+vans&price=sale+low+medium+high
     GET /products?limit=20&offset=20
*/


// variant https://docs.cs-cart.com/latest/user_guide/manage_products/products/product_variations.html

export const cartItems = [
    {
        product: {
            _id: "safhjawufhasiufyasfu",
            name: "Ultraboost Bayonce",
            slug: "ultraboost-bayounce",
            brand: "adidas",
            categories: ["running"],
            gender: "male",
        },
        variant: {
            sku: "dfjafdasdfif",
            color: 'red',
            size: 34,
            stock: 10,
            price: 1000000,
            sale: 0,
            img: "http://localhost:3000/assets/imgs/slide1.jpg",
        },
        quantity: 4,
    },
    {
        product: {
            _id: "safhjawufhasiufyasfu",
            name: "Ultraboost Bayonce",
            slug: "ultraboost-bayounce",
            brand: "adidas",
            categories: ["running"],
            gender: "male",
        },
        variant: {
            color: 'blue',
            sku: "asdsdsdf",
            size: 41,
            stock: 3,
            price: 100000,
            sale: 50,
            img: "http://localhost:3000/assets/imgs/slide2.jpg",
        },
        quantity: 2,
    }
]