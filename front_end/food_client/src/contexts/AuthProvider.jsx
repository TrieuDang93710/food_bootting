import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  // Create an account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // signup with gmail
  const signUpWithGmail = () => {
    return signInWithPopup(auth, googleProvider)
  }
  // Login using email & password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  // Logout
  const logout = () => {
    return signOut(auth)
  }
  // update user profile
  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoURL
    })
  }
  // check signed-in user
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        setLoading(false)
      } else {
        // User is signed out
        // ...
      }
    });
    return () => {
      return unSubcribe()
    }
  }, [])


  const authInfor = {
    user,
    createUser,
    signUpWithGmail,
    login,
    logout,
    updateUserProfile,
    loading
  }
  return (
    <AuthContext.Provider value={authInfor}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider