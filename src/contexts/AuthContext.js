import React, { useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, database, storage } from "../firebase";
import { ref, set, child, push, get } from "firebase/database";
import { ref as storRef, uploadBytes, getDownloadURL } from "firebase/storage";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      return true;
    } catch (e) {
      return false;
    }
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const addPost = async (title, content, file) => {
    const newPostKey = push(child(ref(database), 'posts')).key;

    const data = {
      title,
      content
    }

    if(file){
      const storageRef = storRef(storage, 'images/' + file.name);
      const uploadTask = await uploadBytes(storageRef, file);
      const urlTumbinail = await getDownloadURL(uploadTask.ref)
      data.img = urlTumbinail
    }
    set(ref(database, "posts/" + newPostKey), data);
  };

  const getPosts = async () => {
    const res = await get(child(ref(database), "posts"))
    return Object.values(res.val())
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    register,
    login,
    addPost,
    getPosts,
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
