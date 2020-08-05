import React from 'react';
import navBar from '../navBar.css';

const NavBar2 = () =>{

    return (
        <nav className="navbar2">
            <div className="mobileRowCont">
                <div className="brandTitle"> Imagenator <i class="fa fa-fire" aria-hidden="true" /> </div>
               
                <div className="toggleBtnContainer">
                    <a href="#" className="toggleButton" onClick={() => {
                          const itemsMenu= document.getElementById("navbarLinksId");

                          if (itemsMenu.style.display === "flex"){
                              itemsMenu.style.display = "none";
                          }
                            else {
                                itemsMenu.style.display = "flex"  
                            }
                     }}>
                         
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </a>
                </div>
            </div>    
            <div className="navbarLinks" id="navbarLinksId">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Información</a></li>
                    <li><a href="#">Transformador</a></li>
                    <li><a className="fa fa fa-exchange" href="#" onClick={ ()=>{
                                    const element = document.getElementById("transformator");
                                    if (element.style.display === "none"){
                                        element.style.display="none";   //Change to block to regain show/hide functionality
                                    }
                                        else {
                                            element.style.display="none";  
                                        }
                                } }> </a>
                        </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar2;

