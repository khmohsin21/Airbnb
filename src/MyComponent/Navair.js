import React from 'react'
import './stylecss/style1.css'
export const Navair = () => {
  return (
    <div>
        <div className="bordering my-3">
            <div className='leftspace'>
                <img src={require("./airbnb.png")} alt=""  height="30px" width="30px"/>
                <b className='color'>airbnb</b>
            </div>
        </div>
    </div>
  )
}
