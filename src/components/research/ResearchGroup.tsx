import filler_img from '../../../public/imgs/filler/Rectangle_23.png'

const ResearchGroup = props => {
    return (
        <div className='shadow-xl m-5 max-w-screen-lg rounded-lg'>
          <div className='flex flex-row m-2'>
            <div className="w-full m-10"> 
              <span className="font-semibold sm:text-l md:text-l lg:text-xl">{props.title}</span>
              <div className="sm:text-m md:text-m lg:text-l mt-5">{props.content}</div>
              <div className="text-center m:text-m md:text-m lg:text-l m-2">
                <a href={props.link} className='underline italic'>Read more</a>
              </div>
            </div>
            <div className="w-full m-5"> 
                <img src={filler_img} alt="Filler Img from Figma" />
            </div>
          </div>
        </div>
    )
}

export default ResearchGroup