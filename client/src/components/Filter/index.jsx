import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    FilterContainer,
    FilterGroup,
    Categories,
    Category,
    FilterLabel,
    CheckboxContainer,
    CheckboxGroup,
    Label,
} from './Filter.style';
import { Checkbox } from '@mui/material';

const Filter = ({ filter, setFilter }) => {
    const [gender, setGender] = useState({
        ...filter.gender,
    });

    const [brand, setBrand] = useState({
        ...filter.brand,
    })

    const [price, setPrice] = useState({
        ...filter.price,
    })

    const onGenderChange = (value) => {
        let newGender = gender;
        newGender[value] = !newGender[value];
        setGender(newGender);
        setFilter(
            {
                ...filter,
                gender: newGender,
            }
        )
    };

    const onBrandChange = (value) => {
        let newBrand = brand;
        newBrand[value] = !newBrand[value];
        setBrand(newBrand);
        setFilter(
            {
                ...filter,
                brand: newBrand,
            }
        )
    };

    const onPriceChange = (value) => {
        let newPrice = price;
        newPrice[value] = !newPrice[value];
        setPrice(newPrice);
        setFilter(
            {
                ...filter,
                price: newPrice,
            }
        )
    };


    return (
        <FilterContainer>
            <FilterGroup>
                <FilterLabel>Danh mục</FilterLabel>
                <Categories>
                    <Category>Tất cả</Category>
                    <Category>Chạy bộ</Category>
                    <Category>Bóng đá</Category>
                    <Category>Thể thao</Category>
                </Categories>
            </FilterGroup>
            <FilterGroup>
                <FilterLabel>Giới tính</FilterLabel>
                <CheckboxContainer>
                    <CheckboxGroup>
                        <Checkbox
                            color="default"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }}
                            value="male"
                            checked={gender.male}
                            onChange={e => onGenderChange(e.target.value)}
                        />
                        <Label>Nam</Label>
                    </CheckboxGroup>
                    <CheckboxGroup>
                        <Checkbox
                            color="default"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }}
                            value="female"
                            checked={gender.female}
                            onChange={e => onGenderChange(e.target.value)}
                        />
                        <Label>Nữ</Label>
                    </CheckboxGroup>
                </CheckboxContainer>
            </FilterGroup>
            <FilterGroup>
                <FilterLabel>Thương hiệu</FilterLabel>
                <CheckboxContainer>
                    <CheckboxGroup>
                        <Checkbox
                            color="default"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }}
                            value="adidas"
                            checked={brand.adidas}
                            onChange={e => onBrandChange(e.target.value)}
                        />
                        <Label>Adidas</Label>
                    </CheckboxGroup>
                    <CheckboxGroup>
                        <Checkbox
                            color="default"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }}
                            value="nike"
                            checked={brand.nike}
                            onChange={e => onBrandChange(e.target.value)}
                        />
                        <Label >Nike</Label>
                    </CheckboxGroup>
                    <CheckboxGroup>
                        <Checkbox
                            color="default"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }}
                            value="vans"
                            checked={brand.vans}
                            onChange={e => onBrandChange(e.target.value)}
                        />
                        <Label >Vans</Label>
                    </CheckboxGroup>
                </CheckboxContainer>
            </FilterGroup>
            <FilterGroup>
                <FilterLabel>Giá tiền</FilterLabel>
                <CheckboxContainer>
                    <CheckboxGroup>
                        <Checkbox
                            color="default"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }}
                            value="sale"
                            checked={price.sale}
                            onChange={e => onPriceChange(e.target.value)}
                        />
                        <Label >Giảm giá</Label>
                    </CheckboxGroup>
                    <CheckboxGroup>
                        <Checkbox
                            color="default"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }}
                            value="low"
                            checked={price.low}
                            onChange={e => onPriceChange(e.target.value)}
                        />
                        <Label >Dưới 1.000.000 VNĐ</Label>
                    </CheckboxGroup>
                    <CheckboxGroup>
                        <Checkbox
                            color="default"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }}
                            value="medium"
                            checked={price.medium}
                            onChange={e => onPriceChange(e.target.value)}
                        />
                        <Label>Từ 1.000.000 VNĐ đến 3.000.000 VNĐ</Label>
                    </CheckboxGroup>
                    <CheckboxGroup>
                        <Checkbox
                            color="default"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }}
                            value="high"
                            checked={price.high}
                            onChange={e => onPriceChange(e.target.value)}
                        />
                        <Label>Trên 3.000.000 VNĐ</Label>
                    </CheckboxGroup>
                </CheckboxContainer>
            </FilterGroup>
        </FilterContainer>
    )
}

Filter.propTypes = {
    filter: PropTypes.exact({
        brand: PropTypes.object,
        gender: PropTypes.object,
        price: PropTypes.object,
        sale: PropTypes.bool,
    }),
    setFilter: PropTypes.func,
}

export default Filter;