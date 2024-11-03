"use client"
import { Progress } from '@nextui-org/react'
import React from 'react'

export interface LoaderProps {
  progress: number;
}

const Loader: React.FC<LoaderProps> = ({ progress }) => {
  return (
    <Progress 
      aria-label="Loading..." 
      value={progress} 
      color="default" 
      size='sm' 
      className="w-full fixed top-0 z-50"
    />
  )
}

export default Loader