import React from "react";

function Donate(){
    return(
        <section className="donate content-container" data-aos="zoom-in" data-aos-duration="1500">
            <div>
                <h1>Ajude a Florescer</h1>
                <p>Existem muitas formas de ajudar na Florescer, seja com uma doação ou com seu próprio trabalho voluntário.</p>
            </div>
            <div>
                <h2>Fazer uma doação:</h2>
                <p className="pix">Chave PIX: 32 98458-4915</p>
            </div>
            <div>
                <h2>Quero ser voluntário</h2>
                <p>Com sua ajuda podemos chegar mais longe! Estamos com as portas sempre abertas para boas pessoas 
                    que queiram contribuir com nossa ONG. Faça sua inscrição agora mesmo!</p>
                <br/>
                <a className="btn-work" href="https://docs.google.com/forms/d/e/1FAIpQLSc4Y7NZ6tXTXQHbs8utx4ENO4BYJ8fronO9l5slVgVfhvQ8cQ/viewform" target="_blank" rel="noopener noreferrer">Inscrever-se</a>
                <br/>               
            </div>
        </section>
    )
};

export default Donate;