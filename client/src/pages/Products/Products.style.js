import styled from 'styled-components';
import { Container } from '../../assets/styles/global.style';
import { devices } from '../../assets/styles/variables';

export const ProductsContainer = styled(Container)`
`;

export const ResultBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    @media ${devices.tabletM} {
        flex-direction: column;
    }
`;

export const PaginationContainer = styled.div`
    width: 100%;
    height: 50px;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
`;