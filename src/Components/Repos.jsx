function Repos({repos}){
    return(
       <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-4">Top Repositories</h3>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo)=>(
            <div key={repo.id}>
                <h3>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                    </a>
                </h3>
                <p>{repo.fork ? "forked" : ""}</p>
                <p>{repo.private ? "Private" : "Public"}</p>
                <p>{repo.language|| "Unknown"}</p>
            </div>
        ))}
        </div>
       </div>
    )
}

export default Repos;