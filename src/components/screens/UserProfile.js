import React, {useEffect, useState, useContext} from 'react'
import { UserContext } from '../../App'
import {useParams} from 'react-router-dom'

const Profile  = ()=>{
    const [userProfile,setProfile] = useState(null)

    const {state,dispatch} = useContext(UserContext)
    const {userid} = useParams()
    console.log(userid)
    // console.log("hiii")
  useEffect(()=>{

    fetch(`/user/${userid}`,{
        headers:{
              "Authorization":"Bearer "+localStorage.getItem("jwt")
          }
        }).then(res=>res.json())
        .then(result=>{
            // console.log("hi")
            console.log(result)
          
            setProfile(result)
        })
     },[])
   return (
       <div style={{maxWidth:"650px",margin:"0px auto"}}>
           <div style={{
               display:'flex',
               justifyContent:"space-around",
               margin:"120px 0px",
               borderBottom:"1px solid grey"
           }}>
               <div>
               <img style={{width:"160px",height:"160px",borderRadius:"80px"}} src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" />
               </div>
               {userProfile ? (<div>
               <h4>{userProfile.user.name}</h4>
                   <h5>{userProfile.user.email}</h5>
                   <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                       <h6>{userProfile.posts.length} posts</h6>
                     <h6>40 Followers</h6>
                     <h6>40 Following</h6> 
                 </div>
               </div>): null}
           </div>
           {console.log(userProfile)}
           <div className="gallery">
               {
                  userProfile ?
                   userProfile.posts.map(item=>{
                       return(
                           <img key={item._id} className='item' src={item.photo} alt={item.title} />
                       )
                   }) : null
               }
           </div>
       </div>
   )
 
}


export default Profile