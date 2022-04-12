import {Link,useNavigate} from 'react-router-dom'
import {useState,useContext} from "react"
import M from 'materialize-css'
import { UserContext } from '../../App'
const SignIn = ()=>{

    const {state,dispatch} = useContext(UserContext);
    const history = useNavigate()
  
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  /*  const PostData = ()=>{
       // if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
      //  {
      //      M.toast({html:"Invalid Email",classes:"#e53935 red darken-1"})
      //      return;
      //  }
        fetch('/signin',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })

        }).then(res=>res.json())
        .then(data=>{
           if(data.error)
           {
            M.toast({html: data.error,classes:"#e53935 red darken-1"})
           }
           else{
            M.toast({html:"Successfully Signed In",classes:"#4caf50 green"})
            history('/')
           
           } 
        }).catch(err=>{
            console.log(err);
        })
     
    }*/
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
               
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               localStorage.setItem("jwt",data.token)
               localStorage.setItem("user",JSON.stringify(data.user))
               dispatch({type:"USER",payload:data.user})
               M.toast({html:"signedin success",classes:"#43a047 green darken-1"})
               history('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }



    return (
      <div className="mycard">
          <div className="card auth-card">
              <h2>Upload</h2>
              <input type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}>
              </input>
              <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}>
              </input>
              <button class="btn waves-effect waves-light" onClick={PostData}>Sign In
  
  </button>
  <h5><Link to="/Signup">Don't have an account ?</Link></h5>
        

          </div>
      </div>
    )
}

export default SignIn;