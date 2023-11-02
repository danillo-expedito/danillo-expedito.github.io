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
                    <div className=" w-90 h-200 flex flex-col flex-wrap items-center gap-6 mt-8">
                        { projectsFEData.map((project, index) => 
                            <ProjectCard 
                                key={ index}
                                name={ project.name }
                                description={ project.description }
                                image={ project.image }
                                url={ 'project.url' }
                                code={ project.code }
                                frameworks={ project.frameworks }
                            />
                      )}
                    </div>
                </section>
                <section className="flex flex-col items-center mt-8 text-xl">
                    <h2 className="uppercase">Back-End Projects</h2>
                    <div className=" w-90 h-120 flex flex-col flex-wrap items-center gap-6 mt-8">
                        { projectsBEData.map((project, index) => 
                            <ProjectCard
                                key={ index }
                                name={ project.name }
                                description={ project.description }
                                image={ project.image }
                                url={ project.url }
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