import React from 'react'
import Insta from "../Insta.png"
import messenger from "../messenger.png"
import Posts from './Posts'
import {useNavigate} from "react-router-dom"
function Timeline({data}) {
  const navigate=useNavigate();
  const message=(id)=>{
    let path=`/messages`;
    navigate(path);
  }
  return (
    <>
  <div className='container'>
    <div className='d-flex justify-content-between'>
    <img src={Insta} alt="" className='insta' />
    <img onClick={()=>message()}src={messenger} alt="" className='message'/>
    </div>
    <hr></hr>
    </div>
    <Posts data={data}/>
    </>
  )
}

export default Timeline