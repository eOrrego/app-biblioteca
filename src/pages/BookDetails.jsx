import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import coverImg from "../images/cover_not_found.jpg";
import "./BookDetails.css";
// import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faHeart);

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        async function getBookDetails() {
            try {
                const response = await fetch(`${URL}${id}.json`);
                const data = await response.json();
                console.log("URL: ", `${URL}${id}.json`);
                console.log(data);
                console.log("ID: ", id);

                if (data) {
                    const { description, title, covers, subject_places, subject_times, subjects } = data;
                    const newBook = {
                        description: description ? description.value : "No se encontró ninguna descripción",
                        title: title,
                        cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
                        subject_places: subject_places ? subject_places.join(", ") : "No se encontró",
                        subject_times: subject_times ? subject_times.join(", ") : "No se encontró",
                        subjects: subjects ? subjects.join(", ") : "No se encontró"
                    };
                    setBook(newBook);
                } else {
                    setBook(null);
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getBookDetails();
    }, [id]);

    if (loading) return <Loader />;

    return (
        <section className='book-details'>
            <div className='container'>
                <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
                    {/* <FaArrowLeft size={22} /> */}
                    <span className='fs-18 fw-6'>Volver</span>
                </button>

                <button className="bg-slate-500 text-white active:bg-rose-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                >
                    <FontAwesomeIcon icon={faHeart} className="text-2xl font-bold text-white" />
                </button>

                <div className='book-details-content grid'>
                    <div className='book-details-img'>
                        <img src={book?.cover_img} alt="cover img" />
                    </div>
                    <div className='book-details-info'>
                        <div className='book-details-item title'>
                            <span className='fw-6 fs-24'>{book?.title}</span>
                        </div>
                        <div className='book-details-item description'>
                            <span>{book?.description}</span>
                        </div>
                        <div className='book-details-item'>
                            <span className='fw-6'>Subject Places: </span>
                            <span className='text-italic'>{book?.subject_places}</span>
                        </div>
                        <div className='book-details-item'>
                            <span className='fw-6'>Subject Times: </span>
                            <span className='text-italic'>{book?.subject_times}</span>
                        </div>
                        <div className='book-details-item'>
                            <span className='fw-6'>Subjects: </span>
                            <span>{book?.subjects}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookDetails