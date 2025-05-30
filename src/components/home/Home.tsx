import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../@/components/ui/tabs"
import CSS from "csstype";

import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {

	const backgroundWrapping: CSS.Properties = {
		'backgroundRepeat': 'no-repeat',
		'backgroundSize': 'cover'
	}

	return (
        <>
		<div className="bg-[url('/imgs/filler/Background.png')] pb-32" style={backgroundWrapping}>
			<div className='flex flex-col w-full h-[84vh] items-center justify-evenly'>
				<div className='flex flex-col items-center justify-center mt-8'>
					<h1 className='text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl m-5'>The Future of Research<br />Starts <span className='font-semibold'>Here</span></h1>
					<p className='text-center w-2/3'>We are a student led organization that empowers high schoolers to engage in innovative research.</p>
				</div>
				<svg className='animate-bounce p-0 m-0' xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="#000000" /></svg>
				<a href="https://daztyxpv.formester.com/f/6e4ea898-ec48-41c9-9570-fbe35facdc17" target="_blank"><div className="text-xl bg-pink-300 hover:bg-pink-900 hover:text-white transition-colors duration-300 rounded-full py-4 px-8 cursor-pointer my-4">JOIN US</div></a>
			</div>

			<div className="mb-32">
				<h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-center py-8 text-gray-800'>
					Our Accomplishments
				</h2>

				<div className="m-auto w-4/5 flex flex-col md:flex-row justify-evenly gap-4 lg:w-2/3">
					<div className="md:w-1/4 text-purple-600 hover:text-pink-600 transition-all bg-white shadow-lg rounded-lg px-6 py-8 flex flex-col justify-between hover:shadow-2xl duration-300">
						<p className="text-xl font-semibold text-center text-gray-800">Members</p>
						<p className="text-3xl font-bold text-center py-4">1k+</p>
					</div>

					<div className="md:w-1/4 text-purple-600 hover:text-pink-600 transition-all bg-white shadow-lg rounded-lg px-6 py-8 flex flex-col justify-between hover:shadow-2xl duration-300">
						<p className="text-xl font-semibold text-center text-gray-800">Research Groups</p>
						<p className="text-3xl font-bold text-center text-purple-600 py-4">8</p>
					</div>

					<div className="md:w-1/4 text-purple-600 hover:text-pink-600 transition-all bg-white shadow-lg rounded-lg px-6 py-8 flex flex-col justify-between hover:shadow-2xl duration-300">
						<p className="text-xl font-semibold text-center text-gray-800">Countries Reached</p>
						<p className="text-3xl font-bold text-center text-purple-600 py-4">40+</p>
					</div>
				</div>
			</div>

			<div className="hidden md:flex flex-col w-full items-center">
				
				<h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-center py-8 text-gray-800'>
					Research Groups
				</h2>

				<Tabs defaultValue="physics" className="w-2/3 p-1">
					<TabsList className="flex flex-row justify-evenly h-fit bg-white shadow-lg border border-gray-100 rounded-lg mb-12">
						<TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="envisci">Environmental Science Group</TabsTrigger>
						<TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="astronomy">Astronomy Group</TabsTrigger>
						<TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="physics">Physics Group</TabsTrigger>
						<TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="econ">Economics Group</TabsTrigger>
						<TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="compsci">Computer Science Group</TabsTrigger>
						<TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="polisci">Political Science Group</TabsTrigger>
						<TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="bio">Biology Group</TabsTrigger>
						{/* <TabsTrigger className="text-xs hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-500 focus:font-semibold p-2" value="math">Mathematics Group</TabsTrigger> */}
					</TabsList>

					<div className="p-8 bg-white border border-gray-100 rounded-lg shadow-xl">
						<TabsContent value="bio">
							<div className="circle-snippet m-auto w-4/5 lg:w-2/3">
								<h2 className='text-xl sm:text-2xl lg:text-4xl font-medium text-center py-8'>Biology Group</h2>
								<div className='text-center'>The Biology Research Group will cover multiple areas of research including biotechnology in genetics, bioinformatics, neuroscience and how genes play a role in neurodegenerative diseases, though, our primary focus is using bioinformatics such as CRISPR/Cas 9 gene editing to target diseases caused by genetic mutations. The group will analyze biological and technological effects of utilizing biotechnology and gene editing therapy in medicine to understand how these can be improved upon or utilized in less-known diseases. </div>
								<p className="py-4 text-center">Led by Ilinca Sasu and Elmubarak Malik</p>
								<div className='py-8 flex flex-col md:flex-row md:justify-between gap-8'>
									<img className='md:w-1/2 object-cover rounded-md' src={"/imgs/circles/bio/bio1.png"} alt="Image 1" />
									<img className='md:w-1/2 object-cover rounded-md' src={"/imgs/circles/bio/bio2.png"} alt="Image 2" />
								</div>
							</div>
						</TabsContent>
						<TabsContent value="envisci">
							<div className="circle-snippet m-auto w-4/5 lg:w-2/3">
								<h2 className='text-xl sm:text-2xl lg:text-4xl font-medium text-center py-8'>Environmental Science Group</h2>
								<div className='text-center'>Our research group is dedicated to studying how environmental changes—such as rising sea levels, pollution, coastal erosion, and climate shifts—affect the quality of life in marginalized communities. We utilize collaborative research efforts, data analysis, and innovative approaches to address urgent global environmental issues. The group investigates a variety of environmental, social, economic, and cultural factors to enhance understanding and promote sustainable solutions that improve living conditions for those most vulnerable to environmental stress.</div>
								<p className="py-4 text-center">Led by Shashwat Mishra and Aneeqa Parpia</p>
								<div className='py-8 flex flex-col md:flex-row md:justify-between gap-8'>
									<img className='md:w-1/2 object-cover rounded-md' src={"/imgs/circles/envisci/envisci1.png"} alt="Image 1" />
									<img className='md:w-1/2 object-cover rounded-md' src={"/imgs/circles/envisci/envisci2.png"} alt="Image 2" />
								</div>
							</div>
						</TabsContent>
						<TabsContent value="astronomy">
							<div className="circle-snippet m-auto w-4/5 lg:w-2/3">
								<h2 className='text-xl sm:text-2xl lg:text-4xl font-medium text-center py-8'>Astronomy Group</h2>
								<div className='text-center'>The objective of the Astronomy research group is to discover unidetified celestial bodies by observing trends in data to find a potential match to behavior the implies that a celestial body might be orbiting a star. We will do this by using what is known as the transit method. The transit method is used to find an exoplanet orbiting a distant star, this method includes looking for a transit curve which is when the planet passes in between in us and the star causing a drop in luminoisty. This group will also utilise multiple datasets an algrorithm and collaborative research in order to attain this objective. By working together and analyizing as much data as we can this group's goal is to find fact checked evidence that our target stars have celestial bodies orbiting them.</div>
								<p className="py-4 text-center">Led by Hadizah Coulibaly</p>
								<div className='py-8 flex flex-col md:flex-row md:justify-between gap-8'>
									<img className='md:w-1/2 object-cover rounded-md' src={"/imgs/circles/astronomy/astronomy1.png"} alt="Image 1" />
									<img className='md:w-1/2 object-cover rounded-md' src={"/imgs/circles/astronomy/astronomy2.png"} alt="Image 2" />
								</div>
							</div>
						</TabsContent>
						<TabsContent value="physics">
							<div className="circle-snippet m-auto w-4/5 lg:w-2/3">
								<h2 className='text-xl sm:text-2xl lg:text-4xl font-medium text-center py-8'>Physics Group</h2>
								<div className='text-center'>The physics research group focuses on advancing our understanding of quantum chromodynamic phenomena through computational analysis of lattice QCD simulations. Examples of goals we aim to achieve include managing measurement field configurations, calculating quantum observations, and analysis of the effectiveness and computational efficiency of these methods. Our goal is to increase the accuracy of lattice QCD calculations and provide deeper insights into the fundamental nature of strong interactions.</div>
								<p className="py-4 text-center">Led by Anand Ajith, Ojaswit Singh, and Nure Zannat</p>
								<div className='py-8 flex flex-col md:flex-row md:justify-between gap-8'>
									<img className='md:w-1/2 object-cover rounded-md' src={"/imgs/circles/physics/physics1.png"} alt="Image 1" />
									<img className='md:w-1/2 object-cover rounded-md' src={"/imgs/circles/physics/physics2.png"} alt="Image 2" />
								</div>
							</div>
						</TabsContent>
						<TabsContent value="econ">
							<div className="circle-snippet m-auto w-4/5 lg:w-2/3">
								<h2 className='text-xl sm:text-2xl lg:text-4xl font-medium text-center py-8'>Economics Group</h2>
								<div className='text-center'>The objective of the Economics Research group is to delve into why and how bank failures occur, namely the infamous Silicon Valley Bank, WashuM, and Lehman Brothers. We utilize collaborative research efforts, data analysis, and innovative approaches to address problems with banks and how we can overcome such disasters. We plan on analyzing each of the 3 banks and give a comparitive analysis, overview, consequences, and proactive measures to avoid future failures. We plan on using and analyzing Income Statements, Balance sheets, stock prices before and after failure, management issue analyzation, etc.</div>
								<p className="py-4 text-center">Led by Nikhil G and Olivia X</p>
								<div className='py-8 flex flex-col md:flex-row md:justify-between gap-8'>
									<img className='md:w-1/2 object-cover rounded-md' src={"/imgs/circles/econ/econ1.png"} alt="Image 1" />
									<img className='md:w-1/2 object-cover rounded-md' src={"/imgs/circles/econ/econ2.png"} alt="Image 2" />
								</div>
							</div>
						</TabsContent>
						<TabsContent value="compsci">
							<div className="circle-snippet m-auto w-4/5 lg:w-2/3">
								<h2 className='text-xl sm:text-2xl lg:text-4xl font-medium text-center py-8'>Computer Science Group</h2>
								<div className='text-center'>Our Computer Science Research Group is committed to exploring new horizons in technology through cutting-edge research in artificial intelligence, machine learning, data science, distributed systems, cybersecurity, and human-computer interaction. We are dedicated to developing innovative solutions to the complex computational problems that shape the future of technology. Our interdisciplinary team of researchers and students collaborates across these areas to drive impactful technological advancements while emphasizing the real-world application of our work. A major focus of our research lies in artificial intelligence and machine learning, where we work to develop state-of-the-art models that can transform industries ranging from healthcare to finance. In data science, we aim to improve the way large-scale data is processed and analyzed, driving more effective decision-making. Our cybersecurity efforts prioritize the development of advanced techniques for secure communication and data privacy, addressing the growing threats posed by modern cyberattacks. We are also committed to advancing research in distributed systems and cloud computing, where we work to improve system scalability, reliability, and efficiency. Furthermore, our research in human-computer interaction seeks to create technologies that are intuitive, accessible, and centered around users' needs.</div>
								<p className="py-4 text-center">Led by Mohammed Hafiz Ullah and Hritvik Arora</p>
								<div className='py-8 flex flex-col md:flex-row md:justify-between gap-8'>
									<img className='md:w-1/2 object-cover rounded-md' src={"/imgs/circles/compsci/compsci1.png"} alt="Image 1" />
									<img className='md:w-1/2 object-cover rounded-md' src={"/imgs/circles/compsci/compsci2.png"} alt="Image 2" />
								</div>
							</div>
						</TabsContent>
						<TabsContent value="polisci">
							<div className="circle-snippet m-auto w-4/5 lg:w-2/3">
								<h2 className='text-xl sm:text-2xl lg:text-4xl font-medium text-center py-8'>Political Science Group</h2>
								<div className='text-center'>The Political Science Research Group is dedicated to analyzing the legislation and policymaking in the international viewpoint, highlighting diverse perspectives through global affairs and international government interactions in order to specifically examine the effects it has on the overall quality of the world. Through comprehensive analysis of specific legislative actions and policies, we seek to uncover patterns, evaluate outcomes, and assess the long-term effects on global communities. Our work emphasizes the importance of international cooperation and the role of government decisions in addressing complex global challenges.</div>
								<p className="py-4 text-center">Led by Yeeun Park</p>
								<div className='py-8 flex flex-col md:flex-row md:justify-between gap-8'>
									<img className='md:w-1/2 object-cover rounded-md' src={"/imgs/circles/polisci/polisci1.png"} alt="Image 1" />
									<img className='md:w-1/2 object-cover rounded-md' src={"/imgs/circles/polisci/polisci2.png"} alt="Image 2" />
								</div>
							</div>
						</TabsContent>
						<TabsContent value="math">
							<div className="circle-snippet m-auto w-4/5 lg:w-2/3">
								<h2 className='text-xl sm:text-2xl lg:text-4xl font-medium text-center py-8'>Mathematics Group</h2>
								<div className='text-center'>Coming soon...</div>
								<p className="py-4 text-center">Led by Akshith Muthukumar and Eric Nathan Stucky</p>
								<div className='py-8 flex flex-col md:flex-row md:justify-between gap-8'>
									<img className='md:w-1/2 object-cover rounded-md' src={"/imgs/circles/math/math1.png"} alt="Image 1" />
									<img className='md:w-1/2 object-cover rounded-md' src={"/imgs/circles/math/math2.png"} alt="Image 2" />
								</div>

								<div className="py-8 text-slate-500 text-xs text-center">
									<a className=" text-sky-500 hover:underline" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
										Both images are held under CC BY-NC-ND (Creative Commons Attribution Non-Commercial No Derivatives 4.0 International licence)
									</a>

									<p className="italic">
										The first image (grids) is licensed by:
										Igor Araujo, Bryce Frederickson, Robert A. Krueger, Bernard Lidický, Tyrrell B. McAllister, Florian Pfender, Sam Spiro, and Eric Nathan Stucky.
										The second image (handwriting) is licensed by:
										Eric Nathan Stucky
									</p>
								</div>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>

			<div className="mt-32">
				<h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-center py-8 text-gray-800'>Our Services</h2>

				<div className="m-auto w-4/5 flex flex-col md:flex-row justify-evenly gap-4 lg:w-2/3">
					<div className="md:w-1/4 bg-white shadow-lg rounded-lg px-6 py-8 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
						<p className="text-xl font-semibold text-center text-gray-800">ReWire Program</p><br/>
						<img className="w-1/2 h-20 object-contain m-auto" src="/imgs/services/rewire.webp" alt="" />
						<p className="text-sm text-center py-4 text-gray-600 flex-grow">ReWire offers free, personalized research mentorship and project feedback for novice researchers, helping refine current projects and strengthen fundamental research skills for future success.</p>
						<Link to={"/rewire"}>
							<div className="w-fit text-center m-auto text-lg bg-pink-400 hover:bg-pink-700 text-white transition-colors duration-300 rounded-full py-3 px-8 cursor-pointer">
								Learn More
							</div>
						</Link>
					</div>

					<div className="md:w-1/4 bg-white shadow-lg rounded-lg px-6 py-8 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
						<p className="text-xl font-semibold text-center text-gray-800">Workshops</p><br/>
						<img className="w-1/2 h-20 object-contain m-auto" src="/imgs/services/workshops.webp" alt="" />
						<p className="text-sm text-center py-4 text-gray-600 flex-grow">Through various initiatives, Multiverse Researchers have run multiple workshops to platform and educate members on research and educational aspects. Below is a catalog of our recent efforts.</p>
						<Link to={"/workshops"}>
							<div className="w-fit text-center m-auto text-lg bg-pink-400 hover:bg-pink-700 text-white transition-colors duration-300 rounded-full py-3 px-8 cursor-pointer">
								Learn More
							</div>
						</Link>
					</div>

					<div className="md:w-1/4 bg-white shadow-lg rounded-lg px-6 py-8 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
						<p className="text-xl pb-2 font-semibold text-center text-gray-800">Summer Program Help</p>
						<img className="w-1/2 h-20 object-contain m-auto" src="/imgs/services/summer.webp" alt="" />
						<p className="text-sm text-center py-4 text-gray-600 flex-grow">Get free one-on-one guidance on your summer program applications. We&apos;ll provide program recommendations and assist you with your application process.</p>
						<Link to={"/summer-assistance"}>
							<div className="w-fit text-center m-auto text-lg bg-pink-400 hover:bg-pink-700 text-white transition-colors duration-300 rounded-full py-3 px-8 cursor-pointer">
								Learn More
							</div>
						</Link>
					</div>

					<div className="md:w-1/4 bg-white shadow-lg rounded-lg px-6 py-8 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
						<p className="text-xl pb-2 font-semibold text-center text-gray-800">Cold Email Assistance</p>
						<img className="w-1/2 h-20 object-contain m-auto" src="/imgs/services/cold-email.webp" alt="" />
						<p className="text-sm text-center py-4 text-gray-600 flex-grow">Get free one-on-one guidance in writing and sending cold emails to professors for internship and outreach opportunities.</p>
						<Link to={"/cold-email-assistance"}>
							<div className="w-fit m-auto text-center text-lg bg-pink-400 hover:bg-pink-700 text-white transition-colors duration-300 rounded-full py-3 px-8 cursor-pointer">
								Learn More
							</div>
						</Link>
					</div>
				</div>
			</div>

		</div>
        </>
	)
}

export default Home