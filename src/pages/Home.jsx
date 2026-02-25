import About from "../components/About"
import Description from "../components/Description"
import "./Home.css"

export default function Home () {
    return (
        <div className="homeLayout">
            <Description title="BEAUTY SALOON" description="La salonul nostru de frumusețe, eleganța și relaxarea se îmbină într-o experiență dedicată stării tale de bine. Fiecare tratament este creat pentru a evidenția naturalețea ta și pentru a oferi rezultate vizibile. Atmosfera caldă și personalul profesionist te ajută să te simți confortabil încă de la primul pas. De la îngrijirea pielii și coafuri personalizate, până la manichiură, masaj și terapii moderne, fiecare serviciu este realizat cu grijă și atenție. Folosim produse de calitate premium, pentru ca tu să te bucuri de un răsfăț complet. Indiferent de ocazie, suntem aici să te facem să strălucești."/>
            <About />
        </div>
    )
}