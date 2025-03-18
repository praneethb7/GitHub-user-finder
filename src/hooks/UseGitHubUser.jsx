import React, { useState, useEffect } from "react";
import axios from "axios";

function UseGitHubUser(username) {

    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) return;

        async function fetchUser() {
            setLoading(true);
            setError(null);

            try {
                const [userRes, reposRes] = await Promise.all([
                    axios.get(`https://api.github.com/users/${username}`),
                    axios.get(`https://api.github.com/users/${username}/repos?sort=start&per_page=5`),
                ]);
                setUser(userRes.data);
                setRepos(reposRes.data)
            } catch (err) {
                setError(err.response?.data?.message || "User not found");
                console.log(err)
                setUser(null);
                setRepos([]);
            } finally {
                setLoading(false);
            }
        }

        fetchUser();
    }, [username])

    return { user, repos, loading, error }
};

export default UseGitHubUser;