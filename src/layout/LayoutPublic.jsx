import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"


const LayoutPublic = () => {
    return (
        <>
            <div>
                <NavBar />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default LayoutPublic