import styled from 'styled-components';
import { Button } from '../../assets/styles/global.style';
import { colors, devices } from '../../assets/styles/variables';
export const Container = styled(Button)`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    bottom: 300px;
    right: 50px;
    background-color: ${colors.teal};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    @media ${devices.mobileM} {
        width: 30px;
        height: 30px;
        right: 20px;
    }
`