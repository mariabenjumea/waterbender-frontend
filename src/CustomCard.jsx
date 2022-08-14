import React from "react"

import './customcard.css';

const CustomCard = ({ name = "Pflanze" }) => {
    return (

        <div className="card">
            <div class="container">
                <h4><b>{name}</b></h4>
                <p>Feuchtigkeit:</p>
                <p>Minimum:</p>
            </div>
        </div>

    )
}

export default CustomCard