import React, { useState } from 'react';
import ProductList from '../../components/ProductList';
import Filter from '../../components/Filter';
import WallHeader from '../../components/WallHeader';
import {
    ProductsContainer,
    ResultBody,
} from './Products.style';

import { productList } from '../../data';
const Products = () => {
    // eslint-disable-next-line
    const [category, setCategory] = useState("");
    // eslint-disable-next-line
    const [sort, setSort] = useState("");

    // For filter product list
    const [filter, setFilter] = useState({
        brand: {
            nike: false,
            adidas: false,
        },
        gender: {
            male: false,
            female: false,
        },
        price: {
            1: false, // < 1.000.000
            2: false,  // 1.000.000 < 3.000.000
            3: false, // over 3.000.000
        },
        sale: false,
    });

    const setSortBy = (value) => {
        setSort(value);
        console.log("SORT BY: ", value);
    }

    const setFilterChange = (value) => {
        setFilter(value);
        // console.log("FILTER: ", value);
    }

    return (
        <ProductsContainer>
            <WallHeader name={category === "" ? "Tất cả" : (category)} setSort={setSortBy} />
            <ResultBody>
                <Filter filter={filter} setFilter={setFilterChange} />
                <ProductList productList={productList} />
            </ResultBody>
        </ProductsContainer>
    )
}

export default Products;
