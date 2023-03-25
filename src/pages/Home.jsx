import React from 'react';
import SearchForm from '../components/SearchForm';
import "./Home.css";

const Home = () => {
    return (
        <div className='holder'>
            <header className='header'>
                <div className='header-content flex flex-c text-center text-white'>
                    <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                    <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
                    <SearchForm />
                </div>
            </header>
        </div>
    )
}

export default Home