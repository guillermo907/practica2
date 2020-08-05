import React from 'react';
import { connect } from 'react-redux';
import {ingresarTexto} from '../actions';
import {fetchImages} from '../actions';



class Searchbar extends React.Component{

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchImages(this.props.term);
        }

    render(){
        return (
            <form className="rowFormaSB">
                <div className="item-1">              
                        <input type="text" className="form-control searchBarInput" 
                        onChange={(e) => {this.props.ingresarTexto(e.target.value)}} />       
                </div>
                <div>
                        <button className="btn btn-success" onClick={this.onFormSubmit}>
                            <i class="fa fa-search fa-lg" aria-hidden="true"/>
                        </button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        term: state.term,
        images: state.images 
    }
};

export default connect (mapStateToProps, {ingresarTexto: ingresarTexto, fetchImages: fetchImages})(Searchbar);