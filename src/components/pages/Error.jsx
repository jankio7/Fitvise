import { Link } from "react-router-dom";

export default function Error(){
    return(
        <div className="text-center">
        <h1 className="text-center">404</h1>
        <h1 className="text-center">Page not found</h1>
        <Link to="/">Back to Home</Link>
        </div>
    )
}