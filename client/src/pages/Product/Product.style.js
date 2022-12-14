import styled from 'styled-components';
import { Container } from '../../assets/styles/global.style';
import { devices, colors } from '../../assets/styles/variables';

export const ProductContainer = styled(Container)`

`;

export const InforContainer = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    @media ${devices.tabletM} {
        flex-direction: column;
        height: 80vh;
    }
`;

export const Slider = styled.div`
    height: 100%;
    width: 50%;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    @media ${devices.tabletM} {
       width: 100%;
    }
`;

export const ProductDesc = styled.div`
    width: 100%;
    height: 400px;
    background-color: teal;
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

export const SubTitle = styled.span`
    line-height: 26px;
    display: block;
    font-size: 2rem;
    margin: 20px 0 10px 0;
`;

export const ProductInfo = styled.div`
    padding-left: 40px;
    height: 100%;
    width: 50%;
    @media ${devices.tabletM} {
        width: 100%;
    }
    display: flex;
    flex-direction: column;
`;

export const Name = styled.h3`
    font-weight: 450;
    font-size: 2.5rem;
    margin-bottom: 40px;
    text-transform: capitalize;
    line-height: 40px;
    @media ${devices.tabletM} {
        margin-top: 40px;
    }
`;

export const Price = styled.span`
    font-size: 2.0rem;
    color: ${colors.red};
    font-weight: 500;
    margin-bottom: 30px;
`;

export const Info = styled.span`
    color: ${colors.gray};
    text-transform: capitalize;
    font-size: 1.6rem;
    margin-bottom: 20px;
    font-style: italic;
`;

export const ColorContainer = styled.div`
    width: 100%;
    height: 80px;
`;

export const ColorList = styled.div`

`;

export const ColorItem = styled.button`

`;

export const SizeContainer = styled.div`
    width: 100%;
    height: 80px;
`;

export const SizeList = styled.div`

`;

export const SizeItem = styled.button`

`;

export const ProductAction = styled.div`
    display: flex;
    justify-content: space-around;
    height: 80px;
    width: 100%;
    align-items: center;
`;


export const QuantityContainer = styled.div`
    width: 50%;
    height: 100%;
`;


export const Quantity = styled.div`

`;

export const AddToCard = styled.button`
    /* background-color: ${colors.red}; */
    font-size: 1.6rem;
    width: 180px;
    height: 50px;
    color: ${colors.white};
    border: none;
    font-weight: 500;
    background-image: url (${props => props.background});
`;

