import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Introduction from './Introduction';
import Services from './Services';
import './styles/Home.css';


const Home = () => {
    return (
        <div>
            <Navbar />
            <Header/>
            <Introduction/>
            <Services/>
        </div>
    );
};

export default Home;