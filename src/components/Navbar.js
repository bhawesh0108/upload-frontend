import { useContext } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { UserContext } from '../App'
const Navbar = ()=>{

    const history = useNavigate();
    const {state,dispatch} = useContext(UserContext);
    const renderList = ()=>{
        if(state)
        {
            return [
                <li><Link to="/Profile">Profile</Link></li>,
                <li><Link to="/create">Create Post</Link></li>,
                <li>
                     <button class="btn #e53935 red darken-1" onClick={onClick=>{
                         localStorage.clear()
                         dispatch({type:"CLEAR"})
                         history('/signin')
                     }}>Sign Out
  
  </button>
                </li>

            ]
        }
        else{
             return [
                <li><Link to="/Signin">Sign IN</Link></li>,
                <li><Link to="/Signup">Sign UP</Link></li>
             ]
        }
    }
    return (
        <nav>
        <div className="nav-wrapper white">
          <Link to={state?"/":"/signin"} className="brand-logo left">Upload</Link>
          <ul id="nav-mobile" className="right">
              {renderList()}
          

           
            
           
          </ul>
        </div>
      </nav>
    )
}

export default Navbar