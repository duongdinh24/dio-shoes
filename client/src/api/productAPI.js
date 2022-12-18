import axiosClient from "./axiosClient";


const productApi = {
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, { params });
    },

    get: (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

}

export default productApi;

// class ProductApi {
//     getAll(params : Pagination) {
//         const url = '/products';
//         return axiosClient.get(url, { params });
//     }

//     get = (id: string) => {
//         const url = `/products/${id}`;
//         return axiosClient.get(url);
//     }
// }
// const productApi = new ProductApi();
// export default productApi;


// function App() {
//     const [productList, setProductList] = useState([]);
//     useEffect(() => {
//         const fetchProductList = async () => {
//             try {
//                 const params = { _page: 1, _limit: 10 };
//                 const response = await productApi.getAll(params);
//                 console.log('Fetch products successfully: ', response);
//                 setProductList(response.data);
//             } catch (error) {
//                 console.log('Failed to fetch product list: ', error);
//             }
//         }
//         fetchProductList();
//     }, []);
//     return <ProductList productList={ productList } />;
// }