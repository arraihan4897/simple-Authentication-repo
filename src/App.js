import { React ,useState} from 'react';
import {getAuth,signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth';
import app from './firebase/Firebase.init'

const App = () => {
  const [user,setUser]=useState({});
   const GoogleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);
 
  const SignIn = ()=> {
    signInWithPopup (auth,GoogleProvider)
   .then (result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch ( error=> {
      console.error('error',error)
    })
  }
  const SignOut= ()=> {
    signOut(auth)
    .then (()=>{
      setUser({});
    }
    )
    .catch (()=>{
        setUser({})
    })
  }
  return (
    <div className='App'>
      {
        user.uid ?     <button onClick={SignOut}>
        Google Sign Out
      </button>
      :
       <button onClick={SignIn}>
        Google Sign In
      </button>
      }
     

      {
        user.uid && <div>
          <h3>Name: {user.displayName}</h3>
          <p><h5> Email : {user.email} </h5></p>
          <img src={user.photoURL} alt="" />
        </div>
      }
     
    </div>
  );
};

export default App;