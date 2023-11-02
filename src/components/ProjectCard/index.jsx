import PropTypes from "prop-types"
function ProjectCard (props) {
    const imagesClassNames = "h-64 rounded-md shadow-md shadow-primary-500";
    const { name, description, image, url, code, frameworks } = props;
    return (
        <div
            className="w-112 h-110 flex flex-col items-center rounded-md shadow-md shadow-primary-500
            bg-gradient-to-b from-primary-300 to-primary-500 to-36%"
        >
            <img
                src={ image }
                alt="" 
                className={ imagesClassNames }
            />
            <h3 className="text-md uppercase">{ name }</h3>
            <div className="flex flex-row w-100 h-40 justify-between">
                <div className="flex flex-col justify-center gap-1">
                    <div className="w-72">
                        <h3 className="text-md">Description</h3>
                        <hr className="border border-highlight-300"/>
                        <p className="text-sm">{ description }</p>
                    </div>
                    <div className="w-72">
                        <h3 className="text-md">Language & Frameworks</h3>
                        <hr className="border border-primary-100" />
                        <ul className="flex flex-row gap-2">
                            { frameworks.map((framework, index) => {
                                return (
                                    <li className="text-sm" key={ index }>{ framework }</li>
                                )
                            })} 
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 w-40">
                    { (url) 
                    &&
                        <a href={ url } target="_blank" rel="noreferrer">
                            <button className="bg-primary-700 hover:bg-primary-300 text-white font-bold py-2 px-4 rounded w-32">
                                Live Demo
                            </button>
                        </a>
                    }
                    <a href={ code } target="_blank" rel="noreferrer">
                        <button className="bg-primary-700 hover:bg-primary-300 text-white font-bold py-2 px-4 rounded w-32">
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
  code: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  frameworks: PropTypes.arrayOf(PropTypes.string)
}

export default ProjectCard;