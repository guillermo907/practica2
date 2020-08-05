import { combineReducers } from 'redux';

const termReducer = (state = [], action) =>{
    switch(action.type){
        case "TEXTO_INGRESADO":
      //      console.log('entro al reducer correcto:  ' + action.payload);
            return action.payload;
    }
    return state;
};
const imagesReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH_IMAGES":
            console.log(`Entro al reducer de imagenes y al case :  ${state}`);
            return [action.payload];
    }
    return state;;
};


export default combineReducers({
    term: termReducer,
    images: imagesReducer
});