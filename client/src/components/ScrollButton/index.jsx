import React, { useState } from 'react';
import { Container } from './ScrollButton.style';
import { ArrowUpward } from '@mui/icons-material';
const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setVisible(true)
        }
        else if (scrolled <= 200) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Container onClick={scrollToTop} style={{ display: visible ? 'flex' : 'none' }} >
            <ArrowUpward />
        </Container>
    )
}

export default ScrollButton;



