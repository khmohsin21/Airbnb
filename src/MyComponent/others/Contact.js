import React from 'react'
import './stylecss/Contact.css'
import { Concomp } from './Concomp'
export const Contact = () => {
  return (
    <div className='card'>
      <Concomp img={require("./cat1.jpg")} Cname1="Mr Wisk" Ccont="0321-5049189" Cemail="mohsin.zahid@gmail.com"/>
      <Concomp img={require("./cat3.jpg")} Cname1="Mr Mustash" Ccont="0322-4898857" Cemail="ahmed318@gmail.com"/>
      <Concomp img={require("./cat4.jpg")} Cname1="Mr Cat bros" Ccont="0320-4163886" Cemail="dawood@gmail.com"/>
      <Concomp img={require("./cat5.jpg")} Cname1="Mr Lovers" Ccont="0320-5197711" Cemail="zohaib@gmail.com"/>
    </div>
  )
}
