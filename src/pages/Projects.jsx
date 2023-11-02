import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { projectsFEData, projectsBEData }from '../data/projectsData';
import coding from '../assets/coding.png';

function Projects () {
    return (
        <div className=" h-auto bg-primary-100">
            <Header />
            <div className="bg-primary-100 flex flex-col items-center border border-red-700 w-screen h-auto">
                <div className="absolute top-12 left-48 
                flex flex-row items-center justify-center gap-4
                text-3xl font-semibold mt-8 uppercase"
                >
                    <img src={ coding } alt="" className="w-12" />
                    <h1 className="">
                        Projects
                    </h1>
                </div>
                <section className="flex flex-col items-center mt-12 text-xl border border-red-700">
                    <h2>Front-End Projects</h2>
                    <div className=" w-90 h-200 flex flex-col flex-wrap items-center gap-6 mt-8">
                        { projectsFEData.map((project, index) => 
                            <ProjectCard 
                                key={ index}
                                name={ project.name }
                                description={ project.description }
                                image={ project.image }
                                url={ 'project.url' }
                                code={ project.code }
                            />
                      )}
                    </div>
                </section>
                <section className="flex flex-col items-center text-xl border border-red-700">
                    <h2>Back-End Projects</h2>
                    <div className=" w-90 h-200 flex flex-col flex-wrap items-center gap-6 mt-8">
                        { projectsBEData.map((project, index) => 
                            <ProjectCard
                                key={ index }
                                name={ project.name }
                                description={ project.description }
                                image={ project.image }
                                url={ project.url }
                                code={ project.code }
                            />
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Projects;