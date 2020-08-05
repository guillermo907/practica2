import React from 'react';
import {connect} from 'react-redux';
import grid from '../grid.css';
import ImageCard from './ImageCard';

const ImageList = (props = []) => {

    if (!props.images) {
        return "";
    }
    
    const images = props.images.map((image) => {
        console.log(image);
        return(
                <ImageCard key={image.id} image={image}/>         
            )
    });

    return  <div className="imageListContainer"> {images} </div>;
} 

const mapStateToProps = (state = []) =>{
    return {images: state.images[0]}
}


export default connect (mapStateToProps)(ImageList);