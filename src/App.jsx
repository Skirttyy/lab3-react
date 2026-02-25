import "./App.css"
import { useNavigation } from "./hooks/useNavigation";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx";

const pages = ["Home", "Contact"]

export default function App () {
    const {currentPage, navigate} = useNavigation(pages[0])

    let page;
    if (currentPage === "Home") {
      page = <Home />
    } else if (currentPage === "Contact") {
      page = <Contact />
    }

    return (
      <div className="mainLayout">
        <Header navigate={navigate}/>
        {page}
        <Footer />
      </div>
    )

}