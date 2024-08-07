import './Research.css'
import ResearchGroup from './ResearchGroup'


const Research = () => {
    const projects = [
        // {
        //     title: "Physics Circle Project Name Title",
        //     content: "A short description of what your project is about. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //     link: "physics"
        // },
        {
            title: "Exploring Monte Carlo Methods in Lattice QCD Simulations",
            content: "This project analyzes the latest Monte Carlo methods employed in lattice Quantum Chromodynamics (QCD) simulations. It highlights how these advanced techniques enhance our comprehension of Quantum Chromodynamics phenomena, providing deeper insights into the fundamental forces governing particle interactions.",
            link: "physics",
            image: "/imgs/circles/physics/what-is-the-monte-carlo-simulation.png"
        },
        {
            title: "Environmental Toxins and Parkinson’s Disease Progression",
            content: "Our meta-analysis explores how environmental toxins like pesticides, heavy metals, and industrial chemicals contribute to Parkinson's Disease (PD), providing crucial insights for research, healthcare, and policy.",
            link: "bio",
            image: "/imgs/circles/bio/pesticides-effects.jpg"
        },
        {
            title: "Impact of Climate Change on Marginalized Communities",
            content: "Our research addresses water shortages in indigenous communities, urban heat islands impacting vulnerable populations, agricultural challenges in low-income regions, and the correlation between climate change and diseases.",
            link: "environment-science",
            image: "/imgs/circles/envisci/desert.png"
        },
        {
            title: "The Emotional Effects of Different Types of Music",
            content: "This study explores how music evokes emotions, analyzing why sad music induces sadness and happy music elicits happiness to deepen our understanding of its emotional impact.",
            link: "psych",
            image: "/imgs/circles/psych/music-evoked-emotions.jpg"
        },
        {
            title: "Ethical Implications of Quantum Mechanics",
            content: "Quantum ethics examines how quantum mechanics could reshape moral decision-making, challenging traditional ethical theories with new perspectives on privacy, free will, and the consequences of actions in a quantum realm.",
            link: "compsci",
            image: "/imgs/circles/compsci/quantum-computer.png"
        },
        {
            title: "The Impact of COVID-19 on the Housing Market",
            content: "This project explores the impact of the COVID-19 pandemic on the housing market, focusing on shifts in demand, pricing trends, and market dynamics. Through data analysis, we aim to provide insights into the pandemic's influence on housing and guide future research and policy decisions.",
            link: "econ",
            image: "/imgs/circles/econ/price-change.png"
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
                    return <ResearchGroup title={project.title} content={project.content} link={project.link} image={project.image} />
                })
                }
            </div>
        </div>
    )
}

export default Research