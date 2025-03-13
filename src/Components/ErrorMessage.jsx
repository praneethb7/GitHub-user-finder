import React from "react";

function ErrorMessage({message}){
    return(
        <div className="p-4 text-red-500 bg-red-100 border border-red-400 rounded-lg shadow-md text-center">
            ❌{message}
            </div>
    )
};

export default ErrorMessage;