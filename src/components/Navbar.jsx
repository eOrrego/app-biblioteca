import { NavLink } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, loading, logout } = useAuth();

    if (loading) return <h1>Loading</h1>;

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <nav>
            <br />
            <NavLink to="/" >Home</NavLink>
            <br />
            <NavLink to="/dashboards" >Dashboards</NavLink>
            <br />
            {!user && <NavLink to="/login" >Login</NavLink>}
            <br />
            {!user && <NavLink to="/register" >Register</NavLink>}
            <br />
            {user && <NavLink onClick={handleLogout} >Logout</NavLink>}
            <br />
        </nav>
    )
}

export default Navbar