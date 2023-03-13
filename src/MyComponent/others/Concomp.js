import React from 'react'
import './stylecss/Contact.css'
export const Concomp = (data) => {
  return (
    <div className='card-cont'>
                <div className='marg-cont'>
                    <img src={data.img} alt="" height="270px" width="270px" />
                    <div className='marg-left'>
                        <h3>{data.Cname1}</h3>
                        <p>{data.Ccont}</p>
                        <p className='marg'>{data.Cemail}</p>
                    </div>
                </div>
            </div>
  )
}
