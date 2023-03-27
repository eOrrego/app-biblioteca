import { useEffect } from 'react';
import Cardbook from '../components/Cardbook';
import { useAuth } from '../context/AuthContext';
import { useFirestoreState } from '../hook/useFirestore';

const Dashboards = () => {

    const { user } = useAuth();
    const { data, loading, error, getData, deleteData } = useFirestoreState();

    useEffect(() => {
        getData();
    }, []);

    // const handleButtonDelete = async (nanoid) => {
    //     await deleteData(nanoid);
    // };

    const loadingData = loading.getData && <p>Cargando info...</p>;
    const errorData = error && <p>{error}</p>;

    return (
        <div>
            <div className="w-full max-w-xs m-auto text-black">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <p className="text-xl mb-4">Bienvenido {user?.displayName || user?.email}</p>
                </div>
            </div>
            <div className="text-center">
                <h2>Libros Favoritos</h2>
                <div className="flex flex-col md:flex-row space-x-8 justify-center">
                    {loadingData}
                    {errorData}
                    {data?.map((book, index) => (
                        <div key={index}>
                            <Cardbook book={book} deleteData={deleteData} />
                            {/* <p>bookfav: {bookfav ? "SI" : "NO"}</p>
                            <p>bookid: {bookid}</p>
                            <p>uid: {uid}</p>
                            <button onClick={() => handleButtonDelete(nanoid)}>
                                Eliminar
                            </button> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboards