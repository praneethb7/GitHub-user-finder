import React, { useState } from "react";
import Loader from "../Components/Loader";
import ErrorMessage from "../Components/ErrorMessage";
import SearchBar from "../Components/SearchBar";
import UserCard from "../Components/UserCard";
import UseGitHubUser from "../hooks/UseGitHubUser";

function Home() {

    const [username, setUsername] = useState("");
    const { user, loading, error } = UseGitHubUser(username);

    return(
        <div className="home">
            <h1>GitHub User Finder</h1>
            <SearchBar onSearch={setUsername}/>
            {loading && <Loader/>}
            {error && <ErrorMessage message={error}/>}
            {user && <UserCard user={user}/>}
        </div>
    )
}

export default Home;
