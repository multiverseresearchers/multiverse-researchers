import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import filler_img from '/imgs/filler/Rectangle_23.png'
import { Link } from 'react-router-dom';

const ResearchGroup = (props: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; link: string | undefined }) => {
    return (
        <div className='shadow-xl m-5 max-w-screen-lg rounded-lg'>
          <div className='flex flex-row m-2'>
            <div className="w-full m-10"> 
              <span className="font-semibold sm:text-l md:text-l lg:text-xl">{props.title}</span>
              <div className="sm:text-m md:text-m lg:text-l mt-5">{props.content}</div>
              <div className="text-center m:text-m md:text-m lg:text-l m-2">
                <Link to={`/research/${props.link}`}>Learn More</Link>
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