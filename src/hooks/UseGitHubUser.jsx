import React, { useState, useEffect } from "react";
import axios from "axios";

function useGitHubUser(username) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(()=>{
        if(!username) return;

        async function fetchUser(){
            setLoading(true);
            setError(null);

            try{
                const response = await axios.get(`https://api.github.com/users/${username}`);
                setUser(response.data);
            } catch (err) {
                setError(err.response?.data?.message || "User not found");
                setUser(null); 
            } finally {
                setLoading(false);
            }
        }

        fetchUser();
    },[username])

    return{user,loading,error}
};

export default useGitHubUser;