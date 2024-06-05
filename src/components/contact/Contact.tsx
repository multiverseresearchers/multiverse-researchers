import './Contact.css'
import CSS from "csstype";
import { Input } from "@material-tailwind/react";

const Contact = () => {

  const backgroundWrapping: CSS.Properties = {
		'backgroundRepeat': 'no-repeat',
		'backgroundSize': 'cover'
	}

  return (
    <div className="bg-[url('../../../public/imgs/filler/Background.png')]" style={backgroundWrapping}>
      <div className='flex flex-row w-full h-[84vh] items-center justify-evenly'>
          <div className="w-full m-10"> 
            <span className="font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
              Have Questions?
            </span>
            <div className="sm:text-md md:text-md lg:text-lg mt-5">
             Fill this out and send a form. We'll get back to you in 2-3 business days.
            </div>

          </div>
          <div className="w-full m-5"> 
            <div className="flex w-72 flex-col items-end gap-6">
              <Input size="md" label="Input Medium" crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
              <Input size="lg" label="Input Large" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact