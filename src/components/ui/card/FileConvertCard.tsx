import React from 'react';
import Image from 'next/image';

type Card = {
  src: string;
  title: string;
};
export default function FileConvertCard({ src, title }: Card) {
  return (
    <div className='group text-black flex items-center flex-col rounded-2xl px-6 py-6 border border-gray-200 hover:shadow-lg shadow-blue-100 bg-blue-50 w-fit gap-2'>
      <div className='group-hover:scale-125 '>
        <Image
          src={src}
          alt={title}
          className='
            w-10 h-10
            sm:w-8 sm:h-8
            md:w-10 md:h-10
            lg:w-12 lg:h-12
            xl:w-14 xl:h-14
            2xl:w-20 2xl:h-20
          '
        />
      </div>
      <span className='text-blue-400 font-medium text-sm sm:text-base md:text-lg '>
        {title}
      </span>
    </div>
  );
}
