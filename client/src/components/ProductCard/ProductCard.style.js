import styled from 'styled-components';
//  import { A } from '../../assets/styles/global.style';
import { colors, devices } from '../../assets/styles/variables';
// import { Link } from 'react-router-dom';


export const Container = styled.div`
    max-width: 300px;
    max-height: 474px;
    height: 40vw;
    width: 25%;
    padding: 0 10px;
    @media ${devices.mobileM}{
        width: 50%;
        height: 60vw;
   }
   margin-bottom: 20px;
`

// export const Card = styled(Link)` 
export const Card = styled.div` 
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all .1s ease-in-out; 
    :hover {
        transform: scale(1.01);
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.light};
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const ProductInfo = styled.div`
    padding-top: 20px;
    text-transform: capitalize;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size: 1.4rem;
`;

export const Name = styled.h5`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 16px;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Categories = styled.span`
    font-size: 1.3rem;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${colors.gray};
    margin-top: 6px;
`;

export const Colors = styled.span`
    font-size: 1.3rem;
    color: ${colors.gray};
    margin-top: 6px;
`;

export const Price = styled.div`
    margin-top: 6px;
`;

export const OldPrice = styled.span`
    color: ${colors.gray};
    margin-left: 8px;
    font-style: italic;
    text-decoration: line-through;
`;

export const CurentPrice = styled.span`
    font-size: 1.4rem;
`;

export const Sale = styled.span`
    font-size: 1.4rem;
    color: ${colors.green};
    font-weight: 400;
    margin-top: 6px;
`;