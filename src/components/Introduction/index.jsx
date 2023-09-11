import PrincipalTitle from "../Texts/PrincipalTitle";
import TextCommon from "../Texts/TextCommon";
import GridCategories from "./GridCategories";

export default function Introduction() {
    return (
        <section className="
            mx-4 my-10 flex flex-col gap-8
            md:px-8
            xl:px-32
            ">
            <div className="
                text-center flex flex-col gap-4
                md:px-4
                ">
                <PrincipalTitle text="Design solutions made easy" />
                <div className="md:px-5">
                    <TextCommon text="With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs." />
                </div>
            </div>
            <GridCategories />
        </section>
    )
}