import './Research.css'
import ResearchGroup from './ResearchGroup'


const Research = () => {
    const projects = [
        {
            title: "Sample 1",
            content: "Sample text 1",
            link: "https://www.enterlinkhere.com"
        },
        {
            title: "Sample 2",
            content: "Sample text 2",
            link: "https://www.enterlinkhere.com"
        },
        {
            title: "Sample 3",
            content: "Sample text 3",
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