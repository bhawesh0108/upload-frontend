import {Link,useNavigate} from 'react-router-dom'
import {useState} from "react"
import M from 'materialize-css'
const SignUp = ()=>{
     const history = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
            M.toast({html:"Invalid Email",classes:"#e53935 red darken-1"})
            return;
        }
        fetch('/signup',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password
            })

        }).then(res=>res.json())
        .then(data=>{
           if(data.error)
           {
            M.toast({html: data.error,classes:"#e53935 red darken-1"})
           }
           else{
            M.toast({html: data.message,classes:"#4caf50 green"})
            history('/Signin')
           
           } 
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
      <div className="mycard">
          <div className="card auth-card">
              <h2>Upload</h2>
              <input type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
              <input type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}>
              </input>
              <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}>
              </input>
              <button class="btn waves-effect waves-light" onClick={PostData}>Sign Up
  
  </button>
  <h5><Link to="/Signin">Already have an account ?</Link></h5>
        

          </div>
      </div>
    )
}

export default SignUp;