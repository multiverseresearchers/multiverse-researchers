import { FaUserGraduate, FaClipboardCheck, FaUsers } from 'react-icons/fa';

const Rewire = () => {
	return (
		<div className="bg-gradient-to-r from-pink-100 to-purple-100 min-h-screen px-8 py-16">
			<div className='p-8 md:w-4/5 m-auto'>
				<div className="text-center">
					<h1 className="font-bold text-4xl md:text-5xl mb-8 text-gray-800">ReWire Program</h1>
					<p className="text-lg md:text-2xl text-pretty mb-12 px-4 md:px-0">
						ReWire is a free research mentorship and project revision service tailored for novice researchers. Gain personalized, one-on-one support from experienced mentors, who will help you refine your current work and improve your research skills.
					</p>


				<div className="flex justify-center gap-8 mb-12">
					<div className="bg-white shadow-lg rounded-lg p-6 w-40 text-center">
						<h3 className="text-3xl font-bold text-pink-500 mb-2">15+</h3>
						<p className="text-gray-700">Experienced Mentors</p>
					</div>
					<div className="bg-white shadow-lg rounded-lg p-6 w-40 text-center">
						<h3 className="text-3xl font-bold text-purple-500 mb-2">1-on-1</h3>
						<p className="text-gray-700">Personalized Support</p>
					</div>
				</div>

					<a
						href="https://daztyxpv.formester.com/f/6e4ea898-ec48-41c9-9570-fbe35facdc17"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="w-fit m-auto text-lg bg-pink-300 hover:bg-pink-900 hover:text-white transition-colors duration-300 rounded-full py-2 px-6 cursor-pointer mb-12">
							Register
						</div>
					</a>
				</div>

				<div className="flex flex-wrap justify-center gap-8 px-8">
					<div className="bg-white shadow-lg rounded-xl p-8 w-full md:w-1/3 flex flex-col justify-between">
						<div className="mb-4 text-center">
							<FaClipboardCheck className="text-5xl text-pink-500 mx-auto mb-4" />
							<h2 className="font-bold text-2xl mb-4">Eligibility</h2>
							<p className="text-gray-700">
								Any member of Multiverse Researchers can apply if they are seeking mentorship for a research project in progress.
							</p>
							<p className="py-4 text-pretty">Priority is given to high school students with limited research experience, but all can apply.</p>
						</div>
					</div>

					<div className="bg-white shadow-lg rounded-xl p-8 w-full md:w-1/3 flex flex-col justify-between">
						<div className="mb-4 text-center">
							<FaUsers className="text-5xl text-purple-500 mx-auto mb-4" />
							<h2 className="font-bold text-2xl mb-4">The ReWire Team</h2>
							<p className="text-gray-700">Our mentors are experienced researchers with published papers and collaborations with renowned institutions.</p>
							<p className="py-4 text-pretty italic">Team consists of:</p>
							<ul className="list-disc list-inside">
								<li>ReWire Program Mentors</li>
								<li>Peer Review Mentors</li>
							</ul>
						</div>
					</div>

					<div className="bg-white shadow-lg rounded-xl p-8 w-full md:w-1/3 flex flex-col justify-between">
						<div className="mb-4 text-center">
							<FaUserGraduate className="text-5xl text-pink-500 mx-auto mb-4" />
							<h2 className="font-bold text-2xl mb-4">Application Details</h2>
							<p className="text-gray-700 pb-4">Decisions are made on a rolling basis.</p>
							<p className='pb-2'>For members seeking mentorship!</p>
							<a href="https://forms.gle/t2X8tduQJTJJWdqF9" target="_blank" rel="noopener noreferrer">
								<div className="bg-pink-500 hover:bg-pink-600 text-white rounded-full py-2 px-6 cursor-pointer">Student Application</div>
							</a>
							<p className='pt-4'>For members with strong research experience and want to help others!</p>
							<a href="https://forms.gle/oj8Nwx5ag2ZcMRoDA" target="_blank" rel="noopener noreferrer" className="block mt-4">
								<div className="bg-purple-500 hover:bg-purple-600 text-white rounded-full py-2 px-6 cursor-pointer">Peer Reviewer Application</div>
							</a>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Rewire;