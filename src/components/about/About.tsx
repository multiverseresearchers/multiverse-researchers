import './About.css'
import AboutTab from "./AboutTab";
import filler_img_1 from '/imgs/filler/Rectangle_19.png'
import filler_img_2 from '/imgs/filler/Rectangle_11.png'

const About = () => {

	const members = [
		{
			name: "Shashwat Mishra",
			position: "Founder",
			url: filler_img_2
		},
		{
			name: "@._mili",
			position: "Founder",
			url: filler_img_2
		},
		{
			name: "@ryce.x",
			position: "Founder",
			url: filler_img_2
		},
		{
			name: "@epicprogamer72",
			position: "Recruitment Manager",
			url: filler_img_2
		},
		{
			name: "@ifwfilms",
			position: "Recruitment Manager",
			url: filler_img_2
		},
        {
			name: "@ems1076",
			position: "Social Media Manager",
			url: filler_img_2
		},
		{
			name: "Renn",
			position: "Social Media Manager",
			url: filler_img_2
		},
        {
            name: "@aanxnd",
            position: "Physics Research Manager",
			url: filler_img_2
        },
        {
            name: "@aqua12345_8",
            position: "Physics Research Manager",
			url: filler_img_2
        },
        {
            name: "@woolbit",
            position: "Biology Research Manager",
			url: filler_img_2
        },
        {
            name: "@yankavader",
            position: "Biology Research Manager",
			url: filler_img_2
        },
        {
            name: "@maslalala",
            position: "Environment Science Research Manager",
			url: filler_img_2
        },
        {
			name: "Mithela Mehenaz",
			position: "Psychology Research Manager",
			url: filler_img_2
		},
		// { LOOKING FOR STILL
		// 	name: "Cabinet Name",
		// 	position: "Psychology Research Manager",
		// 	url: filler_img_2
		// },
        {
            name: "Aman Ali Pilehvari",
            position: "Economics Research Manager",
			url: filler_img_2
        },
        {
            name: "@anadelk",
            position: "Economics Research Manager",
			url: filler_img_2
        },
        {
			name: "Bhargav Eranki",
			position: "Website Manager",
			url: filler_img_2
		},
		{
			name: "Revati Tambe",
			position: "Website Manager",
			url: filler_img_2
		},
	]


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
					<h1 className='text-center text-2xl lg:text-3xl font-semibold py-5'>Meet Our Team</h1>
				</div>

				<div className="p-8 grid sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
					{members.map(member => {
						return <AboutTab name={member.name} position={member.position} url={member.url} />
					})
					}
				</div>
			</div>
		</div>
	)
}

export default About