import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Router Home</h1>
            <Link to="/registry">Registry</Link>
        </div>
    )
}

export default Home;