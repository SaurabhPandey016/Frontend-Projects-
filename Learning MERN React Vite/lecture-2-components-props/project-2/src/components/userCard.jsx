import React from 'react'

const userCard = (props) => {
  return (
    <div className='user-container'>
      <p>{props.name} saurabh pandey</p>
        <p>{props.desc} ilheiohipwehcpihwpocph</p>
    </div>
  )
}

export default userCard
// this is a componenets for the usercard that we are being making
// if we donot export this usercard from here we're not able to render it;