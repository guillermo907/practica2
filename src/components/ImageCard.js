import React from 'react';
import {connect} from 'react-redux';
import grid from '../grid.css';

class ImageCard extends React.Component{

    render (){
        console.log("asdad: ");
        console.log(this.props);
        return (
            <div>
                    <img src={this.props.image.urls.small} onClick={() => {window.open(this.props.image.urls.full, '_blank');}} />
            </div>
        );
    }
}

export default ImageCard;


