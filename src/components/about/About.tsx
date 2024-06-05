import './About.css'
import AboutTab from "./AboutTab";
import filler_img_1 from '../../../public/imgs/filler/Rectangle_19.png'
import filler_img_2 from '../../../public/imgs/filler/Rectangle_11.png'

const About = () => {

  const members = [
    {
      name: "Cabinet Name",
      position: "Position",
      url: filler_img_2
    },
    {
      name: "Cabinet Name",
      position: "Position",
      url: filler_img_2
    },
    {
      name: "Cabinet Name",
      position: "Position",
      url: filler_img_2
    },
    {
      name: "Cabinet Name",
      position: "Position",
      url: filler_img_2
    },
    {
      name: "Cabinet Name",
      position: "Position",
      url: filler_img_2
    },
    {
      name: "Cabinet Name",
      position: "Position",
      url: filler_img_2
    },
    {
      name: "Cabinet Name",
      position: "Position",
      url: filler_img_2
    },
    {
      name: "Cabinet Name",
      position: "Position",
      url: filler_img_2
    },
    
  ]


  return (
    <div className='flex flex-col space-y-40 items-center'>
    <div className='flex flex-col items-center justify-center'>
      <div className='m-5 max-w-screen-xl rounded-lg'>
        <div className='flex flex-row m-2'>
          <div className="w-full m-10"> 
            <span className="font-semibold sm:text-xl md:text-2xl lg:text-3xl">
              Hi there, we're Multiverse Researchers!
            </span>
            <div className="sm:text-md md:text-md lg:text-lg mt-5">
              We strive to induce passion in the field of research and encourage 
              students to pursue it further in life.
            </div>
            <div className="sm:text-m md:text-m lg:text-l mt-5">
              Mission Statement: Through our love for discovery and our commitment to hard work, 
              we desire to unravel the various complexities and diversities of fields ranging 
              from physics to economics.
            </div>

          </div>
          <div className="w-full m-5"> 
              <img src={filler_img_1} alt="Filler Img from Figma" />
          </div>
      </div>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center">
      <div className='flex flex-col items-center m-5'>
            <h1 className='text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl m-5'>Meet Our Team</h1>
            <p className='text-center w-1/2'>Lorem ipsum is placeholder text commonly used in the graphic, 
            print, and publishing industries for previewing layouts and visual mockups.</p>
      </div>

      <div className="grid grid-cols-4 gap-4 w-full mt-10">
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