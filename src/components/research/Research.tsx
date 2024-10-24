import './Research.css'

const Research = () => {
	return (
		<div>
			<div className='flex flex-col items-center justify-center'>
				<h1 className='pt-8 text-center text-2xl md:text-3xl lg:text-4xl py-4'><span className="font-semibold">Current Research Groups</span></h1>
				<p className='text-center w-4/5 md:w-1/2'>Each group is led by 1-2 experienced research managers who guide a team of approximately 10 members in conducting original research and writing a paper on a specific topic. The majority of participants are novice researchers, for whom this will be their first research project.</p>
			</div>

			<div className='flex flex-col items-center justify-center'>
				{/* <div className='shadow-xl w-full p-8 m-5 max-w-screen-lg rounded-lg'>
					<p className='font-bold text-xl py-4'>Environment Science Group</p>
					<div className='flex flex-col lg:flex-row w-full gap-4'>
						<img className='rounded-lg object-cover md:w-full md:aspect-[3/1] lg:w-1/5 lg:h-1/5 lg:aspect-square' src="/imgs/circles/envisci/envisci1.png" alt="" />
						<div className='flex flex-col gap-5'>
							<p>Our research group is dedicated to studying how environmental changes—such as rising sea levels, pollution, coastal erosion, and climate shifts—affect the quality of life in marginalized communities. We utilize collaborative research efforts, data analysis, and innovative approaches to address urgent global environmental issues. The group investigates a variety of environmental, social, economic, and cultural factors to enhance understanding and promote sustainable solutions that improve living conditions for those most vulnerable to environmental stress.</p>
							<ul className='list-disc pl-4'>
								<li className='list-none -indent-4'>Investigations:</li>
								<li>Impact of flooding and coastal erosion on community displacement and infrastructure.</li>
								<li>Effects of industrial and urban pollution on public health in marginalized areas.</li>
								<li>Challenges related to access to clean water and the resulting sanitation issues.</li>
								<li>Adaptive strategies for community resilience in response to environmental stressors.</li>
								<li>Economic and social impacts of environmental changes on local communities.</li>
							</ul>
						</div>
					</div>
				</div> */}

				<div className='shadow-xl w-full p-8 m-5 max-w-screen-lg rounded-lg'>
					<p className='font-bold text-xl py-4'>Environment Science Group</p>
					<div className='flex flex-col lg:flex-row w-full gap-4 items-center justify-center'>
						<img className='rounded-lg object-cover md:w-full md:aspect-[3/1] lg:w-[15%] lg:h-[15%] lg:aspect-square' src="/imgs/circles/envisci/envisci1.png" alt="" />
						<p className='h-fit'>Our research group is dedicated to studying how environmental changes—such as rising sea levels, pollution, coastal erosion, and climate shifts—affect the quality of life in marginalized communities. We utilize collaborative research efforts, data analysis, and innovative approaches to address urgent global environmental issues. The group investigates a variety of environmental, social, economic, and cultural factors to enhance understanding and promote sustainable solutions that improve living conditions for those most vulnerable to environmental stress.</p>
					</div>
					<ul className='list-disc pl-4 py-4'>
						<li className='list-none -indent-4'>Investigations:</li>
						<li>Impact of flooding and coastal erosion on community displacement and infrastructure</li>
						<li>Effects of industrial and urban pollution on public health in marginalized areas</li>
						<li>Challenges related to access to clean water and the resulting sanitation issues</li>
						<li>Adaptive strategies for community resilience in response to environmental stressors</li>
						<li>Economic and social impacts of environmental changes on local communities</li>
					</ul>
				</div>

				<div className='shadow-xl w-full p-8 m-5 max-w-screen-lg rounded-lg'>
					<p className='font-bold text-xl py-4'>Astronomy Group</p>
					<div className='flex flex-col lg:flex-row w-full gap-4 items-center justify-center'>
						<img className='rounded-lg object-cover md:w-full md:aspect-[3/1] lg:w-[15%] lg:h-[15%] lg:aspect-square' src="/imgs/circles/astronomy/astronomy1.png" alt="" />
						<p className='h-fit'>The objective of the Astronomy research group is to discover unidentified celestial bodies by observing trends in data to find a potential match in behavior that implies that a celestial body might be orbiting a star. We will achieve this by utilizing the transit method, which involves observing luminosity changes when a planet temporarily blocks a star's light, creating transit curves. This group will also utilise multiple datasets and a Markov-Chain-Monte-Carlo in order to gather verified evidence of celestial bodies orbiting our target stars.</p>
					</div>
					<ul className='list-disc pl-4 py-4'>
						<li className='list-none -indent-4'>Investigations:</li>
						<li>Transit curve analysis using Markov-Chain-Monte-Carlo</li>
						<li>Trend analysis in astronomical datasets as evidence for celestial bodies</li>
						<li>Exoplanet detection using TESS and light curves</li>
						<li>Verifying celestial bodies through orbital mechanics</li>
					</ul>
				</div>

				<div className='shadow-xl w-full p-8 m-5 max-w-screen-lg rounded-lg'>
					<p className='font-bold text-xl py-4'>Physics Group</p>
					<div className='flex flex-col lg:flex-row w-full gap-4 items-center justify-center'>
						<img className='rounded-lg object-cover md:w-full md:aspect-[3/1] lg:w-[15%] lg:h-[15%] lg:aspect-square' src="/imgs/circles/physics/physics1.png" alt="" />
						<p className='h-fit'>The physics research group focuses on advancing our understanding of quantum chromodynamic phenomena through computational analysis of lattice QCD simulations. Examples of goals we aim to achieve include managing measurement field configurations, calculating quantum observations, and analysis of the effectiveness and computational efficiency of these methods. Our goal is to increase the accuracy of lattice QCD calculations and provide deeper insights into the fundamental nature of strong interactions.</p>
					</div>
					{/* <ul className='list-disc pl-4 py-4'>
						<li className='list-none -indent-4'>Investigations:</li>
						<li>Transit curve analysis using Markov-Chain-Monte-Carlo</li>
						<li>Trend analysis in astronomical datasets as evidence for celestial bodies</li>
						<li>Exoplanet detection using TESS and light curves</li>
						<li>Verifying celestial bodies through orbital mechanics</li>
					</ul> */}
				</div>

				<div className='shadow-xl w-full p-8 m-5 max-w-screen-lg rounded-lg'>
					<p className='font-bold text-xl py-4'>Economics Group</p>
					<div className='flex flex-col lg:flex-row w-full gap-4 items-center justify-center'>
						<img className='rounded-lg object-cover md:w-full md:aspect-[3/1] lg:w-[15%] lg:h-[15%] lg:aspect-square' src="/imgs/circles/econ/econ1.png" alt="" />
						<p className='h-fit'>The objective of the Economics Research group is to delve into why and how bank failures occur, namely high-profile cases such as Silicon Valley Bank, WashuM, and Lehman Brothers. Our research aims to understand what leads to a bank's insolvency—when a financial institution is unable to meet its obligations to depositors or creditors—and how such failures disrupt the broader financial system. Bank failures often result in regulatory intervention, like that of the FDIC, and can severely limit lending capabilities, affecting both businesses and individuals. Our work includes a comparative analysis of these three banks, examining their financial statements, stock performance before and after failure, management issues, and the broader consequences of their collapses. We aim to provide a comprehensive overview of the causes, consequences, and proactive measures that can help prevent future bank failures.</p>
					</div>
					<ul className='list-disc pl-4 py-4'>
						<li className='list-none -indent-4'>Investigations:</li>
						<li>Income statement analysis of failed banks</li>
						<li>Stock price trends before and after bank failures</li>
						<li>Management issues analysis in financial institutions</li>
					</ul>
				</div>

				<div className='shadow-xl w-full p-8 m-5 max-w-screen-lg rounded-lg'>
					<p className='font-bold text-xl py-4'>Computer Science Group</p>
					<div className='flex flex-col lg:flex-row w-full gap-4 items-center justify-center'>
						<img className='rounded-lg object-cover md:w-full md:aspect-[3/1] lg:w-[15%] lg:h-[15%] lg:aspect-square' src="/imgs/circles/compsci/compsci1.png" alt="" />
						<p className='h-fit'>The objective of the Astronomy research group is to discover unidentified celestial bodies by observing trends in data to find a potential match in behavior that implies that a celestial body might be orbiting a star. We will achieve this by utilizing the transit method, which involves observing luminosity changes when a planet temporarily blocks a star's light, creating transit curves. This group will also utilise multiple datasets and a Markov-Chain-Monte-Carlo in order to gather verified evidence of celestial bodies orbiting our target stars.</p>
					</div>
					<ul className='list-disc pl-4 py-4'>
						<li className='list-none -indent-4'>Investigations:</li>
						<li>Transit curve analysis using Markov-Chain-Monte-Carlo</li>
						<li>Trend analysis in astronomical datasets as evidence for celestial bodies</li>
						<li>Exoplanet detection using TESS and light curves</li>
						<li>Verifying celestial bodies through orbital mechanics</li>
					</ul>
				</div>

				<div className='shadow-xl w-full p-8 m-5 max-w-screen-lg rounded-lg'>
					<p className='font-bold text-xl py-4'>Political Science Group</p>
					<div className='flex flex-col lg:flex-row w-full gap-4 items-center justify-center'>
						<img className='rounded-lg object-cover md:w-full md:aspect-[3/1] lg:w-[15%] lg:h-[15%] lg:aspect-square' src="/imgs/circles/polisci/polisci1.png" alt="" />
						<p className='h-fit'>Our research group is dedicated to studying how environmental changes—such as rising sea levels, pollution, coastal erosion, and climate shifts—affect the quality of life in marginalized communities. We utilize collaborative research efforts, data analysis, and innovative approaches to address urgent global environmental issues. The group investigates a variety of environmental, social, economic, and cultural factors to enhance understanding and promote sustainable solutions that improve living conditions for those most vulnerable to environmental stress.</p>
					</div>
					<ul className='list-disc pl-4 py-4'>
						<li className='list-none -indent-4'>Investigations:</li>
						<li>Observing the progression in sustainable development in underserved and underdeveloped areas</li>
						<li>Examining what national and international policies are doing to advcoate and/or combat the issue</li>
						<li>Analyzing specific case briefs, policies, and treaties implemented that has positively and/or negatively impacted/furthered sustainable advancement in said developing countries</li>
						<li>Noting the prioritization of governments assisting developing countries within the range of environmental equity and sustainable development</li>
					</ul>
				</div>

				<div className='shadow-xl w-full p-8 m-5 max-w-screen-lg rounded-lg'>
					<p className='font-bold text-xl py-4'>Mathematics Group</p>
					<div className='flex flex-col lg:flex-row w-full gap-4 items-center'>
						<img className='rounded-lg object-cover md:w-full md:aspect-[3/1] lg:w-[15%] lg:h-[15%] lg:aspect-square' src="/imgs/circles/math/math1.png" alt="" />
						<p className='h-fit'>Coming soon...</p>
					</div>
					{/* <ul className='list-disc pl-4 py-4'>
						<li className='list-none -indent-4'>Investigations:</li>
						<li>Transit curve analysis using Markov-Chain-Monte-Carlo</li>
						<li>Trend analysis in astronomical datasets as evidence for celestial bodies</li>
						<li>Exoplanet detection using TESS and light curves</li>
						<li>Verifying celestial bodies through orbital mechanics</li>
					</ul> */}
				</div>
			</div>
		</div>
	)
}

export default Research