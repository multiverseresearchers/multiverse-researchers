import { useLayoutEffect } from 'react';
import { FaUserGraduate, FaQuestionCircle, FaBookReader, FaSearchengin, FaPaperPlane, FaPollH } from 'react-icons/fa';

const Workshops = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <div className="bg-gradient-to-r from-pink-100 to-purple-100 min-h-screen px-8 py-16">
      <div className="p-8 w-1/2 md:w-3/4 md:m-auto">
        <p className="font-bold text-4xl md:text-5xl mb-8 text-center">Past Workshops</p>
        <p className="text-lg md:text-2xl text-pretty mb-12 px-4 md:px-0">
          Through a variety of other initiatives, Multiverse Researchers has help run multiple workshops to platform and educate members on research and educational aspects. 
          Below is a catalog of our recent efforts: 
        </p>

        <div className="flex grid grid-cols-1 lg:grid-cols-2 pt-8 gap-8 justify-center">
        
          <WorkshopBlock name="How to Write a Scientific Research Paper" author="Beatrice & Moses" date="September 2024"
            link="https://docs.google.com/presentation/d/1zdIqc7qASUQ43D9pjppQlCiPuIORSaFFbw5I8YUqVEw/edit#slide=id.g2ed7c8d067c_0_0" 
            icon={<FaPollH className="text-5xl ml-auto mb-4" />} 
            desc="" 
            color="blue"
            members="30"
          /> 
        
          <WorkshopBlock name="How to Use SciSpace" author="Alex & Ellen" date="September 2024"
            link="https://docs.google.com/presentation/d/12o8M5EzaCNmhnGwQCvK851gOdbN2aPuEsgKlIuPBoeg/edit?usp=sharing" 
            icon={<FaPaperPlane className="text-5xl ml-auto mb-4" />} 
            desc=""
            color="purple"
            members="25"
          />   
                  
          <WorkshopBlock name="How to Land Research Positions in High School" author="Moses" date="August 2024"
            link="https://docs.google.com/presentation/d/1sgarCuAE9E3nFsDNuswRQCnJ70JHHsTBfx1lwTf6d1k/edit?usp=sharing" 
            icon={<FaSearchengin className="text-5xl ml-auto mb-4" />}
            desc=""
            color="pink"
            members="30"
          />  
                
          <WorkshopBlock name="Research Workshop #2" author="Alyssa & Rowan" date="July 2024"
            link="https://www.canva.com/design/DAGLUZXU2gI/ufGOKqb-OgF-09JvmmNS2w/edit?utm_content=DAGLUZXU2gI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
            icon={<FaBookReader className="text-5xl ml-auto mb-4" />} 
            desc=""
            color="blue"
            members="20"
          /> 
                    
          <WorkshopBlock name="How to Choose a Major" author="Mili" date="July 2024"
            link="https://docs.google.com/presentation/d/1nAY0Wk3OSHh_YCDesL3WJD_Olv-vhgxZ8gffzt0-hM0/edit?usp=sharing"
            icon={<FaUserGraduate className="text-5xl ml-auto mb-4" />} 
            desc=""
            color="red"
            members="15"
          />           

          <WorkshopBlock name="How to Choose a Research Question" author="Shashwat" date="June 2024"
            link="https://docs.google.com/presentation/d/1EAH5RjD7kfkZ92OIRRSnavSPA3iu8InT9mxfL3La6VI/edit?usp=sharing" 
            icon={<FaQuestionCircle className="text-5xl ml-auto mb-4" />}
            desc=""
            color="blue"
            members="15"
          />

        </div>
      </div>
    </div>
  );
}

const WorkshopBlock = ({name, author, date, link, desc, icon, color, members}:
                       {name:string, author:string, date:string, link:string, desc:string, icon:any, color:string, members:string}) => {

  let iconDiv;
  let buttonElement;
  let membersP;


  switch (color) {
    case "pink":
      iconDiv = 
        (<div className={`text-pink-500`}>
          {icon}
        </div>);
      
      buttonElement = (
        <div className={`bg-pink-500 hover:bg-pink-600 text-white rounded-xl p-3 cursor-pointer max-w-fit`}>Link to Slides</div>
      )

      membersP = (
        <p className="text-gray-700 font-bold hover:underline hover:text-pink-500 text-md">{members}+ ATTENDEES</p>
      );
      
      break;

    case "blue":
      iconDiv = 
        (<div className={`text-blue-500`}>
          {icon}
        </div>);

      buttonElement = (
        <div className={`bg-blue-500 hover:bg-blue-600 text-white rounded-xl p-3 cursor-pointer max-w-fit`}>Link to Slides</div>
      )

      membersP = (
        <p className="text-gray-700 font-bold hover:underline hover:text-blue-500 text-md">{members}+ ATTENDEES</p>
      );

      break;
    case "purple":
      iconDiv = 
        (<div className={`text-purple-500`}>
          {icon}
        </div>);

      buttonElement = (
        <div className={`bg-purple-500 hover:bg-purple-600 text-white rounded-xl p-3 cursor-pointer max-w-fit`}>Link to Slides</div>
      )

      membersP = (
        <p className="text-gray-700 font-bold hover:underline hover:text-purple-500 text-md">{members}+ ATTENDEES</p>
      );

      break;
    case "green":
      iconDiv = 
        (<div className={`text-green-500`}>
          {icon}
        </div>);
      
      buttonElement = (
        <div className={`bg-green-500 hover:bg-green-600 text-white rounded-xl p-3 cursor-pointer max-w-fit`}>Link to Slides</div>
      )

      membersP = (
        <p className="text-gray-700 font-bold hover:underline hover:text-green-500 text-md">{members}+ ATTENDEES</p>
      );

      break;
    case "red":
      iconDiv = 
        (<div className={`text-red-500`}>
          {icon}
        </div>);

      buttonElement = (
        <div className={`bg-red-500 hover:bg-red-600 text-white rounded-xl p-3 cursor-pointer max-w-fit`}>Link to Slides</div>
      )

      membersP = (
        <p className="text-gray-700 font-bold hover:underline hover:text-red-500 text-md">{members}+ ATTENDEES</p>
      );

      break;
    default:
      iconDiv = 
        (<div className={`text-pink-500`}>
        {icon}
        </div>);

      buttonElement = (
        <div className={`bg-pink-500 hover:bg-pink-600 text-white rounded-xl p-3 cursor-pointer max-w-fit`}>Link to Slides</div>
      );

      membersP = (
        <p className="text-gray-700 font-bold hover:underline hover:text-pink-500 text-md">{members}+ ATTENDEES</p>
      );
  }

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-full flex flex-col grid grid-cols-1 gap-6 justify-between">
      <div className='row-start-1 row-span-2 h-auto md:h-50'>
        <p className="text-gray-500 text-sm">WORKSHOP</p>
        {iconDiv}
        <h2 className="font-bold text-2xl mb-4">{name}</h2>

        <p className="text-gray-700 pb-4">{date}</p>
      </div>
      <div className='row-start-4'>
        <p className="text-lg ml-1 pt-3 pb-3">{author}</p>

        <div className="flex grid grid-cols-2">
          <div>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {buttonElement}
            </a>
            <p>{desc}</p>
          </div>

          <div className='text-right flex-end rounded-xl p-3'>
            {membersP}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workshops;