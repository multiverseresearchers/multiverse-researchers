import './About.css'
import lab_image from '/imgs/filler/lab.jpg'

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
				<img className='hidden md:block w-1/2 object-cover rounded-xl aspect-[16/11]' src={lab_image} alt="Scientific Laboratory" />
			</div>

			<div className="flex flex-col items-center justify-center">
				<div className='flex flex-col items-center'>
					<h1 className='text-center text-2xl lg:text-3xl font-semibold py-5'>Our Team</h1>
				</div>

				<div className='text-center md:w-[80vw]'>
					<div className='flex flex-col md:w-7/12 m-auto justify-center md:flex-row gap-8 py-4'>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Shashwat Mishra</p>
							<p>Founder</p>
							<p>Chief Director</p>
						</div>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Beatrice Jiang</p>
							<p>Founder</p>
							<p>Director of Research</p>
						</div>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Mili Shah</p>
							<p>Founder</p>
							<p>Director of Operations</p>
						</div>
					</div>
                    <hr className='md:w-2/3 m-auto' />

					<div className='flex flex-col md:w-7/12 m-auto justify-center md:flex-row gap-8 py-4'>
                        <div className='md:w-1/6'></div>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Revati Tambe</p>
							<p>Web Developer</p>
						</div>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Bhargav Eranki</p>
							<p>Web Developer</p>
						</div>
                        <div className='md:w-1/6'></div>
					</div>
                    <hr className='md:w-2/3 m-auto' />

					<div className='flex flex-col md:w-7/12 m-auto justify-center md:flex-row gap-8 py-4'>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Shashwat Mishra</p>
							<p>Environment Science Research Manager</p>
						</div>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Elmubarak Malik</p>
							<p>Biology Research Manager</p>
						</div>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Yeeun Park</p>
							<p>Political Science Research Manager</p>
						</div>
					</div>


					<div className='flex flex-col md:w-7/12 m-auto justify-center md:flex-row gap-8 py-4'>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Akshith Muthukumar</p>
							<p>Mathematics Research Manager</p>
						</div>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Mohammed Hafiz Ullah</p>
							<p>Computer Science Research Manager</p>
						</div>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Hritvik Arora</p>
							<p>Computer Science Research Manager</p>
						</div>
					</div>

					<div className='flex flex-col md:w-7/12 m-auto justify-center md:flex-row gap-8 py-4'>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Prabhjot Singh</p>
							<p>Aerospace Research Manager</p>
						</div>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Hadizah Coulibaly</p>
							<p>Astronomy Research Manager</p>
						</div>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Ojaswit Singh</p>
							<p>Physics Research Manager</p>
						</div>
					</div>
                    <hr className='md:w-2/3 m-auto' />


					<div className='flex flex-col md:w-7/12 m-auto justify-center md:flex-row gap-8 py-4'>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Alexus Palileo</p>
							<p>Social Media Manager</p>
						</div>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Taskia Islam</p>
							<p>Social Media Manager</p>
						</div>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Aaryav Seth</p>
							<p>Social Media Manager</p>
						</div>
					</div>

					<div className='flex flex-col md:w-7/12 m-auto justify-center md:flex-row gap-8 py-4'>
						<div className='md:w-1/6'></div>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Yeeun Park</p>
							<p>Social Media Manager</p>
						</div>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Akshith Muthukumar</p>
							<p>Social Media Manager</p>
						</div>
						<div className='md:w-1/6'></div>
					</div>
					<hr className='md:w-2/3 m-auto' />


					<div className='flex flex-col md:w-7/12 m-auto justify-center md:flex-row gap-8 py-4'>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Anthony Zhang</p>
							<p>Workshops Manager</p>
						</div>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Grey Nakhwa</p>
							<p>Workshops Manager</p>
						</div>
						<div className='md:w-1/3 aspect-[3/4] flex flex-col justify-center rounded-lg p-4 border-2'>
							<p className='font-bold'>Isabella Mercado</p>
							<p>Workshops Manager</p>
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