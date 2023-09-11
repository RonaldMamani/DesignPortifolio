import CardCategorie from "./CardCategorie";

import Ilustration1 from "../../assets/pattern-graphic-design.svg"
import Ilustration2 from "../../assets/pattern-ui-ux.svg"
import Ilustration3 from "../../assets/pattern-apps.svg"
import Ilustration4 from "../../assets/pattern-illustrations.svg"
import Ilustration5 from "../../assets/pattern-photography.svg"
import Ilustration6 from "../../assets/pattern-motion-graphics.svg"

export default function GridCategories() {
    return (
        <div className=" 
            py-4 grid grid-rows-6 grid-cols-2 gap-3
            md:py-10 md:grid-rows-3 md:grid-cols-4
            xl:grid-rows-2 xl:grid-cols-6 xl:py-16 xl:gap-5
            ">
            <div className="
                bg-blue-purple rounded-lg row-span-2 col-span-2
                
                ">
                <CardCategorie ilustration={Ilustration1} NameCategorie="Graphic Design" />
            </div>
            <div className="
                bg-yelow-golden rounded-lg
                
                ">
                <CardCategorie ilustration={Ilustration2} NameCategorie="UI/UX" />
            </div>
            <div className="
                bg-pink-white rounded-lg
                
                ">
                <CardCategorie ilustration={Ilustration3} NameCategorie="Apps" />
            </div>
            <div className="
                bg-pink-orange rounded-lg col-span-2
                
                ">
                <CardCategorie ilustration={Ilustration4} NameCategorie="Illustrations" />
            </div>
            <div className="
                bg-blue-ice rounded-lg col-span-2
                xl:row-start-1 xl:col-start-5
                ">
                <CardCategorie ilustration={Ilustration5} NameCategorie="Photography" />
            </div>
            <div className="
                bg-purple-vinho rounded-lg col-span-2
                
                ">
                <CardCategorie ilustration={Ilustration6} NameCategorie="Motion Graphics" />
            </div>
        </div>
    )
}