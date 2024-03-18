import { useState , useEffect } from "react"
import { useDispatch } from 'react-redux'
import authService from "./appWrite/auth";
import {login , logout} from "./store/authSlice"

function App() {
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => {
      setLoading = false;
    })
  } , [])

  return !loading ? (
    <div>
      
    </div>
  ) : null
}

export default App
