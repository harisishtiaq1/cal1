import React from 'react'

export const TodoITem = ({todo}) => {
  console.log(todo);
  return (
    <>
    {
      todo.map((item)=>{
        return(
          <>
<h1>{item.id}</h1>
<h1>{item.title}</h1>
<p>{item.subtitle}</p>
<img src={item.profileimg} alt="ProfileImage" className='width'/>
</>
        )
      })
    }
    </>
  )
}
