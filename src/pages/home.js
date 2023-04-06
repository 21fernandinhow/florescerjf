import React, { Fragment } from "react";

function Home(){
    return(
        <Fragment>
            <header className="header" data-aos="fade-down" data-aos-duration="1500">
                <h1>Florescer</h1>
                <p>Somos uma ONG com o propósito de cuidar de <strong>mulheres</strong> vítimas de abusos, baixa autoestima, 
                depressão e ansiedade. <a href="https://tribunademinas.com.br/noticias/cidade/19-11-2022/tradicao-resgatada-rua-ganha-as-cores-da-bandeira-do-brasil.html" target="_blank" rel="noopener noreferrer">Leia mais</a></p>
                <div className="icons">
                    <a href="https://www.instagram.com/florescerjf/" target="_blank" rel="noopener noreferrer">
                        <img src="../../images/instagram.webp" className="icon" alt="instagram"></img>
                    </a>
                    <a href="https://twitter.com/florescerjf" target="_blank" rel="noopener noreferrer">
                        <img src="../../images/twitter.webp" className="icon" alt="twitter"></img>
                    </a>
                    <a href="mailto:projetoflorescerjf@outlook.com" target="_blank" rel="noopener noreferrer">
                        <img src="../../images/mail.webp" className="icon" alt="email"></img>
                    </a>
                    <a href="https://open.spotify.com/show/49IBykwev8njUWTs10Crxi?si=DjFDUYwBR_2xPM_fKB6KJg&utm_source=copy-link&nd=1/" target="_blank" rel="noopener noreferrer">
                        <img src="../../images/spotify.webp" className="icon" alt="spotify"></img>
                    </a>
                    <a href="https://www.tiktok.com/@florescerjf" target="_blank" rel="noopener noreferrer">
                        <img src="../../images/tiktok.webp" className="icon" alt="tiktok"></img>
                    </a>
                </div>
            </header>
            <section className="home" data-aos="zoom-in" data-aos-duration="1500">
                <div className="border">
                    <img className="avatar" alt="avatar" src="../../images/logo.webp"/>
                </div>
            </section>
        </Fragment>
    )
};

export default Home;