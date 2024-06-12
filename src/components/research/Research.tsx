import './Research.css'
import ResearchGroup from './ResearchGroup'


const Research = () => {
    const projects = [
        {
            title: "Physics Circle Project Name Title",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "https://www.enterlinkhere.com"
        },
        {
            title: "Chemistry Circle Project Name Title",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "https://www.enterlinkhere.com"
        },
        {
            title: "Biology Circle Project Name Title",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "https://www.enterlinkhere.com"
        },
        {
            title: "Environment Science Circle Project Name Title",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "https://www.enterlinkhere.com"
        },
        {
            title: "Psychology Circle Project Name Title",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "https://www.enterlinkhere.com"
        },
        {
            title: "Economics Circle Project Name Title",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "https://www.enterlinkhere.com"
        },
        {
            title: "Computer Science Circle Project Name Title",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "https://www.enterlinkhere.com"
        }
    ];

    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='py-8 text-center text-2xl md:text-3xl lg:text-4xl m-5'><span className="font-semibold">Current Research Projects</span></h1>
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