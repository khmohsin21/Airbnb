import React from 'react'
import { Navair } from './Navair';
import { Imagair } from './Imagair';
import { Hero } from './Hero';
import DetailsData from './DetailsData';
import './stylecss/style3.css'
export const Air = () => {
  const detailsdata=DetailsData.map(data=>{
    return <Hero key={data.id} item={data}/>
  })
  return (
    <div>
        <Navair/>
        <Imagair/> 
        <section className='main'>
          {detailsdata}
        </section>
    </div>
  )
}
