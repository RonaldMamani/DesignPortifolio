import logo from "../../assets/logo.svg"
import ButtonBlack from "../Buttons/ButtonBlack"

export default function Footer() {
    return (
        <footer className="
            sm:p-4 flex justify-between
            md:p-8
            xl:px-32
            ">
            <div>
                <img src={logo} alt="" />
            </div>
            <ButtonBlack content="Free Consultation" />
        </footer>
    )
}