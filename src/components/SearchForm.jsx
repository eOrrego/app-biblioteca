import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/FetchBooksContext';
import "./SearchForm.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass);

const SearchForm = () => {
    const { setSearchTerm, setResultTitle } = useGlobalContext();
    const searchText = useRef('');
    const navigate = useNavigate();

    useEffect(() => searchText.current.focus(), []);
    const handleSubmit = (e) => {
        e.preventDefault();
        let tempSearchTerm = searchText.current.value.trim();
        if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
            // setSearchTerm("the lost world");
            setResultTitle("Por favor ingrese algo ...");
        } else {
            setSearchTerm(searchText.current.value);
        }

        // <Navigate to={<Aboutus />} replace={true} />
        // <Aboutus />
        navigate("/book");
        // navigate("/about");
    };

    return (
        <div className='search-form'>
            <div className='container'>
                <div className='search-form-content'>
                    <form className='search-form' onSubmit={handleSubmit}>
                        <div className='search-form-elem flex flex-sb bg-white justify-between'>
                            <input type="text" className='form-control text-black' placeholder='Moby Dick ...' ref={searchText} />
                            <button type="submit" className='flex items-center	' onClick={handleSubmit}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black text-4xl" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchForm