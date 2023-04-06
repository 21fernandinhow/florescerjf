import React from "react";
import { Link } from "react-router-dom";

function About(){
    return(
        <section className="about content-container" data-aos="zoom-in" data-aos-duration="1500">

            <h1>Nossa História</h1>

            <p>A Florescer nasceu com a vivência dos fundadores, Gaby, que tinha acabado de sair de um relacionamento abusivo, 
                e Roberto, que viu tudo isso de perto, a ONG nasceu em 2018 para ajudar mulheres que passam pela mesma situação.</p> 
                
            <p> Rapidamente, o projeto cresceu, com apoio de pessoas incríveis dispostas a abraçar a causa e fazer acontecer! </p>

            <p> Hoje, a Florescer 
                conta com dezenas de voluntários, e distribui mais de 4 toneladas de alimentos por ano em cestas básicas, além de 
                ações marcantes e o apoio psicológico a essas mulheres que foi o início de tudo!</p>

            <Link to="/video" className="btn-outline">Ver mais</Link>
            
        </section>
    )
};

export default About;