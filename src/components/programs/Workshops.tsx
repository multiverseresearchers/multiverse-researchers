import React from 'react';
import ReactGoogleSlides from "react-google-slides";

const Workshops = () => {
  return (
    <div className="p-8 md:w-1/2 m-auto">
      <p className="font-bold text-2xl pt-8 text-center">Past Workshops</p>
      <p className="md:m-auto py-3 text-center">
        Through a variety of other initiatives, Multiverse Researchers has help run multiple workshops to platform and educate members on research and educational aspects. 
        Below is a catalog of our recent efforts: 
      </p>

      <div className="flex grid grid-cols-1 pt-8 gap-8 justify-center">
      
      <WorkshopBlock name="How to Write a Scientific Research Paper" author="Beatrice & Moses" date="September 2024"
          link="https://docs.google.com/presentation/d/1zdIqc7qASUQ43D9pjppQlCiPuIORSaFFbw5I8YUqVEw/edit#slide=id.g2ed7c8d067c_0_0" />
      
      <WorkshopBlock name="How to Use SciSpace" author="Alex & Ellen" date="September 2024"
          link="https://docs.google.com/presentation/d/12o8M5EzaCNmhnGwQCvK851gOdbN2aPuEsgKlIuPBoeg/edit?usp=sharing" />
                
      <WorkshopBlock name="How to Land Research Positions in High School" author="Moses" date="August 2024"
          link="https://docs.google.com/presentation/d/1sgarCuAE9E3nFsDNuswRQCnJ70JHHsTBfx1lwTf6d1k/edit?usp=sharing" />
              
      <WorkshopBlock name="Research Workshop #2" author="Alyssa & Rowan" date="July 2024"
          link="https://www.canva.com/design/DAGLUZXU2gI/ufGOKqb-OgF-09JvmmNS2w/edit?utm_content=DAGLUZXU2gI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" />
                  
      <WorkshopBlock name="How to Choose a Major" author="Mili" date="July 2024"
          link="https://docs.google.com/presentation/d/1nAY0Wk3OSHh_YCDesL3WJD_Olv-vhgxZ8gffzt0-hM0/edit?usp=sharing" />          

        <WorkshopBlock name="How to Choose a Research Question" author="Shashe" date="June 2024"
          link="https://docs.google.com/presentation/d/1EAH5RjD7kfkZ92OIRRSnavSPA3iu8InT9mxfL3La6VI/edit?usp=sharing" />
        
      </div>
    </div>
  );
}

const WorkshopBlock = (props) => {
  return (
    <a target="_blank" href={props.link}>
      <div className="p-4 flex flex-col items-center w-1/2 md:w-3/4 h-full m-auto hover:font-bold hover:border-b-4 hover:border-pink-300 hover:bg-gray-300 bg-gray-200 rounded-lg transition-all duration-300">
        <h1 className="text-xl text-left">
          {props.name}
        </h1>
        <p className="text-lg m-2">{props.date}</p>
        <p className="font-normal text-md">{props.author}</p>
      </div>
    </a>
  );
}

export default Workshops;