import { useLayoutEffect } from 'react';
import { FaEnvelopeOpenText, FaLightbulb, FaUserCheck } from 'react-icons/fa';

const ColdEmail = () => {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div className="bg-gradient-to-r from-pink-100 to-purple-100 min-h-screen px-8 py-16">
			<div className="p-8 md:w-4/5 m-auto">
				<div className="text-center">
					<h1 className="font-bold text-4xl md:text-5xl mb-8 text-gray-800">Cold Email Assistance</h1>
					<p className="text-lg md:text-2xl text-pretty mb-12 px-4 md:px-0">
						Struggling to reach out to professors or professionals? Our Cold Email Assistance program helps you craft well-structured emails to increase your chances of getting research positions, mentorship, or networking opportunities. Receive personalized feedback on your drafts and learn strategies to make your outreach more effective.
					</p>

					<div className="flex justify-center gap-8 mb-12">
						<div className="bg-white shadow-lg rounded-lg p-6 w-40 text-center">
							<h3 className="text-3xl font-bold text-pink-500 mb-2">100%</h3>
							<p className="text-gray-700">Personalized Edits</p>
						</div>
						<div className="bg-white shadow-lg rounded-lg p-6 w-40 text-center">
							<h3 className="text-3xl font-bold text-purple-500 mb-2">1-on-1</h3>
							<p className="text-gray-700">Email Support</p>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap justify-center gap-8 px-8">
					<div className="bg-white shadow-lg rounded-xl p-8 w-full md:w-1/3 flex flex-col justify-between">
						<div className="mb-4 text-center">
							<FaEnvelopeOpenText className="text-5xl text-pink-500 mx-auto mb-4" />
							<h2 className="font-bold text-2xl mb-4">What We Offer</h2>
							<p className="text-gray-700">
								We’ll review your drafts, suggest improvements, and help you write clear, concise, and professional emails tailored to professors and professionals in your field.
							</p>
							<p className="py-4 text-pretty">We also provide templates, tone guidance, and tips on subject lines that get noticed.</p>
						</div>
					</div>

					<div className="bg-white shadow-lg rounded-xl p-8 w-full md:w-1/3 flex flex-col justify-between">
						<div className="mb-4 text-center">
							<FaLightbulb className="text-5xl text-purple-500 mx-auto mb-4" />
							<h2 className="font-bold text-2xl mb-4">Why Cold Emails?</h2>
							<p className="text-gray-700">
								Cold emails are one of the most effective ways to find research positions and mentors—if done well.
							</p>
							<p className="py-4 text-pretty italic">We help you stand out with clarity and confidence.</p>
						</div>
					</div>

					<div className="bg-white shadow-lg rounded-xl p-8 w-full md:w-1/3 flex flex-col justify-between">
						<div className="mb-4 text-center">
							<FaUserCheck className="text-5xl text-pink-500 mx-auto mb-4" />
							<h2 className="font-bold text-2xl mb-4">How to Apply</h2>
							<p className="text-gray-700 pb-4">We accept requests on a rolling basis. All Multiverse Researchers members are welcome!</p>
							<p className="pb-2">Ready to get help with your draft?</p>
							<a href="https://placehold.co/" target="_blank" rel="noopener noreferrer">
								<div className="bg-pink-500 hover:bg-pink-600 text-white rounded-full py-2 px-6 cursor-pointer">
									Request Email Help
								</div>
							</a>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default ColdEmail;