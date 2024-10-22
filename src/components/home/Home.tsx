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
				<div className='flex flex-col items-center justify-center mt-8'>
					<h1 className='text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl m-5'>The Future of Research<br />Starts <span className='font-semibold'>Here</span></h1>
					<p className='text-center w-2/3'>We are a student led organization that empowers high schoolers to engage in innovative research.</p>
				</div>
				<svg className='animate-bounce p-0 m-0' xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="#000000" /></svg>
                <a href="https://daztyxpv.formester.com/f/6e4ea898-ec48-41c9-9570-fbe35facdc17" target="_blank"><div className="text-lg bg-pink-300 hover:bg-pink-900 hover:text-white transition-colors duration-300 rounded-full py-2 px-6 cursor-pointer my-4">JOIN US</div></a>
            </div>
			<div className="flex flex-col w-full items-center">
				<Tabs defaultValue="bio" className="w-2/3 p-1">
					<TabsList className="flex flex-row justify-evenly h-fit bg-white shadow-lg border border-gray-100 rounded-lg mb-12">
						<TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="physics">Physics Group</TabsTrigger>
						<TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="bio">Biology Group</TabsTrigger>
						<TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="envisci">Environment Science Group</TabsTrigger>
						<TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="compsci">Computer Science Group</TabsTrigger>
                        <TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="econ">Economics Group</TabsTrigger>
                        <TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="astronomy">Astronomy Group</TabsTrigger>
                        <TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="polisci">Political Science Group</TabsTrigger>
                        <TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="math">Mathematics Group</TabsTrigger>
					</TabsList>

                    {/* WAITING FOR MATH, PHYSICS, AND CS RESPONSES */}
					<div className="p-8 bg-white border border-gray-100 rounded-lg shadow-xl">
						<TabsContent value="physics">
							<CircleSnippet
								title="Exploring State-of-the-Art Monte Carlo Methods in Lattice QCD Simulations"
								description={`This project analyzes the latest Monte Carlo methods employed in lattice Quantum Chromodynamics (QCD) simulations. It highlights how these advanced techniques enhance our comprehension of Quantum Chromodynamics phenomena, providing deeper insights into the fundamental forces governing particle interactions.`}
								image1=""
								image2=""
							/>
						</TabsContent>
						<TabsContent value="bio">
                            <CircleSnippet
    								title="Environmental Toxins and Parkinson’s Disease Progression"
    								description={`In the Biology Group, we will study and delve into research in topics ranging from molecular biology to ecology as well as genetics and biotechnology. Those who participate in this group will gather experience in biology and learn more about the biological world and why we are alive. We will utilize important skills such as data analysis and attention to detail, both highly important skills when analyzing biological functions. The goal of this group is for members to gain a more well-rounded understanding of biology research as well as a newfound passion for the life sciences! Here, we strive to learn more about readily available information and potentially learn new information that could help fuel biology research in the future.`}
    								image1=""
    								image2=""
							/>
                        </TabsContent>
						<TabsContent value="envisci">
                            <CircleSnippet
    								title="Impact of Climate Change on Marginalized Communities"
    								description={`Our research group is dedicated to studying how environmental changes—such as rising sea levels, pollution, coastal erosion, and climate shifts—affect the quality of life in marginalized communities. We utilize collaborative research efforts, data analysis, and innovative approaches to address urgent global environmental issues. The group investigates a variety of environmental, social, economic, and cultural factors to enhance understanding and promote sustainable solutions that improve living conditions for those most vulnerable to environmental stress.`}
    								image1=""
    								image2=""
							/>
                        </TabsContent>
						<TabsContent value="compsci">
                            <CircleSnippet
    								title="Ethical Implications of Quantum Mechanics"
    								description={`Quantum ethics explores the intersection of ethical principles and the emerging field of quantum mechanics, specifically how it could influence moral decision-making. This interdisciplinary area challenges conventional ethical theories by means of suggesting new perspectives on issues like privacy, loose will, and the impact of our actions in a quantum world. We plan to delve deep into this significant and fascinating subject and answer questions that arise in our study.`}
    								image1=""
    								image2=""
							/>
                        </TabsContent>
                        <TabsContent value="econ">
                            <CircleSnippet
    								title="The Impact of COVID-19 on the Housing Market"
    								description={`The objective of the Economics Research group is to delve into why and how bank failures occur, namely the infamous Silicon Valley Bank, WashuM, and Lehman Brothers. We utilize collaborative research efforts, data analysis, and innovative approaches to address problems with banks and how we can overcome such disasters. We plan on analyzing each of the 3 banks and give a comparitive analysis, overview, consequences, and proactive measures to avoid future failures. We plan on using and analyzing Income Statements, Balance sheets, stock prices before and after failure, management issue analyzation, etc.`}
    								image1=""
    								image2=""
							/>
                        </TabsContent>
                        <TabsContent value="astronomy">
                            <CircleSnippet
    								title="The Impact of COVID-19 on the Housing Market"
    								description={`The objective of the Astronomy research group is to discover unidetified celestial bodies by observing trends in data to find a potential match to behavior the implies that a celestial body might be orbiting a star. We will do this by using what is known as the transit method. The transit method is used to find an exoplanet orbiting a distant star, this method includes looking for a transit curve which is when the planet passes in between in us and the star causing a drop in luminoisty. This group will also utilise multiple datasets an algrorithm and collaborative research in order to attain this objective. By working together and analyizing as much data as we can this group's goal is to find fact checked evidence that our target stars have celestial bodies orbiting them.`}
    								image1=""
    								image2=""
							/>
                        </TabsContent>
                        <TabsContent value="polisci">
                            <CircleSnippet
    								title="The Impact of COVID-19 on the Housing Market"
    								description={`The Political Science Research Group is dedicated to analyzing the legislation and policymaking in the international viewpoint, highlighting diverse perspectives through global affairs and international government interactions in order to specifically examine the effects it has on the overall quality of the world. By coordinating with fellow research members over virtual meetings and undergoing a comprehensive analysis review on our presented topic, we strive to understand international government operations.`}
    								image1=""
    								image2=""
							/>
                        </TabsContent>
                        <TabsContent value="math">
                            <CircleSnippet
    								title="The Impact of COVID-19 on the Housing Market"
    								description={`This project examines the profound effects of the COVID-19 pandemic on the housing market. Beginning anew, our study will investigate shifts in housing demand, pricing trends, and market dynamics influenced by the pandemic. By analyzing data and trends, we aim to provide insights into the evolving landscape of housing in the wake of COVID-19, informing future research directions and policy considerations.`}
    								image1=""
    								image2=""
							/>
                        </TabsContent>
					</div>
				</Tabs>
			</div>

		</div>
	)
}

export default Home