import styled from 'styled-components';
// import { Container } from '../../assets/styles/global.style';
import { devices } from '../../assets/styles/variables';

export const Container = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    /* @media ${devices.tabletM} {
        padding: 15px;
    }
    @media ${devices.mobileM} {
        padding: 10px;
    } */
`;

export const Left = styled.div`
    max-width: 50vw;
    height: 100%;
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
`;

export const SortBy = styled.span`
   margin-right: 5px;
`;

export const Name = styled.h4`
    font-size: 2.0rem;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 28px;  
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const SortSelect = styled.select`
    height: 36px;
    padding: 8px 0;
    border: none;
    font-size: 1.6rem;
    &:focus {
        outline: none;
    }
`;

export const Option = styled.option`
    border: none;
    padding: 10px 0;
    cursor: pointer;
    font-size: 1.6rem;
`;

