import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'
const Profile = () => {
    const [mypics, setPics] = useState([])
    const { state, dispatch } = useContext(UserContext)
    const [image, setImage] = useState('')
    const [url, setUrl] = useState('')

    useEffect(() => {
        fetch('/mypost', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                setPics(result.mypost)
            })
    }, [])

    useEffect(()=>{
        if(image)
        {
            console.log('Upload Pic');
            console.log(url);
    
            const data = new FormData()
            data.append('file', image)
            data.append('upload_preset', 'upload')
            data.append('cloud_name', 'ddlgib7yw')
            fetch("https://api.cloudinary.com/v1_1/ddlgib7yw/image/upload", {
                method: "post",
                body: data
            })
                .then(res => res.json())
                .then(data => {
              
                    
    
                    setUrl(data.url)
                    //localStorage.setItem("user",JSON.stringify({...state,pic:data.url}))
                    //dispatch({type:"UPDATEPIC",payload:data.url})

                    fetch('/updatepic',{
                        method:'put',
                        headers:{
                            'Content-Type':'application/json',
                            'Authorization':"Bearer "+localStorage.getItem("jwt")
                        },
                        body:JSON.stringify(
                            {
                                pic:data.url
                            }
                        )
                    }

                    ).then(res=>res.json())
                    .then(result=>{
                        console.log(result)
                        localStorage.setItem("user",JSON.stringify({...state,pic:result.pic}))
                        dispatch({type:"UPDATEPIC",payload:result.pic})
                        window.location.reload();
                    })
                 //   window.location.reload();

                })
                .catch(err => {
                    console.log(err)
                })
        }
    },[image])

    const updatePhoto = (file) => {
        setImage(file)

  

    }
    return (
        <div style={{ maxWidth: "550px", margin: "0px auto" }}>
            <div style={{
                margin: "18px 0px",
                borderBottom: "1px solid grey"
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: "space-around",
                    //    margin:"120px 0px",
                    //    borderBottom:"1px solid grey"
                }}>
                    <div>
                        {/* {console.log(state)} */}
                        <img style={{ width: "200px", height: "200px", borderRadius: "100px" }} src={state ? state.pic : "loading"} />
                    </div>
                    <div>
                        <h5>{state ? state.name : "loading"}</h5>
                        <h5>{state ? state.email : "loading"}</h5>

                        < div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>

                            <h6>{mypics ? mypics.length : "0"} posts</h6>
                            <h6>{state ? state.followers.length : "0"} followers</h6>
                            <h6>{state ? state.following.length : "0"} following</h6>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div style={{
                    position: "relative",
                    margin: "8px 50px",
                }}>

         <div className="file-field input-field" style={{margin:"10px"}}>
                    <div className="btn">
                        <span>Update Pic</span>
                        <input type="file" onChange={e => { updatePhoto(e.target.files[0]) }} />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                    </div>


                </div>

            </div>


            <div className="gallery">
                {
                    mypics ?
                        mypics.map(item => {
                            return (
                                <img key={item._id} className='item' src={item.photo} alt={item.title} />
                            )
                        }) : null
                }
            </div>
        </div>
    )
}


export default Profile