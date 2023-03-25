import { Navigate } from 'react-router-dom';
import { Login as LoginJS } from '../components/Login'
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { user, loading } = useAuth();

    if (loading) return <h1>Loading</h1>;
    else return <>{!user ? <LoginJS /> : <Navigate to="/" />}</>;
}

export default Login