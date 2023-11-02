import PropTypes from "prop-types"

function Timeline (props) {
    const { language } = props;
    return (
        <section className="flex flex-col gap-4 items-center mt-4">
                <h2 className="text-2xl uppercase font-bold text-secondary-400">
                    { language === "en-us" ? "Timeline" : "Linha do Tempo"}
                </h2>
                <div className="flex flex-col items-start justify-center mr-8">
                    <div className="flex flex-row items-center justify-end gap-4">
                        <h2 className="text-xl uppercase font-bold">
                            { language === "en-us" ? "Education" : "Educação" }
                        </h2>
                    </div>
                    <hr />
                    <div>
                        { 
                        (language === "en-us") 
                        ? (<div>
                               <p>
                                    <span className="font-bold">2023 - : </span> 
                                    Web Development - Trybe
                               </p>
                               <p>
                                    <span className="font-bold">2019 - 2021 : </span>
                                    Instituto Borges de Artes e Ofícios - IBAO (High School)
                               </p>
                           </div>
                           )
                        : (<div>
                                <p>
                                    <span className="font-bold">2023 : </span> 
                                    Desenvolvimento Web - Trybe
                                </p>
                                <p>
                                    <span className="font-bold">2019 - 2021 : </span>
                                    Instituto Borges de Artes e Ofícios - IBAO (Ensino Médio)
                                </p>
                          </div>)
                        }
                    </div>
                    <div className="flex flex-row items-center justify-end gap-4">
                        <h2 className="text-xl uppercase font-bold">
                            { language === "en-us" ? "Work Experience" : "Experiência Profissional" }
                        </h2>
                    </div>
                    <hr />
                    <div>
                        { 
                        (language === "en-us") 
                        ? (<div>
                               <p>
                                    <span className="font-bold">2022 - 2023 : </span> 
                                    Prefeitura da Estância Turística de Itu (Public Employee)
                               </p>
                               <p>
                                    <span className="font-bold">2022 : </span>
                                    Aisin Automotive do Brasil (Internship)
                               </p>
                           </div>
                           )
                        : (<div>
                                <p>
                                    <span className="font-bold">2022 - 2023 : </span> 
                                    Prefeitura da Estância Turística de Itu (Funcionário Público)
                                </p>
                                <p>
                                    <span className="font-bold">2022 : </span>
                                    Aisin Automotive do Brasil (Aprendiz)
                                </p>
                          </div>)
                        }
                    </div>
                </div>
            </section>
    )
}

Timeline.propTypes = {
  language: PropTypes.string
}

export default Timeline;