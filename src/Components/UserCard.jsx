function UserCard({user}){
    return (
      <div className=" mt-4 max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg text-white text-center">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
        />
        <h2 className="mt-4 text-2xl font-semibold">{user.name || user.login}</h2>
        <p className="text-gray-400">@{user.login}</p>
        <p className="mt-2">{user.bio || "No bio available."}</p>
        <div className="mt-4 flex justify-center gap-4">
          <span className="px-4 py-2 bg-gray-700 rounded-lg">
            Followers: {user.followers}
          </span>
          <span className="px-4 py-2 bg-gray-700 rounded-lg">
            Following: {user.following}
          </span>
        </div>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-cyan-800 px-4 py-2 rounded-lg hover:bg-cyan-700 transition"
        >
          View Profile
        </a>
      </div>
    );
  };
  
  export default UserCard;
  