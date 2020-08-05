import React from 'react';

//Este componente es solo para practicar algoritmos iterativos entre otros

class Transformador extends React.Component {
state = { textoLocal: "" , textoConvertido: ""};

onFormSubmit = (event) => {
    event.preventDefault();
    const textoLocal = this.state.textoLocal;
    const textoPalabras = textoLocal.split(" ");

    const nuevoTexto =  textoPalabras.map((palabra) => { 
        const palabraDividida = palabra.split("");     
        palabraDividida.pop();

        const nuevaOracion = palabraDividida.concat("iwi ");
        return (nuevaOracion);
    });

    console.log(`Oracion original: ${textoPalabras} | Nueva Oracion: ${nuevoTexto}`);

    this.setState({textoConvertido : nuevoTexto});
}

render(){    
        return (
                <form className = "rowForma" id="transformator">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <div>
                                <input type="text" 
                                className="form-control input1" 
                                value= {this.state.texto}
                                onChange={(e) => this.setState({textoLocal: e.target.value})} 
                                placeholder="introduzca una sentencia"/>
                                <button className="btn btn-success"
                                    type="submit" 
                                    onClick={this.onFormSubmit}>
                                        Reemplazar
                                </button>
                            </div>
                        </div>
                        <div className="col-md6 oracionProcesada">
                            <h1>Oracion procesada</h1>
                            <p>{this.state.textoConvertido}</p>
                        </div>
                    </div>
                </form>
        );
    }
};


export default Transformador;