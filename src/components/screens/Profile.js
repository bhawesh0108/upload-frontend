import React, {useEffect, useState, useContext} from 'react'
import { UserContext } from '../../App'
const Profile  = ()=>{
    const [mypics, setPics] = useState([])
    const {state,dispatch} = useContext(UserContext)

    useEffect(() => {
        fetch('/mypost',{
            headers:{
                "Authorization" : "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setPics(result.mypost)
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
               <div>
                 <h4>{state?state.name:"loading"}</h4>
                 <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>

                       <h6>{mypics.length} posts</h6>
                       <h6>{state?state.followers.length:"0"} followers</h6>
                       <h6>{state?state.following.length:"0"} following</h6>
               </div>
           </div>
           <div className="gallery">
               {
                   mypics.map(item=>{
                       return(
                           <img key={item._id} className='item' src={item.photo} alt={item.title} />
                       )
                   })
               }
           </div>
           </div>
       </div>
   )
}


export default Profile