import './Research.css'
import ResearchGroup from './ResearchGroup'


const Research = () => {
    const projects = [
        {
            title: "Physics Circle Project Name Title",
            content: "A short description of what your project is about. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "physics"
        },
        {
            title: "Chemistry Circle Project Name Title",
            content: "A short description of what your project is about. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "chem"
        },
        {
            title: "Biology Circle Project Name Title",
            content: "A short description of what your project is about. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "bio"
        },
        {
            title: "Environment Science Circle Project Name Title",
            content: "A short description of what your project is about. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "environment-science"
        },
        {
            title: "Psychology Circle Project Name Title",
            content: "A short description of what your project is about. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "psych"
        },
        {
            title: "Economics Circle Project Name Title",
            content: "A short description of what your project is about. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "econ"
        },
        {
            title: "Computer Science Circle Project Name Title",
            content: "A short description of what your project is about. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "compsci"
        }
    ];

    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='pt-8 text-center text-2xl md:text-3xl lg:text-4xl py-4'><span className="font-semibold">Current Research Projects</span></h1>
                <p>Take a look around to explore our current endeavors!</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                {projects.map(project => {
                    return <ResearchGroup title={project.title} content={project.content} link={project.link} />
                })
                }
            </div>
        </div>
    )
}

export default Research