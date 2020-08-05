import React from 'react';
import Navbar from './Navbar';
import Transformador from './Transformador';
import style  from '../style.css';
import Grid from './Grid';
import Searchbar from './Searchbar';
import NavBar2 from './NavBar2';
import ImageList from './ImageList';

const App = () =>{

    return (
        <div className="container-fluid mainContainer">
            <div className="containerBlur">
                <NavBar2 />
                <Transformador texto="texto como props" />
                <Searchbar />
                <Grid />
                <ImageList />
            </div>
        </div>
    );
};

export default App;



