// eslint-disable-next-line no-unused-vars
import React from "react";
import '../assets/css/components/cartao.css';


const Home = () => {
    return (
        <main>
            <div className="container">
                <h2 className="titulo-pagina">Pet notícias</h2>
            </div>
            <section className="container flex flex--centro">
                <article className="cartao post">
                    <h2 className="cartao__titulo">Banho no cão</h2>
                    <p className="cartao__texto">Banhos regulares mantêm os pelos e pele de seu cachorro limpos e saudáveis...</p>
                </article>
            </section>
        </main>
    );
};

export default Home;
