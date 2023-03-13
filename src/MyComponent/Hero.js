import React from 'react'
import './stylecss/style3.css'
export const Hero = ({item}) => {
  let dispBadge
  if(item.openspots===0){
    dispBadge="Sold Out";
  }
  else if(item.location==="Online"){
    dispBadge="Online";
  }
  console.log(item)
  return (
      <div className='main1'>
        <div className='pad'>
            {dispBadge && <div className='badge'>{dispBadge}</div>}
            <img src={item.coverImg} alt="" height="250vh" width="350px"/>
          <br />
          <div className='pad2'>
              <span><img src={item.starImg} alt=""/> {item.stats.rating}</span><br />
              <span className='silver'>({item.stats.reviewCount}) •</span><span className='silver'>{item.location}</span>
          </div>
              <p>{item.title}</p>
              <p className='margin-top'>Starting from <b>${item.price}</b>/person</p>
        </div>
    </div>
  )
}
