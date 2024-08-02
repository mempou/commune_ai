import React from 'react'

const Button = ({title} : {title: string}) => {
  return (
    <button className='px-[21px] py-[13px] border text-PRIMARY bg-white hover:bg-gray-50 inline-flex '>
      {title}
    </button>
  )
}

export default Button
