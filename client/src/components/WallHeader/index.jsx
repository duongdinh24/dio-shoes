import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Sort } from '@mui/icons-material';
import './style.css';
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

    // sticky wall header, reference https://www.cluemediator.com/sticky-element-on-a-scroll-in-react
    const [wallHeaderTop, setWallHeaderTop] = useState();
    useEffect(() => {
        const wallHeaderEl = document.getElementById('wallHeader').getBoundingClientRect();
        setWallHeaderTop(wallHeaderEl.top);
    }, []);

    useEffect(() => {
        if (!wallHeaderTop) return;
        window.addEventListener('scroll', setSticky);
        return () => {
            window.removeEventListener('scroll', setSticky);
        };
        // eslint-disable-next-line
    }, [wallHeaderTop]);

    const setSticky = (e) => {
        const wallHeaderEl = document.getElementById('wallHeader');
        const scrollTop = window.scrollY;
        if (scrollTop >= wallHeaderTop) {
            wallHeaderEl.classList.add('is-sticky');
        } else {
            wallHeaderEl.classList.remove('is-sticky');
        }
    }

    return (
        <Container id="wallHeader">
            <Left>
                <Name>{name}</Name>
            </Left>
            <Right>
                <Sort sx={{ fontSize: 18 }} />
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
