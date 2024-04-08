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
    <div className="circle-snippet">
      <h2>{title}</h2>
      <div>{descriptionParts}</div>
      <div>
        <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
      </div>
    </div>
  );
};

export default CircleSnippet;
