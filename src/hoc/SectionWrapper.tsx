import React, { ReactNode } from 'react'

const SectionWrapper = ({children}:{ children: ReactNode | ReactNode[] }) => {
  return (
    <div className='max-w-[1234px] mx-auto px-4 md:px-0'>
        {children}
    </div>
  )
}

export default SectionWrapper
