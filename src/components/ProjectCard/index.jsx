import PropTypes from "prop-types"
function ProjectCard (props) {
    const imagesClassNames = "h-72 rounded-md shadow-md shadow-primary-500";
    const { name, description, image, url, code } = props;
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
            <p>{ description }</p>
            <div>
                { (url) 
                   &&
                    <a href={ url } target="_blank" rel="noreferrer">
                        <button className="bg-primary-500 hover:bg-primary-300 text-white font-bold py-2 px-4 rounded">
                            Live Demo
                        </button>
                    </a>
                }
                <a href={ code } target="_blank" rel="noreferrer">
                    <button className="bg-primary-500 hover:bg-primary-300 text-white font-bold py-2 px-4 rounded">
                        Code
                    </button>
                </a>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
  code: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string
}

export default ProjectCard;