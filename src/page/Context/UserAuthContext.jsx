import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// import { auth } from "../../components/firebase";
import { useEffect } from "react";
import { useState } from "react";
import { authentification } from "../../firebase";
// import { auth } from "../../firebase";
// import { auth } from "../../components/firebase";

const userAuthContext = createContext();
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");

  function signUp(email, password) {
    return createUserWithEmailAndPassword(authentification, email, password);
  }

  function signin(email, password) {
    return signInWithEmailAndPassword(authentification, email, password);
  }
  function logOut() {
    return signOut(authentification);
  }
  function googleSignin() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(authentification, googleAuthProvider);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(authentification, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return (
    <userAuthContext.Provider
      value={{ user, signUp, signin, logOut, googleSignin }}
    >
      {children}
    </userAuthContext.Provider>
  );
}
export function UserAuth() {
  return useContext(userAuthContext);
}