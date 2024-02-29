import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { projectsFEData, projectsBEData }from '../data/projectsData';

function Projects () {
    return (
        <div className=" h-auto bg-primary-100">
            <Header />
            <div className="bg-primary-100 flex flex-col items-center w-screen h-auto">
                <section className="flex flex-col items-center mt-24 text-xl">
                    <h2 className="uppercase">Front-End Projects</h2>
                    <hr className="w-96 border border-highlight-300 shadow-lg shadow-black" />
                    <div className=" w-auto h-auto flex flex-row flex-wrap items-center gap-6 mt-8 ml-8">
                        { projectsFEData.map((project, index) => 
                            <ProjectCard 
                                key={ index}
                                name={ project.name }
                                description={ project.description }
                                image={ project.image }
                                url={ project.live }
                                code={ project.code }
                                frameworks={ project.frameworks }
                            />
                      )}
                    </div>
                </section>
                <section className="flex flex-col items-center mt-8 text-xl">
                    <h2 className="uppercase">Back-End Projects</h2>
                    <hr className="w-96 border border-highlight-300 shadow-lg shadow-black" />
                    <div className="w-auto h-auto flex flex-row flex-wrap items-center gap-6 mt-8 ml-8">
                        { projectsBEData.map((project, index) => 
                            <ProjectCard
                                key={ index }
                                name={ project.name }
                                description={ project.description }
                                image={ project.image }
                                url={ project.live }
                                code={ project.code }
                                frameworks={ project.frameworks }
                            />
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Projects;