import './Contact.css'
import CSS from "csstype";

const Contact = () => {

    const backgroundWrapping: CSS.Properties = {
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover'
    }

    return (
        <div className="bg-[url('/imgs/filler/Background.png')]" style={backgroundWrapping}>
            <div className='m-auto md:w-4/5 lg:w-2/3 flex flex-col px-16 md:px-0 md:flex-row w-full text-center md:text-center md:gap-8 py-16 md:py-32 justify-evenly'>
                <div className="w-full items-center">
                    <span className="font-semibold text-xl sm:text-3xl md:text-4xl lg:text-5xl">
                        Questions?
                    </span>
                    <div className="sm:text-md md:text-md lg:text-lg ml-0 m-5">
                        Send us an email at <a className='text-purple-600 underline font-semibold' href="mailto:multiverseresearchers@gmail.com">multiverseresearchers@gmail.com</a>! We'll get back to you in 2-3 business days.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact