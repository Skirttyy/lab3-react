import About from "../components/About.jsx"
import Description from "../components/Description.jsx"
import Form from "../components/Form.jsx"
import "./Contact.css"

export default function Contact() {
    return (
        <div className="contactContainer">
            <Description title="CONTACT US" description="După ce finalizezi programarea, vei primi în scurt timp un mesaj de confirmare direct pe telefonul tău. Tot ce trebuie să faci este să trimiți cererea de programare, iar noi ne ocupăm de restul."/>
            <Form />
        </div>
    )
}