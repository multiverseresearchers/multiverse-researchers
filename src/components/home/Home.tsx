import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../@/components/ui/tabs"
import CircleSnippet from "./CircleSnippet"
import CSS from "csstype";

import './Home.css'

const Home = () => {

    const backgroundWrapping: CSS.Properties = {
		'backgroundRepeat': 'no-repeat',
		'backgroundSize': 'cover'
	}

	return (
    <div className="bg-[url('/imgs/filler/Background.png')] pb-32" style={backgroundWrapping}>
            <div className='flex flex-col w-full h-[84vh] items-center justify-evenly'>
				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl m-5'>The Future of Research<br />Starts <span className='font-semibold'>Here</span></h1>
					<p className='text-center w-2/3'>We are a student led organization that empowers high schoolers to engage in innovative research.</p>
				</div>
				<svg className='animate-bounce' xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="#000000" /></svg>
			</div>
			<div className="flex flex-col w-full items-center">
				<Tabs defaultValue="bio" className="w-2/3 p-1">
					<TabsList className="flex flex-row justify-evenly h-fit bg-white shadow-lg border border-gray-100 rounded-lg mb-12">
						{/* <TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="physics">Physics Circle</TabsTrigger> */}
						<TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="bio">Biology Circle</TabsTrigger>
						<TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="envisci">Environment Science Circle</TabsTrigger>
						<TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="psych">Psychology Circle</TabsTrigger>
						<TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="compsci">Computer Science Circle</TabsTrigger>
                        <TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="econ">Economics Circle</TabsTrigger>
					</TabsList>
					<div className="p-8 bg-white border border-gray-100 rounded-lg shadow-xl">
						{/* <TabsContent value="physics">
							<CircleSnippet
								title="Physics Circle Project Name Title"
								description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
								image1="/imgs/filler/Rectangle_11.png"
								image2="/imgs/filler/Rectangle_11.png"
							/>
						</TabsContent> { /* maybe add a yaml file w/centralized descriptions */}
						<TabsContent value="bio">
                            <CircleSnippet
    								title="Environmental Toxins and Parkinson’s Disease Progression"
    								description={`Our meta-analysis examines the impact of environmental toxins on Parkinson's Disease (PD), synthesizing various studies to understand how pesticides, heavy metals, and industrial chemicals contribute to this disorder. This research will provide valuable insights for researchers, healthcare providers, and policymakers on PD prevention and treatment. We will identify key toxins linked to PD, explore dose-response relationships, and investigate the biological mechanisms involved. Additionally, we will consider how PD susceptibility varies geographically and demographically. Our findings will guide policy recommendations to reduce exposure to harmful toxins and mitigate PD risk.`}
    								image1="/imgs/circles/bio/pd-progression.jpg"
    								image2="/imgs/circles/bio/neuroimaging.jpg"
							/>
                        </TabsContent>
						<TabsContent value="envisci">
                            <CircleSnippet
    								title="Impact of Climate Change on Marginalized Communities"
    								description={`Our research focuses on several critical issues: water shortages in indigenous communities, urban heat islands affecting vulnerable populations, agricultural challenges in low-income regions, and the correlation between climate change and diseases. The goal is to provide insights that help mitigate the effects of climate change on marginalized groups. By examining these topics, we aim to inform strategies and policies to support vulnerable communities facing climate-related challenges.`}
    								image1="/imgs/circles/envisci/fields.png"
    								image2="/imgs/circles/envisci/heatmap.png"
							/>
                        </TabsContent>
						<TabsContent value="psych">
                            <CircleSnippet
    								title="The Emotional Effects of Different Types of Music"
    								description={`This experimental study investigates the mechanisms behind the emotional impact of music. We aim to understand how and why sad music induces feelings of sadness and happy music evokes happiness. By analyzing physiological and psychological responses to different types of music, we seek to uncover the underlying processes that drive these emotional reactions. Our findings will contribute to a deeper understanding of the connection between music and emotion.`}
    								image1="/imgs/circles/psych/music-listening.webp"
    								image2="/imgs/circles/psych/music-evoked-emotions.jpg"
							/>
                        </TabsContent>
						<TabsContent value="compsci">
                            <CircleSnippet
    								title="Ethical Implications of Quantum Mechanics"
    								description={`Quantum ethics explores the intersection of ethical principles and the emerging field of quantum mechanics, specifically how it could influence moral decision-making. This interdisciplinary area challenges conventional ethical theories by means of suggesting new perspectives on issues like privacy, loose will, and the impact of our actions in a quantum world. We plan to delve deep into this significant and fascinating subject and answer questions that arise in our study.`}
    								image1="/imgs/circles/compsci/new-theory.jpg"
    								image2="/imgs/circles/compsci/quantum-ethics.webp"
							/>
                        </TabsContent>
                        <TabsContent value="econ">
                            <CircleSnippet
    								title="The Impact of COVID-19 on the Housing Market"
    								description={`This project examines the profound effects of the COVID-19 pandemic on the housing market. Beginning anew, our study will investigate shifts in housing demand, pricing trends, and market dynamics influenced by the pandemic. By analyzing data and trends, we aim to provide insights into the evolving landscape of housing in the wake of COVID-19, informing future research directions and policy considerations.`}
    								image1="/imgs/circles/econ/stocks.jpg"
    								image2="/imgs/circles/econ/person-holding-house.jpg"
							/>
                        </TabsContent>
					</div>
				</Tabs>
			</div>

		</div>
	)
}

export default Home