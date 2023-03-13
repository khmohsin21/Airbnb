import React from 'react'

export const Imagair = () => {
    let center={
        paddingLeft:"35%"
    }
    let border={
        border:"1px",
        width:"60%",
        paddingLeft:"10%",
        paddingTop:"100px"
    }
  return (
    <div>
        <div style={center}>
            <img src={require("./airbnb2.PNG")} alt="" width="100%" height="300vh"/>
        </div>
        <div >
            <div style={border}>
                <h3>Online Experiences</h3>
                <p>What do you want to try next? Think of something you're into—like “easy
                    chicken dinner”—and see what youWhat do you want to try next? Think of
                    something you're into—like “easy chicken dinner”—and see what you
                </p>
            </div>
        </div>
    </div>
  )
}
