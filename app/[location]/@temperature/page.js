import TemparatureComponent from '@/components/TemparatureComponent'
import React from 'react'

const TemperaturePage = ({params:{location},searchParams:{latitude,longitude}}) => {
  return (
    <TemparatureComponent lat={latitude} lon={longitude}/>
  )
}

export default TemperaturePage