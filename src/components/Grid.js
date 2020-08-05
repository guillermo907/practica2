import React from 'react';
import flamingo from '../flamingo.jpg';
import {connect} from 'react-redux';

const Grid = (props = []) =>{
    console.log("props en el grid: ");
    console.log(props);
    
    return(
        <div className="gridContainer">
            <div className="item-1">
                <div className="imgContainerBlur">
                    <div className="imgContainer">
                         <img src={flamingo} alt="flamingo"/>
                    </div>
                </div>  
            </div>
            <div className="item-2">
                ghkjhgjk fhjkhgj gjhkg hjkgh hgjkghjk
            </div>
            <div className="item-3">

            </div>
            <div className="item-4">
                otra columna2
            </div>
            <div className="item-5">
                otra columna3
            </div>
            <div className="item-6">
                otra columna4
            </div>
        </div>
    );
}

const mapStateToProps = (state = []) => {
    return { images: state.images[0]}
};



export default connect(mapStateToProps)(Grid);

