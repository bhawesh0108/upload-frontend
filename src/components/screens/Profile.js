import React from 'react'

const Profile  = ()=>{
   return (
  /*     <div style={{maxWidth:"550px",margin:"0px auto"}} >
           <div style={{
              display:"flex",
               justifyContent:"space-around",  
              margin:"18px 0px",
               borderBottom:"1px solid grey"
           }}>
               <div>
                   <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                   src= "#"
                   />
               </div>

               <div>
                   <h4>Bhawesh</h4>
                   <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                       <h6>40 posts</h6>
                       <h6>40 followers</h6>
                       <h6>40 following</h6>
                   </div>
               </div>
           </div>

           <div className="gallery">  
               <img className="item" src="#1"/>         
               <img className="item" src="#2"/>     
               <img className="item" src="#3"/>     
           </div>
       </div>*/


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
                 <h4>Kirti Sharma</h4>
                 <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                     <h5>40 Posts</h5>
                     <h5>40 Followers</h5>
                     <h5>40 Following</h5>
                 </div>
               </div>
           </div>
           <div className="gallery">
               <img className="item" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"></img>
               <img className="item" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"></img>
               <img className="item" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"></img>
               <img className="item" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"></img>
               <img className="item" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"></img>
               <img className="item" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"></img>


           </div>
       </div>
   )
}


export default Profile