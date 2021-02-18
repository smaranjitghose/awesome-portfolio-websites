import Head from 'next/head'
import ContactLinks from '../components/contactlinks'
import Container from '../components/Navbar/Nav'
import '../styles/Home.module.css'

var ReactRotatingText = require('react-rotating-text');
export default function Home() {
  return (
    <Container>
    <div >
      <div className="w-full h-screen flex flex-wrap text-lg">
        <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 w-full h-full flex flex-wrap justify-center items-center text-center p-2">
          <div className="w-full">
            <p className="truncate bg-clip-text text-transparent bg-gradient-to-l from-blue-700 dark:from-blue-500 to-green-500 text-4xl lg:text-8xl my-10 py-2 font-bold ">
            Hi <span className="text-gray-900">&#128075;</span>,I'm John Doe
            </p>
            <p className="text-xl md:text-3xl my-10 md:mb-0 md:mt-6 leading-tight tracking-wider">
              I am into <ReactRotatingText items={["Designing", "UI/UX", "Cloud Computing", "Web Development", "Open Source", "Mentoring"]} />
              </p>
                <div className="flex flex-wrap text-lg my-10 justify-center items-center space-x-4"> 
               <button
          aria-label="Twitter"
          type="button"
          className="bg-blue-400 shadow-2xl hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full p-4 h-18 w-18"
          onClick="">
               <svg
            className='w-5 stroke-2'
            fill='none'
            stroke='white'
            strokeLinecap='round'
            strokeLinejoin='round'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Twitter</title>
            <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
          </svg> 
                </button>
                <button
          aria-label="Twitter"
          type="button"
          className="bg-blue-600 shadow-2xl hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full p-4 h-18 w-18"
          onClick="">
               <svg
            className='w-5 stroke-2'
            fill='none'
            stroke='white'
            strokeLinecap='round'
            strokeLinejoin='round'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Facebook</title>
            <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
          </svg>
                </button>
                <button
          aria-label="Twitter"
          type="button"
          className="bg-blue-800 shadow-2xl hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full p-4 h-18 w-18"
          onClick="">
               <svg
            className='w-5 stroke-2'
            fill='none'
            stroke='white'
            strokeLinecap='round'
            strokeLinejoin='round'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>LinkedIn</title>
            <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
            <rect x='2' y='9' width='4' height='12' />
            <circle cx='4' cy='4' r='2' />
          </svg>
                </button>
                <button
          aria-label="Twitter"
          type="button"
          className="bg-black shadow-2xl hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full p-4 h-18 w-18"
          onClick="">
            <svg
            className='w-5 stroke-2'
            fill='none'
            stroke='white'
            strokeLinecap='round'
            strokeLinejoin='round'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>GitHub</title>
            <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
          </svg>
                </button>
                </div>
            </div>
              <div className="w-full md:w-1/2  md:mb-0 ">
                <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-l from-blue-700 dark:from-blue-500 to-green-500">About</h2>
                <p className="leading-snug">
                  My name is John Doe and I am a full-stack web developer. The tech stack I primarily work with is TypeScript, React.js,
                  Node.js, and Python. I love spending my free time learning new things and improving myself.
                </p>
              </div>
        </div>
        </div> 
      <footer className='w-full pt-3 pb-2 text-sm font-light text-center text-gray-600 bg-gray-100 md:pb-6 dark:bg-gray-900 dark:text-gray-100'>
        <p className='my-0'>
          Made With {' '}
        <span aria-label='love' className=' text-red-600 mx-1 animate-ping align-middle' role='img'>
          ♥️
        </span>{' '}
        <span>
          by Open Source
        </span>
      </p>
        <ContactLinks />
        </footer>

      </div>
      </Container>
  )
}
