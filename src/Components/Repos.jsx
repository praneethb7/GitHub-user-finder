function Repos({repos}){
    return(
       <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-4">Top Repositories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {repos.map((repo)=>(
            <div key={repo.id}
            className="bg-gray-800 rounded p-4 rounded-lg shadow-md transition-transform transition hover:scale-105 ">
                <h3>
                    <a className="text-lg font-bold text-blue-400" 
                    href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                    </a>
                </h3>
                <p className="text-grey-400 text-sm mt-1">{repo.fork ? "forked" : ""}</p>
                <p className="text-gray-300 text-sm">{repo.private ? "Private" : "Public"}</p>
                <p className="text-gray-500 text-sm italic">{repo.language|| "Unknown"}</p>
            </div>
        ))}
        </div>
       </div>
    )
}

export default Repos;