import React from "react"
import ChangeHumidity from "./ChangeHumidity"
import Image from "./images/plant1.png";


const CustomCard = ({ name = "Pflanze", humidity = 0, minimum = 0 }) => {

    return (

        <div className="card">

            {/* <img src={"./images/plant1.png"} alt="Avatar" style="width:100%"></img> */}
            <div class="container">
                <img src={Image} className="plantimg" />
                <h4>{name}</h4>
                <p>humidity: {humidity}</p>
                <p>minimum: {minimum}</p>
                <div class="buttons">
                    <ChangeHumidity />
                    {/* <button type="button">Water</button> */}
                </div>
            </div>
        </div>

    )
}

export default CustomCard