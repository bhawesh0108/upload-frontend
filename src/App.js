import { BrowserRouter,Route,Routes,useNavigate} from "react-router-dom"
import {useEffect,createContext,useReducer,useContext} from 'react'

import Navbar from "./components/Navbar"
import "./App.css"

import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import SignUp from './components/screens/SignUp'
import SignIn from './components/screens/SignIn'
import CreatePost from './components/screens/CreatePost'
import UserProfile from './components/screens/UserProfile'
import SubscribedUserPosts from './components/screens/SubscribesUserPosts'
import {reducer,initialState} from './reducer/userReducer'



export const UserContext = createContext();

const Routing = ()=>{

  const history = useNavigate();
  const {state,dispatch} = useContext(UserContext)

  useEffect(()=>{
      const user = JSON.parse(localStorage.getItem("user"));
      if(user)
      {
        dispatch({type:'USER',payload:user})
        //history('/')
      }
      else{
        // history('/signin')
      }
  },[]);

  return(

  <Routes>
   <Route  exact path="/" element={<Home/>} />
  <Route   exact path="/profile" element={<Profile/>} />
  <Route  exact path="/signup" element={<SignUp/>} />
  <Route  exact path="/signin" element={<SignIn/>} />
  <Route  exact path="/create" element={<CreatePost/>} />
  <Route  exact path="/profile/:userid" element={<UserProfile/>} />
  <Route  exact path="/myfollowingpost" element={<SubscribedUserPosts />} />
 

 </Routes>

  )
}

function App() {

  const [state,dispatch] = useReducer(reducer,initialState);
  return (
  
   <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Navbar />
    <Routing />

  

    </BrowserRouter>
    </UserContext.Provider>
  


    
  );
}

export default App;
