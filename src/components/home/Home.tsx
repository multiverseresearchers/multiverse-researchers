import './Home.css'

const Home = () => {
  return (
    <div>
        <div className='flex flex-col w-full h-[80vh] items-center justify-evenly'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight m-5'>The Future of Research<br />Starts <span className='font-semibold'>Here</span></h1>
                <p className='text-center w-2/3'>We are a student led organization that empowers high school students to engage in innovative research.</p>
            </div>
            <svg className='animate-bounce' xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="#000000"/></svg>
        </div>
    </div>
  )
}

export default Home