import React from 'react'
import Navbar from './Modal/Navbar';

const Pass = (props) => {
    const robotName = props.robotName;
  return (
    <>

        <Navbar newBoatName = {robotName}/>
    </>
  )
}

export default Pass