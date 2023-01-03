import React from 'react';
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
    const setGender = (value) => {
        let newFilter = filter;
        // newFilter.gender[value] = !newFilter.gender[value];
        console.log(!newFilter.gender[value]);
    }
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
                            onChange={e => setGender(e.target.value)}
                        />
                        <Label>Nam</Label>
                    </CheckboxGroup>
                    <CheckboxGroup>
                        <Checkbox
                            color="default"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }}
                            value="female"
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
                        />
                        <Label>Adidas</Label>
                    </CheckboxGroup>
                    <CheckboxGroup>
                        <Checkbox
                            color="default"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }}
                            value="nike"
                        />
                        <Label >Nike</Label>
                    </CheckboxGroup>
                    <CheckboxGroup>
                        <Checkbox
                            color="default"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }}
                            value="vans"
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
                            value="false"
                        />
                        <Label >Giảm giá</Label>
                    </CheckboxGroup>
                    <CheckboxGroup>
                        <Checkbox
                            color="default"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }}
                            value="1"
                        />
                        <Label >Dưới 1.000.000 VNĐ</Label>
                    </CheckboxGroup>
                    <CheckboxGroup>
                        <Checkbox
                            color="default"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }}
                            value="2"
                        />
                        <Label>Từ 1.000.000 VNĐ đến 3.000.000 VNĐ</Label>
                    </CheckboxGroup>
                    <CheckboxGroup>
                        <Checkbox
                            color="default"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }}
                            value="2"
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