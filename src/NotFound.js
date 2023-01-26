import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Quirky text about how our engineers have missplaced this page</h2>
            <p>This page cannot be found :/</p>
            <Link to="/">Click here to go home again</Link>
        </div>
     );
}
 
export default NotFound;