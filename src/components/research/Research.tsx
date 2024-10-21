import './Research.css'

const Research = () => {
	return (
		<div>
			<div className='flex flex-col items-center justify-center'>
				<h1 className='pt-8 text-center text-2xl md:text-3xl lg:text-4xl py-4'><span className="font-semibold">Current Research Projects</span></h1>
				<p>Take a look around to explore our current endeavors!</p>
			</div>

			<div className='flex flex-col items-center justify-center'>
				<div className='shadow-xl w-full p-8 m-5 max-w-screen-lg rounded-lg'>
					<div>
						<p className='font-bold text-xl py-4'>Biology Group</p>
						<p>In the Biology Group, we will study and delve into research in topics ranging from molecular biology to ecology as well as genetics and biotechnology. Those who participate in this group will gather experience in biology and learn more about the biological world and why we are alive. We will utilize important skills such as data analysis and attention to detail, both highly important skills when analyzing biological functions. The goal of this group is for members to gain a more well-rounded understanding of biology research as well as a newfound passion for the life sciences! Here, we strive to learn more about readily available information and potentially learn new information that could help fuel biology research in the future. </p>
					</div>
					<img src="" alt="" />
				</div>
			</div>
		</div>
	)
}

export default Research