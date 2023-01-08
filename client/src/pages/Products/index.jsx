import React, { useState } from 'react';
import ProductList from '../../components/ProductList';
import Filter from '../../components/Filter';
import WallHeader from '../../components/WallHeader';
import {
    ProductsContainer,
    ResultBody,
    PaginationContainer,
} from './Products.style';
import { Pagination } from '@mui/material';

import { productList } from '../../data';
const Products = () => {
    // eslint-disable-next-line
    const [category, setCategory] = useState("");

    // eslint-disable-next-line
    const [sort, setSort] = useState("");

    const [page, setPage] = useState(1);
    // const limit = 18;
    // const offset = (page - 1) * limit;

    // init filter product list
    const [filter, setFilter] = useState({
        brand: {
            adidas: false,
            nike: false,
            vans: false,
        },
        price: {
            sale: false,
            low: false, // < 1.000.000
            medium: false,  // 1.000.000 < 3.000.000
            high: false, // over 3.000.000 
        },
        gender: {
            male: false,
            female: false,
        },
    });

    // done
    const setSortBy = (value) => {
        setSort(value);
    }

    // done
    const setFilterChange = (value) => {
        setFilter(value);
    }

    const onPageChange = (e, p) => {
        console.log("PAGE: ", p)
        setPage(p);
    }

    return (
        <ProductsContainer>
            <WallHeader name={category === "" ? "Tất cả" : (category)} setSort={setSortBy} />
            <ResultBody>
                <Filter filter={filter} setFilter={setFilterChange} />
                <ProductList productList={productList} />
            </ResultBody>
            <PaginationContainer>
                <Pagination count={10}
                    page={page}
                    onChange={onPageChange}
                    sx={{ '& .MuiPaginationItem-root': { fontSize: 14 } }}
                />
            </PaginationContainer>
        </ProductsContainer>
    )
}

export default Products;
