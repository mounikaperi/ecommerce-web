import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import gadgetSale from '../../../assets/Banners/gadget-sale.jpg';
import kitchenSale from '../../../assets/Banners/kitchen-sale.jpg';
import poco from '../../../assets/Banners/poco-m4-pro.webp';
import realme from '../../../assets/Banners/realme-9-pro.webp';
import fashionSale from '../../../assets/Banners/fashionsale.jpg';
import oppo from '../../../assets/Banners/oppo-reno7.webp';

export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  )
}

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  )
}

const Banner = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />
  };

  const banners = [gadgetSale, kitchenSale, poco, fashionSale, realme, oppo];

  return (
    <>
      <section className='h-44 sm:h-72 w-full rounded-sm shadow relative overflow-hidden'>
        <Slider {...settings}>
          {banners.map((banner, i) => (
            <img draggable="false" className="h-44 sm:h-72 w-full object-cover" src={banner} alt="banner" key={i} />
          ))}
        </Slider>
      </section>
    </>
  );
}

export default Banner;
