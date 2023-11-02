import profile from '../assets/profile.png'
import { useState } from 'react';
import Timeline from '../components/Timeline';
import SocialMedia from '../components/SocialMedia';
import uparrow from '../assets/uparrow.png'
import downarrow from '../assets/downarrow.png';
import Header from '../components/Header';

function Home() {
    const [language, setLanguage] = useState("en-us");
    const [showMore, setShowMore] = useState(false);

    const changeLanguage = () => {
        if (language === "en-us") {
            setLanguage("pt-br");
        } else {
            setLanguage("en-us");
        }
    }

    return (
        <div className="bg-primary-100 w-screen h-screen">
            <Header />
            <div className="home w-3/4 ml-20 mt-12 h-64 rounded-md shadow-md shadow-primary-500">
                <section 
                    className="bg-gradient-to-b from-primary-300 to-primary-500 to-36%
                                flex flex-row h-full gap-4 rounded-md items-center"
                >
                    <img 
                        src={ profile }
                        alt="profile picture"
                        className="w-44 h-44 rounded-full ml-8 border-4 border-secondary-500"
                    />
                    <div className="flex flex-col items-start justify-center mr-8">
                        <div className="flex flex-row items-center justify-end gap-4">
                            <h2 className="text-2xl uppercase font-bold mb-1">
                                { language === "en-us" ? "About Me" : "Sobre Mim" }
                            </h2>
                            <button 
                                onClick={ changeLanguage }
                                className="bg-highlight-300 text-secondary-400 text-md font-bold
                                w-20 h-6 rounded shadow-md shadow-primary-500
                                hover:bg-highlight-100 hover:text-secondary-500
                                active:shadow-none" 
                            >
                                { language === "en-us" ? "Traduzir" : "Translate" }
                            </button>
                        </div>
                        <hr />
                        <div>
                            { 
                            (language === "en-us") 
                            ? (<p>
                                   { `My name is Danillo Expedito, I'm 23 years old and currently living in Itu, São Paulo.
                                    I'm a FullStack developer, studying Web Development at Trybe.
                                    Technology has always been a passion, and in programming I found a way to unite this passion with my desire to create new things.
                                    My professional career in other fields is brief, I had experiences as a storekeeper and also as a public employee.
                                    I decided to leave the public office to dedicate myself to programming, and today I am looking for an opportunity to enter the job market and contribute to the growth and culture of the company, as well as to develop professionally.`}
                            </p>)
                            : (<p className="text-md">
                                Me chamo Danillo Expedito, tenho 23 anos e atualmente estou morando em Itu, interior de São Paulo.
                                Sou um desenvolvedor FullStack, cursando Desenvolvimento Web na Trybe.
                                Tecnologia sempre foi uma paixão, e na programação encontrei uma forma de unir essa paixão com a minha vontade de criar coisas novas.
                                Minha trajetória profissional em outros ramos é breve, tive experiências como almoxarife e também como funcionario público.
                                Resolvi deixar o cargo público para me dedicar a programação, e hoje estou em busca de uma oportunidade para ingressar no mercado de trabalho
                                e contribuir com o crescimento e cultura da empresa, assim como me desenvolver profissionalmente.
                            </p>)
                            }
                        </div>
                    </div>
                </section>
            </div>
            <button 
                onClick={ () => setShowMore(!showMore) }
                className="absolute top-84 left-80 mb-8 ml-60
                bg-highlight-300 text-secondary-400 text-md font-bold
                w-8 rounded-full shadow-md shadow-primary-500
                hover:bg-highlight-100 hover:text-secondary-500 animate-bounce animation-
                active:shadow-none"
            >
                { showMore 
                  ? <img src={ uparrow } alt="up arrow" /> 
                  : <img src={ downarrow } alt="down arrow" /> }
            </button>
            { showMore && 
                <div 
                    className="grid grid-cols-2 bg-primary-300 w-3/4 h-60 ml-20
                    rounded-s-none shadow-md shadow-primary-500"
                >
                    <Timeline language={ language } />
                    <SocialMedia />
                </div>
            }
        </div>
    )
}

export default Home;