//Action creators
import axios from 'axios';

export const ingresarTexto = (term) =>{
    return  {
        type: "TEXTO_INGRESADO",
        payload: term
    };
};

export const fetchImages = (term) =>{
    return async(dispatch)=>{
        const images = await axios.get("https://api.unsplash.com/search/photos",{ 
            headers:{
                Authorization: 'Client-ID dwU6LvbO2wBx5sIEdw4tlQB0j9dtx4Yx-FICR31Al_U'
            },
            params:{
                query: {term: term},
                per_page: 30,
                orientation: "landscape"
            }          
      });

      dispatch({type: "FETCH_IMAGES", payload: images.data.results});          
    };
};

