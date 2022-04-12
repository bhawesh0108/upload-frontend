
/*
import React,{useState,useEffect} from 'react'
import M from 'materialize-css'
// import {useHistory} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const CreatePost = ()=>{
    const navigate = useNavigate();
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")

    const postDetails = ()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","upload")
        data.append("cloud_name","ddlgib7yw")
        fetch("https://api.cloudinary.com/v1_1/cnq/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        //    setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })

        // fetch("/createpost",{
        //     method:"post",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify({
        //         title,
        //         body,
        //         pic:url
        //     })
        // }).then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        //    if(data.error){
        //       M.toast({html: data.error,classes:"#c62828 red darken-3"})
        //    }
        //    else{
         
        //        M.toast({html:"post created successfully",classes:"#43a047 green darken-1"})
        //        navigate('/  ');
        //    }
        // }).catch(err=>{
        //     console.log(err)
        // })
     
    }

    return (
        <div className="card input-field" style={{
            margin:"10px auto",
            maxWidth:"500px",
            textAlign:"center",
            padding:"20px"
        }}>

        <input 
           type="text"
            placeholder="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
        />
        <input
            type="text"
             placeholder="body"
             value={body}
            onChange={(e)=>setBody(e.target.value)}
        />
        <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Uplaod Image</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
        </div>  

        <button className="btn waves-effect waves-light"
        onClick={()=>postDetails()}
        >Submit Post
        </button>

        </div>
    )
}
*/

import {useState,useEffect} from 'react'
import M from 'materialize-css'
import {useNavigate} from 'react-router-dom'

const CreatePost = ()=>{
    const history = useNavigate()
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [image,setImage] = useState('');
    const [url,setUrl] = useState('');

    useEffect(()=>{
        if(url)
        {
            fetch("/createPost",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    title,
                    body,
                    pic:url
                })
            }).then(res=>res.json())
            .then(data=>{
                console.log(data)
               if(data.error){
                  M.toast({html: data.error,classes:"#c62828 red darken-3"})
               }
               else{
             
                   M.toast({html:"Posted Successfully",classes:"#43a047 green darken-1"})
                   history('/')
               }
            }).catch(err=>{
                console.log(err)
            })
        }
    },[url])

    const postDetail = ()=>{
        const data = new FormData();
        data.append('file',image)
        data.append('upload_preset','upload')
        data.append('cloud_name','ddlgib7yw')
        fetch("https://api.cloudinary.com/v1_1/ddlgib7yw/image/upload",{
            method:"post",
            body:data
        }).then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        }).catch(err=>{
            console.log(err)
        })

       
    }



    return (
        <div className="card input-filed" style={{
            margin:"40px auto",
            padding:"20px",
            textAlign:"center",
            maxWidth:"550px"
        }}>
            <input type="text" placeholder="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} ></input>
            <input type="text" placeholder="body" value={body} onChange={(e)=>{setBody(e.target.value)}}></input>
                <div className="file-field input-field">
      <div className="btn">
        <span>Upload Image</span>
        <input type="file" onChange={e=>{setImage(e.target.files[0])}} />
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
    </div>
    <button class="btn waves-effect waves-light" onClick={postDetail}>Submit Post
  
  </button>

        </div>
    )
}

export default CreatePost;