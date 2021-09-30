import React, { useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, database } from "../firebase";
import { ref, set, child, push } from "firebase/database";

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

  const addPost = (title, content) => {
    const newPostKey = push(child(ref(database), 'posts')).key;
    set(ref(database, "posts/" + newPostKey), {
      title,
      content
    });
  };

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
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
