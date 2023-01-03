import styled from 'styled-components';
// import { Container } from '../../assets/styles/global.style';
import { colors, devices } from '../../assets/styles/variables';

export const FilterContainer = styled.div`
    margin-top: 20px;
    width: 25%;
    height: 75vh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    @media ${devices.tabletM}{
        width: 100%;
        flex-direction: row;
        max-height: 150px;
        overflow-x: auto;
    }   
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: ${colors.gray};
    }
`;

export const FilterGroup = styled.div`
    width: 100%;
    padding-left: 5px;
    margin: 0 0 15px 10px;
    @media ${devices.tabletM}{
        width: 25%;
        min-width: 150px;
        height: 100%;
        margin: 0 10px 0 0;
    }`;

export const Categories = styled.ul`
    list-style: none;
    margin-left: 10px;
`;

export const Category = styled.li`
    cursor: pointer;
    line-height: 26px;
    font-size: 1.6rem;
    margin: 5px 0;
    &:hover {
        opacity: .8;
    }
`;

export const FilterLabel = styled.span`
    font-size: 1.7rem;
    font-weight: 450;
`;

export const CheckboxContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const CheckboxGroup = styled.div`
    display: flex;
    align-items: center;
`;

export const Label = styled.label`
    font-size: 1.6rem;
    line-height: 24px;
    
`;
