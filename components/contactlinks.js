const ContactLinks = () => (
    <ul className='flex flex-wrap justify-center list-none dark:bg-gray-900 dark:text-gray-100'>
      <li className='inline-flex mx-1'>
        <a
          className='inline-block p-2 transition-colors text-middle hover:text-secondary'
          href='#'
          rel='noopener noreferrer'
          target='_blank'
        >
          <svg
            className='w-5 stroke-2'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Twitter</title>
            <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
          </svg>
        </a>
      </li>
      <li className='inline-flex mx-1'>
        <a
          className='inline-block p-2 transition-colors text-middle hover:text-secondary'
          href='#'
          rel='noopener noreferrer'
          target='_blank'
        >
          <svg
            className='w-5 stroke-2'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Facebook</title>
            <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
          </svg>
        </a>
      </li>
      <li className='inline-flex mx-1'>
        <a
          className='inline-block p-2 transition-colors text-middle hover:text-secondary'
          href='#'
          rel='noopener noreferrer'
          target='_blank'
        >
          <svg
            className='w-5 stroke-2'
            fill='none'
            stroke='currentColor'
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
        </a>
      </li>
      <li className='inline-flex mx-1'>
        <a
          className='inline-block p-2 transition-colors text-middle hover:text-secondary'
          href='#'
          rel='noopener noreferrer'
          target='_blank'
        >
          <svg
            className='w-5 stroke-2'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>GitHub</title>
            <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
          </svg>
        </a>
      </li>
      <li className='inline-flex mx-1'>
        <a
          className='inline-block p-2 transition-colors text-middle hover:text-secondary'
          href='#'
          rel='noopener noreferrer'
          target='_blank'
        >
          <svg
            className='w-5 stroke-2'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Email</title>
            <path d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
          </svg>
        </a>
      </li>
    </ul>
  );
  
  export default ContactLinks;