'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className='bg-white shadow-sm border-b'>
      <div
        className='  container mx-auto flex items-center justify-between
          px-4 py-3
          sm:px-6 sm:py-4
          lg:px-8 lg:py-5
          xl:px-12'
      >
        {/* logo */}
        <a href='/' className='text-xl font-bold text-blue-600'>
          ConvertFile
        </a>
        {/* nav links */}
        <nav className='hidden md:flex space-x-6'>
          <a href='/' className='text-gray-600 hover:text-gray-900'>
            PDF
          </a>
          <a href='/dashboard' className='text-gray-600 hover:text-gray-900'>
            Word
          </a>
          <a href='/dashboard' className='text-gray-600 hover:text-gray-900'>
            Upscale
          </a>
        </nav>

        <div className='hidden md:flex space-x-4'>
          <button className='text-gray-600 hover:text-gray-900 px-4 py-2'>
            Sign In
          </button>
          <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg'>
            Sign Up
          </button>
        </div>

        {/* burger*/}
        <button
          className='md:hidden text-gray-600 hover:text-gray-900'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <Icon icon='mingcute:close-fill' width='26' height='26' />
          ) : (
            <Icon icon='mingcute:menu-fill' width='26' height='26' />
          )}
        </button>
      </div>

      {/* menu mobile */}
      {menuOpen && (
        <div className='md:hidden bg-white shadow-sm'>
          <div className='container mx-auto px-4 py-3'>
            <nav className='flex flex-col space-y-3'>
              <a
                href='/'
                className='text-gray-600 hover:text-gray-900'
                onClick={() => setMenuOpen(false)}
              >
                PDF
              </a>
              <a
                href='/dashboard'
                className='text-gray-600 hover:text-gray-900'
                onClick={() => setMenuOpen(false)}
              >
                Word
              </a>
              <a
                href='/upscale'
                className='text-gray-600 hover:text-gray-900'
                onClick={() => setMenuOpen(false)}
              >
                Upscale
              </a>
            </nav>

            {/* Buttons */}
            <div className='mt-4 flex flex-col gap-2 sm:flex-row sm:justify-start sm:gap-4'>
              <button className='text-gray-600 hover:text-gray-900 px-4 py-2 border rounded-md md:w-auto'>
                Sign In
              </button>
              <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md md:w-auto'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
