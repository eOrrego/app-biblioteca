import React from 'react';
import SearchForm from '../components/SearchForm';
import "./Home.css";

const Home = () => {

    return (
        <div className='holder'>
            <header className='header'>
                <div className='header-content flex flex-c text-center text-white justify-center items-center'>
                    <h2 className='header-title text-capitalize font-semibold'>¿Qué libro te gustaría leer hoy?</h2><br />
                    <p className='header-text fs-18 fw-3'>
                        "Explorar un nuevo libro es como un viaje a lugares desconocidos. Deja que la lectura te lleve a un mundo de posibilidades y encuentra tu próxima gran aventura."
                    </p>
                    <SearchForm />
                </div>
            </header>
        </div>
    )
}

export default Home