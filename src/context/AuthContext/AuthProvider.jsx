import axios from 'axios';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import auth from '../../firebase/firebase.init';
import AuthContext from './AuthContext';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const singInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('state captured', currentUser)

            if (currentUser?.email) {
                const user = { email: currentUser.email };

                axios.post('https://job-box-server-xi.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log('login token', res.data);
                        setLoading(false);
                    })

            }
            else {
                axios.post('https://job-box-server-xi.vercel.app/logout', {}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log('logout', res.data);
                    setLoading(false);
                })
            }
            
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const AuthInfo = {
       user,
       loading,
       createUser,
       singInUser,
       signOutUser,
       singInWithGoogle
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;