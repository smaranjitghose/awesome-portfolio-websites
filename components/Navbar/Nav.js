import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import clsx from 'clsx';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const onTap = () => {
    setIsMenuOpen(false);
  };

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Awesome Developer Portfolio',
    description: `This project serves free and beautiful portfolio template for everyone. Anyone can showcase their work including moocs, education, projects, experience,etc. to the world.`,
    image: 'https://portfolio.smaranjitghose.codes/',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content="https://portfolio.smaranjitghose.codes/"></meta>
        <meta property="og:site_name" content="Awesome Developer Porfolio" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <div className='lg:hidden'>
        <button
          aria-label='open-menu'
          title='open-menu'
          className='p-1 -mr-1 focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className={clsx('w-10 h-10 dark:text-white', isMenuOpen && 'opened')}
            fill='currentColor'
            id='menu-icon'
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058' />
            <path d='M 20,50 H 80' />
            <path d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942' />
          </svg>
        </button>
      </div>
      <nav className={clsx(
        "sticky-nav flex justify-between items-center max-w w-full p-8  mx-auto bg-gray-100 dark:bg-opacity-60 dark:bg-gray-900 bg-opacity-60",
        isMenuOpen
        ? 'h-auto py-4 border opacity-100 lg:border-none'
        : 'border-transparent'
      )} >
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-gray-200"
            >
              {theme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
        
        <div>
          <NextLink href="/" onClick={onTap}>
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Home</a>
          </NextLink>
          <NextLink href="/experience" onClick={onTap}>
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
            Experience
            </a>
          </NextLink>
          <NextLink href="/projects" onClick={onTap}>
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Projects</a>
          </NextLink>
          <NextLink href="/research" onClick={onTap}>
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Research</a>
          </NextLink>
          <NextLink href="/education" onClick={onTap}>
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Education</a>
          </NextLink>
        </div>
      </nav>
      <main
        id="skip"
        className="flex flex-col justify-center bg-gray-100 dark:bg-gray-900 px-8"
      >
        {children}
      </main>
    </div>
  );
}