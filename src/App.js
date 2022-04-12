import { BrowserRouter,Route,Routes,useNavigate} from "react-router-dom"
import {useEffect,createContext,useReducer,useContext} from 'react'

import Navbar from "./components/Navbar"
import "./App.css"

import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import SignUp from './components/screens/SignUp'
import SignIn from './components/screens/SignIn'
import CreatePost from './components/screens/CreatePost'
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
        // history('/')
      }
      else{
        history.push('/signin')
      }
  },[]);

  return(

  <Routes>
  <Route  exact path="/" element={<Home/>} />
  <Route   path="/profile" element={<Profile/>} />
  <Route   path="/signup" element={<SignUp/>} />
  <Route   path="/signin" element={<SignIn/>} />
  <Route   path="/create" element={<CreatePost/>} />
  
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
