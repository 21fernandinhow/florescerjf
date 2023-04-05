import React, { Fragment } from "react";

function Home(){
    return(
        <Fragment>
            <header className="header" data-aos="fade-down" data-aos-duration="1500">
                <h1>Florescer JF</h1>
                <p>Somos uma ONG com o propósito de cuidar de vítimas de abusos, baixa autoestima, depressão e ansiedade</p>
            </header>
            <section className="home" data-aos="zoom-in" data-aos-duration="1500">
                <div className="border">
                    <img className="avatar" alt="avatar" src="../../images/logo.png"/>
                </div>
            </section>
        </Fragment>
    )
};

export default Home;