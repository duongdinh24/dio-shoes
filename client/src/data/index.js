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

// product detail
export const product = {
    name: 'Ultraboost Bayonce',
    slug: 'ultraboost-bayounce',
    brand: 'Adidas',
    description: 'Siêu phẩm giày thể thao Ultraboost tới từ châu âu',
    categories: ['men', 'running'],
    images: [
        "http://localhost:3000/assets/imgs/slide1.jpg",
        "http://localhost:3000/assets/imgs/slide2.jpg",
        "http://localhost:3000/assets/imgs/slide3.jpg",
        "http://localhost:3000/assets/imgs/slide4.jpg",
    ],
    options: [
        {
            color: 'red',
            sizes: [
                {
                    _id: 'dfjafdifjif',
                    size: 30,
                    stock: 10,
                    price: 100000,
                    sale: 50,
                },
                {
                    _id: 'dfjafdifsdff',
                    size: 35,
                    stock: 10,
                    price: 100000,
                    sale: 50,
                }
            ]
        },
        {
            color: 'blue',
            sizes: [
                {
                    _id: 'sfiaiweuuf',
                    size: 30,
                    stock: 10,
                    price: 100000,
                    sale: 50,
                },
                {
                    _id: 'adfeef',
                    size: 35,
                    stock: 10,
                    price: 100000,
                    sale: 50,
                }
            ]
        },
    ],

}

export const productList = [
    {
        id: 'sjfISWIJFASIFJOAeiu',
        name: 'Adidas Ultraboost',
        slug: 'adidas-ultraboost',
        brand: 'Adidas',
        categories: ['men', 'running'],
        colors: 2,
        thumbnail: 'http://localhost:3000/assets/imgs/slide1.jpg',
        price: 1200000,
        sale: 0,

    },
    {
        id: 'sjfISWeegetiSIFf',
        name: 'Nike R109',
        slug: 'nike-r109',
        brand: 'Nike',
        categories: ['men', 'running'],
        colors: 1,
        thumbnail: 'http://localhost:3000/assets/imgs/slide2.jpg',
        price: 1000000,
        sale: 25,
    },
    {
        id: 'sjfISWIJFASIgseu',
        name: 'Nike Air 97',
        slug: 'nike-air-97',
        brand: 'Nike',
        categories: ['men', 'running'],
        colors: 2,
        thumbnail: 'http://localhost:3000/assets/imgs/slide3.jpg',
        price: 3000000,
        sale: 0,
    },
    {
        id: 'sjfISWIJFASIFJOAeiu',
        name: 'Adidas Ultraboost',
        slug: 'adidas-ultraboost',
        brand: 'Adidas',
        categories: ['men', 'running'],
        colors: 2,
        thumbnail: 'http://localhost:3000/assets/imgs/slide1.jpg',
        price: 1200000,
        sale: 0,

    },
    {
        id: 'sjfISWeegetiSIFf',
        name: 'Nike R109',
        slug: 'nike-r109',
        brand: 'Nike',
        categories: ['men', 'running'],
        colors: 1,
        thumbnail: 'http://localhost:3000/assets/imgs/slide2.jpg',
        price: 1000000,
        sale: 25,
    },
    {
        id: 'sjfISWIJFASIgseu',
        name: 'Nike Air 97',
        slug: 'nike-air-97',
        brand: 'Nike',
        categories: ['men', 'running'],
        colors: 2,
        thumbnail: 'http://localhost:3000/assets/imgs/slide3.jpg',
        price: 3000000,
        sale: 0,
    },
]

// product on database
export const products = [
    {
        id: 'afaeueruadfafuawe8fh',
        code: 'ADIDAS-001',
        name: 'Ultraboost Bayonce',
        brand: 'Adidas',
        description: 'Siêu phẩm giày thể thao Ultraboost tới từ châu âu',
        sale: 50,
        price: 100000,
        categories: ['men', 'running'],
        size: 10,
        color: 'red',
        stock: 10,
    },
]


///     detail   list   database 

// eslint-disable-next-line 
const database = {
    _id: "asdasdasdasdasdasd",
    name: 'Ultraboost Bayonce',
    slug: 'ultraboost-bayounce',
    brand: 'Adidas',
    description: 'Siêu phẩm giày thể thao Ultraboost tới từ châu âu',
    categories: ['men', 'running'],
    images: [
        "http://localhost:3000/assets/imgs/slide1.jpg",
        "http://localhost:3000/assets/imgs/slide2.jpg",
        "http://localhost:3000/assets/imgs/slide3.jpg",
        "http://localhost:3000/assets/imgs/slide4.jpg",
    ],
    variants: [
        {
            color: 'red',
            _id: 'dfjafdifjif',
            size: 30,
            stock: 10,
            price: 100000,
            sale: 50,
        },
        {
            color: 'red',
            _id: 'dfjafdifjif',
            size: 29,
            stock: 10,
            price: 100000,
            sale: 50,
        },
    ]
}

// var variant;
// for (let index = 0; index < variants.length; index++) {
//     const element = array[index];
//     variant[element.color].push(element)
// }

// detail API
// eslint-disable-next-line 
const productDetail = {
    "_id": "safhjawufhasiufyasfu",
    "name": "Ultraboost Bayonce",
    "slug": "ultraboost-bayounce",
    "brand": "Adidas",
    "description": "Siêu phẩm giày thể thao Ultraboost tới từ châu âu",
    "categories": ["men", "running"],
    "images": [
        "http://localhost:3000/assets/imgs/slide1.jpg",
        "http://localhost:3000/assets/imgs/slide2.jpg",
        "http://localhost:3000/assets/imgs/slide3.jpg",
        "http://localhost:3000/assets/imgs/slide4.jpg",
    ],
    "variants": {
        "red": [
            {
                "_id": "dfjafdasdfif",
                "size": 29,
                "stock": 10,
                "price": 100000,
                "sale": 50,
            },
            {
                "_id": "asdfasdf",
                "size": 29,
                "stock": 10,
                "price": 100000,
                "sale": 50,
            },


        ],
        "blue": [
            {
                "_id": "dfjsdasdfif",
                "size": 29,
                "stock": 10,
                "price": 100000,
                "sale": 50,
            },
            {
                "_id": "asdfasdsdf",
                "size": 29,
                "stock": 10,
                "price": 100000,
                "sale": 50,
            },
        ],
    }
}

