import { Navigate } from "react-router-dom";
import { Register as RegisterJS } from "../components/Register";
import { useAuth } from "../context/AuthContext";

const Register = () => {
    const { user, loading } = useAuth();

    if (loading) return <h1>Loading</h1>;
    else return <>{!user ? <RegisterJS /> : <Navigate to="/" />}</>;
}

export default Register