import logo from "../../assets/logo.svg"
import ButtonBlack from "../Buttons/ButtonBlack"

export default function Header() {
    return (
        <header className="
            sm:p-3 flex justify-between
            md:p-8
            xl:px-32
            ">
            <div>
                <img src={logo} alt="Logotipo" />
            </div>
            <ButtonBlack content="Free Consultation" />
        </header>
    )
}