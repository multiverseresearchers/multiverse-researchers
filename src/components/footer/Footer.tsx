import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='w-full flex flex-col gap-6 p-8 sm:p-16 md:flex-row md:justify-between lg:px-32 rounded-t-lg mt-5'>
        <div className='flex flex-col justify-between pb-3'>
            <div>
                <p className='font-semibold text-2xl'>Multiverse Researchers</p>
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
                <div className='flex flex-row gap-3 pb-4'>
                    <a href="mailto:multiverseresearchers@gmail.com" target='_blank'><svg className='fill-black hover:fill-blue-500 transition-colors duration-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg></a>
                    <a href="https://discord.com/invite/PRpxZ6UBNN" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-black hover:fill-blue-500 transition-colors duration-300" viewBox="0 0 16 16"> <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path></svg></a>
                    <a href="https://www.linkedin.com/in/multiverse-researchers-681657313/" target='_blank'><svg className='fill-black hover:fill-blue-500 transition-colors duration-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                    <a href="https://www.instagram.com/multiverse.researchers/" target='_blank'><svg className='fill-black hover:fill-blue-500 transition-colors duration-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                </div>
            </div>
            <p className='md:hidden block'>© 2024 Multiverse Researchers. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer