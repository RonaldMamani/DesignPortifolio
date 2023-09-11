import logo from "../../assets/logo.svg"
import ButtonBlack from "../Buttons/ButtonBlack"

export default function Header() {
    return (
        <header className="
            m-4 flex justify-between
            md:p-8
            lg:px-32
            ">
            <div>
                <img src={logo} alt="Logotipo" />
            </div>
            <ButtonBlack content="Free Consultation" />
        </header>
    )
}