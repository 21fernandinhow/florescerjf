import React from "react";

function Help(){
    return(
        <section className="help content-container" data-aos="zoom-in" data-aos-duration="1500">
            <h1>Viemos lhe estender a mão</h1>
            <p>A Florescer está aqui para você. Preencha seus dados no link abaixo para se inscrever em nosso 
                programa de ajuda, ou entre em contato em nossa emergência caso esteja em perigo.</p>
            
            <a className="btn-outline" href="https://docs.google.com/forms/d/e/1FAIpQLSedVVQc8aVBJyDRpORsxsOZES7s1FTzkMH30a3ZsGONZysU-w/viewform"
            target="_blank" rel="noopener noreferrer">Programa de Ajuda Contínua</a>
            <a className="btn-outline" href="https://wa.me/message/3OLNPBK566BCK1"target="_blank" rel="noopener noreferrer">
                Estou em perigo, é uma emergência</a>
        </section>
    )
};

export default Help;