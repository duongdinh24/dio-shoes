
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './product-slider.scss';

const ProductSlider = ({ images }) => {
    const [activeThumb, setActiveThumb] = useState(null);

    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: activeThumb }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-images-slider"
            >
                {
                    images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item} alt="No images avaiable" />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            <Swiper
                onSwiper={setActiveThumb}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-images-slider-thumbs"
            >
                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="No images avaiable" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

ProductSlider.propTypes = {
    images: PropTypes.array.isRequired,
}

export default ProductSlider;