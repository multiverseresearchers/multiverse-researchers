import './About.css'
import filler_img_1 from '/imgs/filler/Rectangle_19.png'

const About = () => {

	return (
		<div className='flex flex-col items-center'>
			<div className='m-auto md:w-4/5 lg:w-2/3 flex flex-col md:flex-row gap-8 px-8 sm:px-16 md:px-0 py-16'>
				<div className='flex flex-col gap-4 justify-center'>
					<span className="font-semibold text-2xl lg:text-3xl text-center md:text-left">
						Hi there, we're Multiverse Researchers!
					</span>
					<div className="text-md lg:text-lg text-center md:text-left">
						We strive to induce passion in the field of research and encourage
						students to pursue it further in life.
					</div>
					<div className="text-md lg:text-l text-center md:text-left">
						Mission Statement: Through our love for discovery and our commitment to hard work,
						we desire to unravel the various complexities and diversities of fields ranging
						from physics to economics.
					</div>
				</div>
				<img className='hidden md:block' src={filler_img_1} alt="Filler Img from Figma" />
			</div>

			<div className="flex flex-col items-center justify-center">
				<div className='flex flex-col items-center'>
					<h1 className='text-center text-2xl lg:text-3xl font-semibold py-5'>Our Team</h1>
				</div>

				<div className='text-center md:w-[80vw]'>
					<div className='flex flex-col md:w-1/2 m-auto justify-center md:flex-row gap-8 py-8'>
						<div className='md:w-1/3'>
							<p className='font-bold'>Shashwat Mishra</p>
							<p>Founder</p>
						</div>
						<div className='md:w-1/3'>
							<p className='font-bold'>Beatrice Jiang</p>
							<p>Founder</p>
						</div>
						<div className='md:w-1/3'>
							<p className='font-bold'>Mili Shah</p>
							<p>Founder</p>
						</div>
					</div>
					<hr className='md:w-2/3 m-auto' />

					<div className='flex flex-col md:w-1/2 m-auto justify-center md:flex-row gap-8 py-8'>
						<div className='md:w-1/3'>
							<p className='font-bold'>Ellen Guan</p>
							<p>Lead Publicist</p>
						</div>
						<div className='md:w-1/3'>
							<p className='font-bold'>Yeeun Park</p>
							<p>Publicist</p>
						</div>
						<div className='md:w-1/3'>
							<p className='font-bold'>Akshith Muthukumar</p>
							<p>Publicist</p>
						</div>
					</div>
					<div className='flex flex-col md:w-1/2 m-auto justify-center md:flex-row gap-8 py-8'>
						<div className='md:w-1/3'>
							<p className='font-bold'>Sadia Rahman</p>
							<p>Publicist</p>
						</div>
						<div className='md:w-1/3'>
							<p className='font-bold'>Alexus Palileo</p>
							<p>Publicist</p>
						</div>
						<div className='md:w-1/3'>
							<p className='font-bold'>Taskia Islam</p>
							<p>Publicist</p>
						</div>
					</div>
					<hr className='md:w-2/3 m-auto' />

					<div className='flex flex-col md:w-1/2 m-auto justify-center md:flex-row gap-8 py-8'>
						<div className='md:w-1/2'>
							<p className='font-bold'>Revati Tambe</p>
							<p>Web Developer</p>
						</div>
						<div className='md:w-1/2'>
							<p className='font-bold'>Bhargav Eranki</p>
							<p>Web Developer</p>
						</div>
					</div>
					<hr className='md:w-2/3 m-auto' />

					<div className='flex flex-col md:w-1/2 m-auto justify-center md:flex-row gap-8 py-8'>
						<div className='md:w-1/2'>
							<p className='font-bold'>Rowan Wheaton</p>
							<p>Lead Research Manager</p>
						</div>
						<div className='md:w-1/2'>
							<p className='font-bold'>Alyssa Gin</p>
							<p>Lead Research Manager</p>
						</div>
					</div>
					<hr className='md:w-2/3 m-auto' />

					{/* <div className='flex flex-col md:w-1/2 m-auto justify-center md:flex-row gap-8 py-8'>
						<div className='md:w-1/3'>
							<p className='font-bold'>Nikhil Godbole</p>
							<p>Economics Research Manager</p>
						</div>
					</div>

					<div className='flex flex-col md:w-1/2 m-auto justify-center md:flex-row gap-8 py-8'>
						<div className='md:w-1/3'>
							<p className='font-bold'>Zijun He</p>
							<p>Astronomy Research Manager</p>
						</div>
					</div> */}
					<div className='flex flex-col md:w-1/2 m-auto justify-center md:flex-row gap-8 py-8'>
						<div className='md:w-1/2'>
							<p className='font-bold'>Shashwat Mishra</p>
							<p>Environmental Science Research Manager</p>
						</div>
						<div className='md:w-1/2'>
							<p className='font-bold'>Aneeqa Parpia</p>
							<p>Environmental Science Research Manager</p>
						</div>
					</div>

					<div className='flex flex-col md:w-1/2 m-auto justify-center md:flex-row gap-8 py-8'>
						<div className='md:w-1/2'>
							<p className='font-bold'>Ilinca Sasu</p>
							<p>Biology Research Manager</p>
						</div>
						<div className='md:w-1/2'>
							<p className='font-bold'>Elmubarak Malik</p>
							<p>Biology Research Manager</p>
						</div>
					</div>

					<div className='flex flex-col md:w-1/2 m-auto justify-center md:flex-row gap-8 py-8'>
						<div className='md:w-1/2'>
							<p className='font-bold'>Mohammed Hafiz Ullah</p>
							<p>Computer Science Research Manager</p>
						</div>
						<div className='md:w-1/2'>
							<p className='font-bold'>Hritvik Arora</p>
							<p>Computer Science Research Manager</p>
						</div>
					</div>

					<div className='flex flex-col md:w-1/2 m-auto justify-center md:flex-row gap-8 py-8'>
						<div className='md:w-1/2'>
							<p className='font-bold'>Akshith Muthukumar</p>
							<p>Mathematics Research Manager</p>
						</div>
						<div className='md:w-1/2'>
							<p className='font-bold'>Eric Nathan Stucky</p>
							<p>Mathematics Research Manager</p>
						</div>
					</div>

					<div className='flex flex-col md:w-1/2 m-auto justify-center md:flex-row gap-8 py-8'>
						<div className='md:w-1/3'>
							<p className='font-bold'>Anand Ajith</p>
							<p>Physics Research Manager</p>
						</div>
						<div className='md:w-1/3'>
							<p className='font-bold'>Nure Zannat</p>
							<p>Physics Research Manager</p>
						</div>
						<div className='md:w-1/3'>
							<p className='font-bold'>Ojaswit Singh</p>
							<p>Physics Research Manager</p>
						</div>
					</div>

					<div className='flex flex-col md:w-1/2 m-auto justify-center md:flex-row gap-8 py-8'>
						<div className='md:w-1/3'>
							<p className='font-bold'>Hadizah Coulibaly</p>
							<p>Astronomy Research Manager</p>
						</div>
						<div className='md:w-1/3'>
							<p className='font-bold'>Nikhil Godbole</p>
							<p>Economics Research Manager</p>
						</div>
						<div className='md:w-1/3'>
							<p className='font-bold'>Yeeun Park</p>
							<p>Political Science Research Manager</p>
						</div>
					</div>

				</div>
				{/* <div className="p-8 w-fit">

					<div className='flex justify-evenly flex-col md:flex-row md:gap-8 md:py-4'>
						<AboutTab name="Nikhil Godbole" position="Economics Research Manager" url='/' />
						<AboutTab name="--" position="Economics Research Manager" url='/' />
					</div>
					<div className='flex justify-evenly flex-col md:flex-row md:gap-8 md:py-4'>
						<AboutTab name="Krishiv Potluri" position="Biology Research Manager" url='/' />
						<AboutTab name="Arnav Reddy" position="Biology Research Manager" url='/' />
						<AboutTab name="Elmubarak Malik" position="Biology Research Manager" url='/' />
					</div>
				</div> */}
			</div>
		</div>
	)
}

export default About