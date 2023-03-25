import { useAuth } from "../context/AuthContext";

export function Dashboards() {
    const { user } = useAuth();

    return (
        <div className="w-full max-w-xs m-auto text-black">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <p className="text-xl mb-4">welcome {user?.displayName || user?.email}</p>
            </div>
        </div>
    );
}
