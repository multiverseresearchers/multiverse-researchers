import { useLayoutEffect } from 'react';
import { FaSun, FaFileAlt, FaGlobeAmericas } from 'react-icons/fa';

const Summerassistance = () => {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div className="bg-gradient-to-r from-pink-100 to-purple-100 min-h-screen px-8 py-16">
			<div className="p-8 md:w-4/5 m-auto">
				<div className="text-center">
					<h1 className="font-bold text-4xl md:text-5xl mb-8 text-gray-800">Summer Program Assistance</h1>
					<p className="text-lg md:text-2xl text-pretty mb-12 px-4 md:px-0">
						Get expert guidance on finding and applying to the best summer programs for your interests. Whether you're looking for research opportunities, internships, or academic programs, we provide personalized recommendations, essay feedback, and application tips to help you stand out and maximize your summer experience.
					</p>

					<div className="flex justify-center gap-8 mb-12">
						<div className="bg-white shadow-lg rounded-lg p-6 w-40 text-center">
							<h3 className="text-3xl font-bold text-pink-500 mb-2">1-on-1</h3>
							<p className="text-gray-700">Application Support</p>
						</div>
						<div className="bg-white shadow-lg rounded-lg p-6 w-40 text-center">
							<h3 className="text-3xl font-bold text-purple-500 mb-2">50+</h3>
							<p className="text-gray-700">Programs Covered</p>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap justify-center gap-8 px-8">
					<div className="bg-white shadow-lg rounded-xl p-8 w-full md:w-1/3 flex flex-col justify-between">
						<div className="mb-4 text-center">
							<FaGlobeAmericas className="text-5xl text-pink-500 mx-auto mb-4" />
							<h2 className="font-bold text-2xl mb-4">Program Discovery</h2>
							<p className="text-gray-700">
								We help you explore a wide range of summer programs — from research internships and university-hosted opportunities to pre-college academic programs and more.
							</p>
							<p className="py-4 text-pretty">Get curated options that align with your interests and goals.</p>
						</div>
					</div>

					<div className="bg-white shadow-lg rounded-xl p-8 w-full md:w-1/3 flex flex-col justify-between">
						<div className="mb-4 text-center">
							<FaFileAlt className="text-5xl text-purple-500 mx-auto mb-4" />
							<h2 className="font-bold text-2xl mb-4">Application Review</h2>
							<p className="text-gray-700">
								Receive personalized feedback on essays, resumes, and short answers to ensure your application is compelling and competitive.
							</p>
							<p className="py-4 text-pretty italic">Stand out from the crowd with tailored support.</p>
						</div>
					</div>

					<div className="bg-white shadow-lg rounded-xl p-8 w-full md:w-1/3 flex flex-col justify-between">
						<div className="mb-4 text-center">
							<FaSun className="text-5xl text-pink-500 mx-auto mb-4" />
							<h2 className="font-bold text-2xl mb-4">Apply Now</h2>
							<p className="text-gray-700 pb-4">Support is available year-round, but we recommend starting early for competitive programs.</p>
							<p className='pb-2'>Looking for guidance?</p>
							<a href="https://placehold.co/" target="_blank" rel="noopener noreferrer">
								<div className="bg-pink-500 hover:bg-pink-600 text-white rounded-full py-2 px-6 cursor-pointer">
									Request Assistance
								</div>
							</a>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Summerassistance;