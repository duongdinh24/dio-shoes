import styled from "styled-components";
import { Container, ButtonLink } from '../../assets/styles/global.style'
// import { colors } from '../../assets/styles/variables';
export const HomeContainer = styled(Container)`
    
`;

export const ProductArea = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 30px 0 15px 10px;
    align-self: start;

`;

export const ButtonShow = styled(ButtonLink)`
    margin: 40px auto;
    height: 60px;
    font-size: 1.6rem;
    border-radius: 20px;
    width: 200px;
`