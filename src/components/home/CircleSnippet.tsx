import React from 'react';

interface CircleSnippetProps {
  title: string;
  description: string;
  image1: string;
  image2: string;
}

const CircleSnippet: React.FC<CircleSnippetProps> = ({ title, description, image1, image2 }) => {
  // Splitting the description by newline characters and wrapping each part in a <p> element
  const descriptionParts = description.split('\n').map((part, index) => <p key={index}>{part}</p>);

  return (
    <div className="circle-snippet m-auto w-4/5 lg:w-2/3">
      <h2 className='text-xl sm:text-2xl lg:text-4xl font-medium text-center py-8'>{title}</h2>
      <div>{descriptionParts}</div>
      <div className='py-8 flex flex-col md:flex-row md:justify-between gap-8'>
        <img className='md:w-1/2 object-cover rounded-md' src={image1} alt="Image 1" />
        <img className='md:w-1/2 object-cover rounded-md' src={image2} alt="Image 2" />
      </div>
    </div>
  );
};

export default CircleSnippet;
