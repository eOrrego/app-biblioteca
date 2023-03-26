import React, { useEffect, useState } from 'react'
import coverImg from '../images/cover_not_found.jpg'
import Loader from './Loader';



const URL = "https://openlibrary.org/works/";

const Cardbook = ({ book, deleteData}) => {

    const [loading, setLoading] = useState(false);
    const [bookState, setBookState] = useState(null);

    useEffect(() => {
        setLoading(true);
        async function getBookDetails() {
            try {
                const response = await fetch(`${URL}${book.bookid}.json`);
                const data = await response.json();
                // console.log("URL: ", `${URL}${id}.json`);
                // console.log(data);
                // console.log("ID: ", id);

                if (data) {
                    const { description, title, covers, subject_places, subject_times, subjects } = data;
                    const newBook = {
                        description: description ? description.value : "No se encontró ninguna descripción",
                        title: title,
                        cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-M.jpg` : coverImg,
                        subject_places: subject_places ? subject_places.join(", ") : "No se encontró",
                        subject_times: subject_times ? subject_times.join(", ") : "No se encontró",
                        subjects: subjects ? subjects.join(", ") : "No se encontró"
                    };
                    setBookState(newBook);
                } else {
                    setBookState(null);
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        getBookDetails();

    }, []);

    const handleButtonDelete = async (nanoid) => {
        await deleteData(nanoid);
    };

    if (loading) return <Loader />;

    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <img className="rounded-t-lg" src={bookState?.cover_img} alt="" />

                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{bookState?.title}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{bookState?.description}</p>

                </div>
                <button onClick={() => handleButtonDelete(book.nanoid)}>
                    Eliminar
                </button>
            </div>

        </>
    )
}

export default Cardbook