import React, {useState} from "react";

function SearchBar({onSearch}){

    const [username, setUsername] = useState("");

    function handleSearch(){
        if(username.trim!==""){
            onSearch(username);
        }
    }

    function listenEvent(e){
        if(e.key==="Enter"){
            handleSearch();
        }
    }
    return(
        <div className="search-bar">
            <input type="text" placeholder="Enter GitHub User Name"
             value={username} onChange={(e)=>setUsername(e.target.value)} onKeyDown={(e)=>listenEvent(e)}></input>
             <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar;