import 'bootstrap/dist/css/bootstrap.min.css';

import Image1 from "../../assets/image-slide-1.jpg"
import Image2 from "../../assets/image-slide-2.jpg"
import Image3 from "../../assets/image-slide-3.jpg"
import Image4 from "../../assets/image-slide-4.jpg"
import Image5 from "../../assets/image-slide-5.jpg"

import Carrousel from "./Carousel";
import SecundaryTitle from "../Texts/SecundaryTitle";

export default function Work() {
    return (
        <section className="
            m-4 flex flex-col gap-4 text-center
            md:p-8
            xl:px-32
            ">
            <SecundaryTitle text="My Work" />
            <Carrousel 
                image1={Image1}
                image2={Image2}
                image3={Image3}
                image4={Image4}
                image5={Image5}
                />
        </section>
    )
}