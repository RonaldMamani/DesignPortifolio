import PrincipalTitle from "../Texts/PrincipalTitle";
import TextCommon from "../Texts/TextCommon";
import GridCategories from "./GridCategories";

export default function Introduction() {
    return (
        <section className="
            sm:p-4
            md:px-8
            xl:px-32
            ">
            <div className="
                text-center flex flex-col gap-4
                md:px-8
                ">
                <PrincipalTitle text="Design solutions made easy" />
                <TextCommon text="With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs." />
            </div>
            <GridCategories />
        </section>
    )
}