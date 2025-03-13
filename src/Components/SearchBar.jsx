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
        <div className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg shadow-md w-full max-w-md mx-auto">
            <input type="text" placeholder="Enter GitHub User Name"
             value={username} onChange={(e)=>setUsername(e.target.value)} onKeyDown={(e)=>listenEvent(e)}
             className="px-4 py-2 text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"></input>
             <button onClick={handleSearch}
             className="px-4 py-2 text-white bg-slate-950 rounded-lg  hover:bg-slate-900 transition border border-gray-700 rounded-lg">Search</button>
        </div>
    )
}

export default SearchBar;