import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='w-full flex flex-col gap-6 p-8 sm:p-16 md:flex-row md:justify-between lg:px-32 rounded-t-lg mt-5'>
        <div className='flex flex-col justify-between'>
            <div>
                <p className='font-semibold text-2xl pt-8'>Multiverse Researchers</p>
                <p className='py-3'>Propelling students to the universe of research.</p>
            </div>
            <p className='hidden md:block'>© 2024 Multiverse Researchers. All rights reserved.</p>
        </div>
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col md:flex-row md:gap-12 gap-6'>
                <div className='flex flex-col'>
                    <p className='font-medium underline pb-2'>Quick Links</p>
                    <Link to='/' className='text-black transition-colors duration-300 ease-in-out hover:text-cyan-500'>Home</Link>
                    <Link to='/about' className='text-black transition-colors duration-300 ease-in-out hover:text-cyan-500'>About</Link>
                    <Link to='/research' className='text-black transition-colors duration-300 ease-in-out hover:text-cyan-500'>Research</Link>
                    <Link to='/publications' className='text-black transition-colors duration-300 ease-in-out hover:text-cyan-500'>Publications</Link>
                </div>
                <div className='flex flex-col'>
                    <p className='font-medium underline pb-2'>Other</p>
                    <Link to='/terms' className='text-black transition-colors duration-300 ease-in-out hover:text-cyan-500'>Terms and Conditions</Link>
                    <Link to='/privacy-policy' className='text-black transition-colors duration-300 ease-in-out hover:text-cyan-500'>Privacy Policy</Link>
                </div>
            </div>
            <div>
                <p className='font-medium underline pb-2'>Get in Touch</p>
                <div className='flex flex-row gap-12'>
                    <p>Add socials here [wip]</p>
                </div>
            </div>
            <p className='md:hidden block'>© 2024 Multiverse Researchers. All rights reserved.</p>

        </div>
    </footer>
  )
}

export default Footer