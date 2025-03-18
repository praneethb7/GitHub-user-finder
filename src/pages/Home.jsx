import React, { useState } from "react";
import Loader from "../Components/Loader";
import ErrorMessage from "../Components/ErrorMessage";
import SearchBar from "../Components/SearchBar";
import UserCard from "../Components/UserCard";
import UseGitHubUser from "../hooks/UseGitHubUser";
import Repos from "../Components/Repos";

function Home() {

    const [username, setUsername] = useState("");
    const { user, repos, loading, error } = UseGitHubUser(username);

    return(
        <div className="min-h-screen flex flex-col items-center bg-gray-950 p-6 text-white">
            <h1 className="text 3-xl font-bold mb-6">GitHub User Finder</h1>
            <SearchBar onSearch={setUsername}/>
            {loading && <Loader/>}
            {error && <ErrorMessage message={error}/>}
            {user && <UserCard user={user}/>}
            {repos && <Repos repos={repos}/>}
        </div>
    )
}

export default Home;
