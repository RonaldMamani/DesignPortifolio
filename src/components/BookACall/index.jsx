import ButtonPinkOrange from "../Buttons/ButtonPinkOrange";
import SecundaryWhiteTitle from "../Texts/SecundaryWhiteTitle";
import TextWhite from "../Texts/TextWhite";

export default function BookACall() {
    return (
        <section className="
            m-4
            md:p-8
            xl:px-32
            ">
            <div className="
                bg-black-person py-5 text-center flex flex-col gap-4 rounded-xl items-center
                md:px-20
                lg:grid lg:grid-cols-7 lg:gap-1
                ">
                <div className="
                    flex flex-col gap-4 mx-4
                    lg:text-start xl:mr-96 lg:col-span-5">
                    <SecundaryWhiteTitle text="Book a call with me" />
                    <TextWhite text="I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there." />
                </div>
                <div className="lg:col-span-2">
                    <ButtonPinkOrange content="Free Consultation" />
                </div>
            </div>
        </section>
    )
}