import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const LayoutPublic = () => {
    return (
        <>
            <div className="bg-slate-300 text-black h-screen flex text-white">
                <Navbar />
                <hr />
                <br />
                <main>
                    <Outlet />
                </main>
                <br />
                <hr />
                <footer>
                    #Footer
                </footer>
            </div>
        </>
    )
}

export default LayoutPublic