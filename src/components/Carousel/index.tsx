import "./carousel.css"
import Slider from "react-slick"

function Carousel({ children } : { children: React.ReactNode }) {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        swipeToSlide: true,
    }
    
    return (
        <div>
            <Slider { ...settings } >
                { children }
            </Slider>
        </div>
    );
}

export default Carousel;
