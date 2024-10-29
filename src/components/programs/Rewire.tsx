import { useState } from 'react';

const Rewire = () => {
	const [activeTab, setActiveTab] = useState('Eligibility');

	const renderContent = () => {
		switch (activeTab) {
			case 'Eligibility':
				return <div>
					<p>Any member of Multiverse Researchers who is seeking mentorship and revisions for a paper draft or ongoing research project (papers, posters, etc) may apply. To qualify, your project must be in progress. This means you've chosen a topic, started your research, and have a draft or working outline in hand.</p>
					<p className='py-4 text-pretty'>High school students with limited research experience will be given priority, but anyone can apply.</p>
				</div>;
			case 'The ReWire Team':
				return <div>
					<p>Our mentors are experienced researchers who have published numerous papers, worked with renowned institutions, and spoken at prestigious conferences. We will pass on the expertise we&apos;ve gained to help you succeed in your research journey!</p>
					<p className='py-4 text-pretty italic'>Our team consists of:</p>
					<ol className='list-decimal pl-8'>
						<li>ReWire Program Mentors: experienced research mentors from the cabinet team</li>
						<li>Peer Review Mentors: experienced Multiverse Researchers members who work under the guidance of ReWire Program</li>
					</ol>
				</div>;
			case 'Application Details':
				return <div>
					<p className='pb-4'>Decisions are made on a rolling basis.</p>
					<p className='underline font-semibold'>ReWire Student Application Form:</p>
					<a href="https://forms.gle/t2X8tduQJTJJWdqF9" target="_blank">
						<div className="text-lg w-fit m-auto bg-pink-300 hover:bg-pink-900 hover:text-white transition-colors duration-300 rounded-full py-2 px-6 cursor-pointer my-3">
							Apply Here!
						</div>
					</a>
					<p className='pt-4 font-semibold underline'>ReWire Peer Reviewer Application Form:</p>
					<p>(For any members with strong research experience and want to help others!)</p>
					<a className='text-purple-700 hover:text-pink-700 transition-all duration-300 font-semibold' href='https://forms.gle/oj8Nwx5ag2ZcMRoDA' target='_blank'>https://forms.gle/oj8Nwx5ag2ZcMRoDA</a>
				</div>;
			default:
				return null;
		}
	};

	return (
		<div className="p-8 md:w-7/12 m-auto">
			<p className="font-bold text-2xl pt-8 text-center">ReWire Program</p>
			<p className="md:m-auto py-3 text-center text-pretty">ReWire is a free research mentorship and project revision service tailored for novice researchers. Gain personalized, one-on-one support from experienced research mentors who will offer detailed feedback and assist you with your research project. Our goal is to help you refine your current work and rewire your fundamental research skills for future success.</p>
			<a href="https://daztyxpv.formester.com/f/6e4ea898-ec48-41c9-9570-fbe35facdc17" target="_blank">
				<div className="text-lg w-fit m-auto bg-pink-300 hover:bg-pink-900 hover:text-white transition-colors duration-300 rounded-full py-2 px-6 cursor-pointer my-3">
					Register
				</div>
			</a>

			<p className="font-bold text-2xl pt-16 text-center pb-4">Program Details</p>
			<div className="flex justify-center space-x-4">
				<button
					className={`py-2 px-4 ${activeTab === 'Eligibility' ? 'font-bold border-b-2 border-pink-300 rounded-none' : ''} hover:bg-gray-100 rounded-xl transition-all duration-300`}
					onClick={() => setActiveTab('Eligibility')}
				>
					Eligibility
				</button>
				<button
					className={`py-2 px-4 ${activeTab === 'The ReWire Team' ? 'font-bold border-b-2 border-pink-300 rounded-none' : ''} hover:bg-gray-100 rounded-xl transition-all duration-300`}
					onClick={() => setActiveTab('The ReWire Team')}
				>
					The ReWire Team
				</button>
				<button
					className={`py-2 px-4 ${activeTab === 'Application Details' ? 'font-bold border-b-2 border-pink-300 rounded-none' : ''} hover:bg-gray-100 rounded-xl transition-all duration-300`}
					onClick={() => setActiveTab('Application Details')}
				>
					Application Details
				</button>
			</div>

			<div className="mt-4">
				{renderContent()}
			</div>
		</div>
	);
};

export default Rewire;