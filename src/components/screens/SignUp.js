import {Link,useNavigate} from 'react-router-dom'
import {useState,useEffect} from "react"
import M from 'materialize-css'
const SignUp = ()=>{
     const history = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [image,setImage] = useState('')
    const [url,setUrl] = useState(undefined)
    useEffect(()=>{
        if(url){
            uploadFields()
        }
    },[url])
    const uploadPic =()=>{
        console.log('Upload Pic');
        console.log(url);
        
        const data = new FormData()
        data.append('file',image)
        data.append('upload_preset','upload')
        data.append('cloud_name','ddlgib7yw')
        fetch("https://api.cloudinary.com/v1_1/ddlgib7yw/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("URL Uploaded");
            console.log(data.url);
            
           setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
    }    
    const uploadFields = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        console.log('Upload Field');
        console.log(url);
        
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email,
                pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:data.message,classes:"#43a047 green darken-1"})
               history.push('/signin')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    const PostData = ()=>{
        if(image){
            console.log("Image");
            console.log(image);
            uploadPic()

        }else{
            uploadFields()
        }
        
        // if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        // {
        //     M.toast({html:"Invalid Email",classes:"#e53935 red darken-1"})
        //     return;
        // }
        // setTimeout( ()=> {
        //     console.log('Post Data');
        //     console.log(url);
        //     fetch('/signup',{
        //         method:"post",
        //         headers:{
        //             "Content-Type":"application/json"
        //         },
        //         body:JSON.stringify({
        //             name,
        //             email,
        //             password,
        //             pic: url
        //         })
    
        //     }).then(res=>res.json())
        //     .then(data=>{
        //        if(data.error)
        //        {
        //         M.toast({html: data.error,classes:"#e53935 red darken-1"})
        //        }
        //        else{
        //         M.toast({html: data.message,classes:"#4caf50 green"})
        //         history('/Signin')
               
        //        } 
        //     }).catch(err=>{
        //         console.log(err);
        //     })
        // }, 3000  );

        
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
              <div className="file-field input-field">
      <div className="btn">
        <span>Upload Image</span>
        <input type="file" onChange={e=>{setImage(e.target.files[0])}} />
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
    </div>
              <button class="btn waves-effect waves-light" onClick={PostData}>Sign Up
  
  </button>
  <h5><Link to="/Signin">Already have an account ?</Link></h5>
        

          </div>
      </div>
    )
}

export default SignUp;