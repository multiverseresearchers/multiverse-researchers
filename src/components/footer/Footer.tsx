import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='w-full flex flex-col gap-6 sm:p-16 md:flex-row md:justify-between lg:px-32 rounded-t-lg mt-5'>
        <div className='flex flex-col justify-between'>
            <div>
                <p className='md:py-16'>Multiverse Researchers</p>
            </div>
            <p>© 2024 Multiverse Researchers. All rights reserved.</p>
        </div>
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col md:flex-row md:gap-12 gap-6'>
                <div className='flex flex-col'>
                    <p className='underline pb-2'>Quick Links</p>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/research'>Research</Link>
                    <Link to='/publications'>Publications</Link>
                </div>
                <div className='flex flex-col'>
                    <p className='underline pb-2'>Other</p>
                    <Link to='/terms'>Terms and Conditions</Link>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                </div>
            </div>
            <div>
                <p className='underline pb-2'>Get in Touch</p>
                <div className='flex flex-row gap-12'>
                    <p>Add socials here [wip]</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer