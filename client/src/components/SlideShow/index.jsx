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

const slides = [
	{
		title: "Top giày chạy bộ nike ",
		desc: "Khám phá nhanh các mẫu giày chạy bộ được ưa chuộng nhất tới từ Nike",
		img: "http://localhost:3000/assets/imgs/slide1.jpg",
		link: "http://localhost:3000/assets/imgs/slide1.jpg",
	},

	{
		title: "Top giày chạy bộ Adidas ",
		desc: "Những sản phẩm giày chạy adidas được yêu thích nhất",
		img: "http://localhost:3000/assets/imgs/slide2.jpg",
		link: "http://localhost:3000/assets/imgs/slide2.jpg",

	},
	{
		title: "Sản phẩm mới nhất từ Nike ",
		desc: "Sản phẩm mới nhất từ Nike đã có mặt tại shop",
		img: "http://localhost:3000/assets/imgs/slide3.jpg",
		link: "http://localhost:3000/assets/imgs/slide3.jpg",

	},
	{
		title: "Sale up to 50%",
		desc: "Gấu chưa có gió đông đã về, đừng lo có Dio shoes supper sale",
		img: "http://localhost:3000/assets/imgs/slide4.jpg",
		link: "http://localhost:3000/assets/imgs/slide4.jpg",
	}
]


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