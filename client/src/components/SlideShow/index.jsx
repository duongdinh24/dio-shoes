import React, { useState } from 'react';
// import Proptypes from 'prop-types';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import {
	Container,
	Arrow,
	Wrapper,
	Slide,
	ImgContainer,
	Image,
	InforContainer,
	Title,
	Desc,
	ButtonShow,
	DotContainer,
	Dot,
} from './SlideShow.style';

import { slides } from '../../data';

const SlideShow = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const slideLength = slides.length;

	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideLength - 1);
		} else {
			setSlideIndex(slideIndex < slideLength - 1 ? slideIndex + 1 : 0);
		}
	};

	const handleDotClick = (index) => {
		setSlideIndex(index);
	}

	// Auto change slide
	// useEffect(() => {
	// 	const autoSlide = setTimeout(() => {
	// 		console.log("Change slide")
	// 		setSlideIndex((slideIndex < slideLength - 1 ? slideIndex + 1 : 0))
	// 	}, 3000);
	// 	//eslint-disable-next-line	
	// }, [slideIndex]);

	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick("left")}	>
				<ArrowBackIos sx={{ fontSize: 25 }} />
			</Arrow>
			<Wrapper>
				{slides.map((slide, index) => (
					<Slide key={index} active={index === slideIndex ? "true" : "false"}>
						<ImgContainer>
							<Image src={slide.img} />
						</ImgContainer>
						<InforContainer>
							<Title>{slide.title}</Title>
							<Desc>{slide.desc}</Desc>
							<ButtonShow href={slide.link}>SHOW</ButtonShow>
						</InforContainer>
					</Slide>
				))
				}
				<DotContainer>
					{slides.map((slide, index) => (
						<Dot index={index} active={index === slideIndex ? "true" : "false"} onClick={() => handleDotClick(index)}></Dot>
					))}
				</DotContainer>
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick("right")}>
				<ArrowForwardIos sx={{ fontSize: 25 }} />
			</Arrow>
		</Container>
	)
}

// SlideShow.Proptypes = {
// 	slides: Proptypes.array.isRequired,
// }

export default SlideShow;