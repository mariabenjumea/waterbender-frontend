import React from "react"
import ChangeHumidity from "./ChangeHumidity"
import Image from "./images/plant1.png";


const CustomCard = ({ name = "Pflanze", humidity = 0, minimum = 0 }) => {

    return (

        <div className="card">
            <div class="container">
                <img src={Image} className="plantimg" />
                <h4>{name}</h4>
                <p>humidity: {humidity}</p>
                <p>minimum: {minimum}</p>
                <div class="buttons">
                    <ChangeHumidity />
                </div>
            </div>
        </div>

    )
}

export default CustomCard