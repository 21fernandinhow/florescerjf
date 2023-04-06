import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

function Menu (){
    return(
        <Fragment>
            <section className="menu" data-aos="none">
                <Link to="/" className="menu-item">Home</Link>
                <Link to="/about" className="menu-item">Quem Somos</Link>
                <Link to="/help" className="menu-item">Preciso de ajuda</Link>
                <Link to="/donate" className="menu-item">Quero ajudar</Link>
             </section>
             <Footer/>
        </Fragment>
    )
};

export default Menu;