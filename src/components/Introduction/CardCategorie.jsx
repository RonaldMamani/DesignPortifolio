import TextWhiteCommon from "../Texts/TextWhiteCommon";

export default function CardCategorie({ilustration, ilustrationDescrition, NameCategorie}) {
    return (
        <div className="p-3">
            <img className="ml-auto" src={ilustration} alt={ilustrationDescrition} />
            <div className="pt-16">
                <TextWhiteCommon text={NameCategorie} />
            </div>
        </div>
    )
}