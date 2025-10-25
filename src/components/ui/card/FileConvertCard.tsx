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
        <Image src={src} alt='title' width={40} height={40} />
      </div>
      <span className='text-blue-400 font-medium '> {title}</span>
    </div>
  );
}
