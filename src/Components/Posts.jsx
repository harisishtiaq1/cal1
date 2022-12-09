import React from 'react'
import {useNavigate} from "react-router-dom"

function Posts({data}) {
  const navigate=useNavigate();
  const postDetail=(id)=>{
    let path=`/${id}`;
    navigate(path);
  }
  const comment=(id,title)=>{
    let path=`/${id}/${title}`;
    navigate(path);
  }
  return (
    <div className='container'>
        {data.map((item)=>{
          return(
          <>
      <div className='profile d-flex'>

    <img src={item.profileimg} alt="/"></img>
    <div className='d-flex flex-column left point'>
    <h3 onClick={()=>postDetail(item.id)}>{item.title}</h3>
    <p>{item.subtitle}</p>
    </div>
    </div>
    <div className='set'>
    <img src={item.postimg} alt="" />
    </div>
    <div className=''>
    <i class="fa-regular fa-heart icon"></i>
    <i  onClick={()=>comment(item.id,item.title)} class="fa-regular fa-comment icon1 point"></i>
    </div>
    <div className='d-flex'>
      <p><b>{item.title}</b></p>
      <p className='left'>{item.postDetails}</p>
      </div> 
      <p className='point'   onClick={()=>comment(item.id,item.title)}> View All {item.comments.length} Comments</p>
    </>
          )
        })}
  </div>
  )
}

export default Posts;


