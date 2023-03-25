import LayoutPublic from "./LayoutPublic"
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LayoutPrivate = () => {

    const { user, loading } = useAuth();

    if (loading) return <h1>Loading</h1>;
    else return <>{user ? <LayoutPublic /> : <Navigate to="/login" />}</>;
}

export default LayoutPrivate