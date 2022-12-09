import React from 'react'
import {useParams,useNavigate} from "react-router-dom"
import { messages } from '../data';
function Inbox({message,data}) {
    const navigate=useNavigate();
    const params=useParams();
    const homescreen=()=>{
      let path="/";
      navigate(path);
    }
    console.log(message[0].inbox[0].messageid);
    console.log(params.id);

  const filtered = message.filter(obj => {
    return obj.userid == params.id;
  });
  console.log(filtered[0]);

  return (
   <div className="container">
     <i onClick={()=>homescreen()} className="fa-solid fa-angle-left icon3 point"></i>
     <div className='d-flex justify-content-center align-items-center top'>
        <div className="profile3">
       <img src={filtered[0].profileimg} alt="inbox"/>
       </div>
        <h4>{filtered[0].username}</h4>
       {data[0].followers>1000?<i class="fa-solid fa-check clr icon"></i>:""}
      </div>
      <div className="inboxMessages d-flex flex-column">
        {filtered[0].inbox.map((item)=>{
            if(item.messageid===123){
            return(
            <div className="recieveMessage">
                
                {item.message}
            </div>
            )
            }
            else{
                return (
                    <div className="sendMessage">
                    {item.message}
                </div>
                )
            } 
        })}

    </div>

   </div>
  )
}

export default Inbox