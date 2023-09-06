import Carousel from 'react-bootstrap/Carousel';

export default function Carrousel({image1, image2, image3, image4, image5}) {
    return (
        <Carousel fade className='xl:mx-52'>
            <Carousel.Item className=''>
                <img className='md:w-full md:h-96' src={image1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className='md:w-full md:h-96' src={image2} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className='md:w-full md:h-96' src={image3} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className='md:w-full md:h-96' src={image4} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className='md:w-full md:h-96' src={image5} alt="" />
            </Carousel.Item>
        </Carousel>
    );
}