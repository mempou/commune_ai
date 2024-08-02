import { SellContenProps } from '@/lib'
import Image from 'next/image'
import React from 'react'

const SellsText = ({
  titre,
  content,
  icons
}: SellContenProps) => {
  return (
    <div className='flex gap-8'>
      <div>
        <Image 
          src={icons}
          width={64}
          height={32}
          alt='icon'
        />
      </div>
      <div >
        <h3 className='text-black-1 text-medium  '>{titre} </h3>
        <p className='mt-2 text-Slate-200 text-sm font-normal '>{content} </p>
      </div>
    </div>
  )
}

export default SellsText
