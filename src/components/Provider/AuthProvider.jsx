import React, {  createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged  
    ,signInWithEmailAndPassword,signInWithPopup,signOut, updateProfile } from "firebase/auth";
import { auth } from '../Auth/Firebase';


export const AuthContext=createContext(null);

const signGoogle = new GoogleAuthProvider();

  const AuthProvider = ({children}) => {
const[user,setUser]=useState()

const [loading,setLoading]=useState(true)

const createUser=(email,password)=>{
  setLoading(true)
  return  createUserWithEmailAndPassword(auth, email, password)
}

const updataUser=( updata)=>{
return   updateProfile(auth.currentUser,updata)
}
const  sigNOut=()=>{
  return signOut(auth)
}

const logIn=(email,password)=>{
  setLoading(true)
  return  signInWithEmailAndPassword(auth, email, password)
}
useEffect (()=>{
  const  unsubscribe =onAuthStateChanged(auth, CurrentUser => {
  setUser(CurrentUser) 
  setLoading(false)
  },[]);
return () =>{
unsubscribe()
}

})

const logGoogle=()=>{
  return signInWithPopup(auth, signGoogle)
}

  const authData={
    user,
    setUser,
    createUser,
    sigNOut,
    logIn,
    loading,
    setLoading,
    updataUser,
    logGoogle,
  }
    return<AuthContext value={authData}>{children}</AuthContext>
       
    
};

export default AuthProvider;