import ButtonPinkOrange from "../Buttons/ButtonPinkOrange";
import SecundaryTitle from "../Texts/SecundaryTitle";
import TextCommon from "../Texts/TextCommon";

import Avatar from "../../assets/image-amy.webp"

export default function Profile() {
    return (
        <section className="
            m-4 flex flex-col gap-4 text-center
            md:p-8 md:flex-row md:items-center
            lg:px-32 lg:gap-16
            ">
            <div className="p-2">
                <img className="" src={Avatar} alt="" />
            </div>
            <div className="
                flex flex-col gap-4 items-center
                md:items-start md:text-start
                ">
                <SecundaryTitle text="I’m Amy, and I’d love to work on your next project" />
                <TextCommon text="I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!" />
                <ButtonPinkOrange content="Free Consultation" />
            </div>
        </section>
    )
}