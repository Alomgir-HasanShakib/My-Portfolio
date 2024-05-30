import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div>
      <h2 className='text-4xl border-b-2 mx-auto md:w-[300px] pb-3 border-cyan-600 md:text-5xl font-extrabold text-center text-gray-300 mt-16'>{title}</h2>
    </div>
  )
}

export default SectionTitle