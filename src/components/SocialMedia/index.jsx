import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import insta from '../../assets/instagram.png'

function SocialMedia () {
    const socialMediaClasses = 'flex flex-row items-center justify-center gap-2 w-56 h-12 rounded-sm';

    return (
        <section className="flex flex-col gap-2 items-center mt-4">
        <h2 className="text-2xl uppercase font-bold text-secondary-400">
            Social media
        </h2>
        <div className="hover:bg-primary-100 rounded-sm">
            <a
                href="https://github.com/danillo-expedito"
                target="_blank" className={ socialMediaClasses }
                rel="noreferrer"
            >
                <img src={ github } alt="github logo" className="w-8"/>
                <p>/danillo-expedito</p>
            </a>
        </div>
        <div className="hover:bg-primary-100 rounded-sm">
            <a
                href="https://www.linkedin.com/in/danillo-expedito/"
                target="_blank"
                className={ socialMediaClasses }
                rel="noreferrer"
            >
                <img src={ linkedin } alt="linkedin logo" className="w-8"/>
                <p>/danillo-expedito</p>
            </a>
        </div >
        <div className="hover:bg-primary-100 rounded-sm">
            <a
                href="https://www.instagram.com/danillo_exp/"
                target="_blank"
                className={ socialMediaClasses }
                rel="noreferrer"
            >
                <img src={ insta } alt="instagram logo" className="w-8"/>
                <p>/danillo_exp</p>
            </a>
        </div>
    </section>
    )
}

export default SocialMedia;
