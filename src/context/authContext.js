import { useEffect } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
        //Have to do

        setCurentUser({
            id: 1,
            name: 'Abdullah Musafir',
            profilePic: 'https://s3.envato.com/files/247731702/MAS_1112.jpg'
        });
    };

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
};