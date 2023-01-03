import React from 'react';
import PropTypes from 'prop-types';
import SortIcon from '@mui/icons-material/Sort';
import {
    Container,
    Left,
    Right,
    Name,
    SortSelect,
    Option
} from './WallHeader.style';

/**
 * @param {string} name 
 * @returns {func} setSortBy
 */
const WallHeader = ({ name, setSort }) => {
    return (
        <Container>
            <Left>
                <Name>{name}</Name>
            </Left>
            <Right>
                <SortIcon sx={{ fontSize: 18 }} />
                <SortSelect onChange={e => setSort(e.target.value)}>
                    <Option value="newest">Mới nhất</Option>
                    <Option value="priceAsc">Giá: Tăng dần</Option>
                    <Option value="priceDesc">Giá: Giảm dần</Option>
                </SortSelect>
            </Right>

        </Container>
    )
};

WallHeader.propTypes = {
    name: PropTypes.string,
    setSort: PropTypes.func,
}
export default WallHeader;
