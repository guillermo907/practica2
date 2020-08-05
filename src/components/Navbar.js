import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-custom1">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link fa fa-exchange fa-lg" href="#" onClick={()=>{
                                    const element = document.getElementById("transformator");
                                    if (element.style.display === "none"){
                                        element.style.display="block";
                                    }
                                        else {
                                            element.style.display="none";
                                        }
                                }}> 
                        </a>                      
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fa fa-truck fa-lg" href="#" >  </a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link fa fa-refresh fa-lg" href="#" aria-hidden="true"></a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">                   
                    <a className="fa fa-cog fa-spin fa-lg">
                    </a>
                </form>
            </div>
        </nav>
    );

}

export default NavBar;
