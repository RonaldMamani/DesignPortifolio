import ButtonPinkOrange from "../Buttons/ButtonPinkOrange";
import SecundaryWhiteTitle from "../Texts/SecundaryWhiteTitle";
import TextWhite from "../Texts/TextWhite";

export default function BookACall() {
    return (
        <section className="
            sm:p-4
            md:p-8
            xl:px-32
            ">
            <div className="
                bg-black-person sm:px-4 py-5 text-center flex flex-col gap-4 rounded-xl items-center
                md:px-28
                xl:flex-row xl:justify-between xl:gap-7
                ">
                <div className="
                    flex flex-col gap-4
                    xl:text-start xl:mr-96">
                    <SecundaryWhiteTitle text="Book a call with me" />
                    <TextWhite text="I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there." />
                </div>
                <ButtonPinkOrange content="Free Consultation" />
            </div>
        </section>
    )
}