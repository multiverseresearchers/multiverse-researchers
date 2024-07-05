import './Contact.css'
import CSS from "csstype";
import { Input } from "@material-tailwind/react";

const Contact = () => {

    const backgroundWrapping: CSS.Properties = {
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover'
    }

    return (
        <div className="bg-[url('/imgs/filler/Background.png')]" style={backgroundWrapping}>
            <div className='m-auto md:w-4/5 lg:w-2/3 flex flex-col px-16 md:px-0 md:flex-row w-full text-center md:text-left md:gap-8 py-16 md:py-32 justify-evenly'>
                <div className="w-full items-start">
                    <span className="font-semibold text-xl sm:text-3xl md:text-4xl lg:text-5xl">
                        Questions?
                    </span>
                    <div className="sm:text-md md:text-md lg:text-lg ml-0 m-5">
                        Fill this out and send a form! We'll get back to you in 2-3 business days.
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-6">
                    <Input
                        placeholder='Name'
                        crossOrigin={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        className="focus:outline-none px-3 py-2 focus:ring-2 focus:ring-purple-500 rounded-lg"
                    />

                    <Input
                        placeholder='Email'
                        crossOrigin={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        className="focus:outline-none px-3 py-2 focus:ring-2 focus:ring-purple-500 rounded-lg"
                    />

                    <Input
                        placeholder='Your message'
                        crossOrigin={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        className="focus:outline-none px-3 py-2 aspect-video focus:ring-2 focus:ring-purple-500 rounded-lg"
                    />
                    <a className='transition-colors duration-200 border rounded-lg hover:border-blue-500 hover:bg-gray-100 hover:text-blue-500 bg-blue-500 text-white px-10 py-2 text-center font-semibold' href="mailto:multiverseresearchers@gmail.com">Send</a>
                </div>
            </div>
        </div>
    )
}

export default Contact