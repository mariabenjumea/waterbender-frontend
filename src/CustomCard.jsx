import React from "react"
import ChangeHumidity from "./ChangeHumidity"
import Image from "./images/plant1.png";


// und dann wird die prop "plant" so auseinander genommen
const CustomCard = ({ plant: { PlantID, Name = "Pflanze", Humidity = 0, MinHumidity = 0 } = {}, refresh }) => {
    // wir reichen diese funktion aus App.jsx (refresh) einfach weiter durch an den component der das dann callt, nachdem die humidity im backend geändert wurde
    return (

        <div className="card">
            <div class="container">
                <img src={Image} className="plantimg" />
                <h4>{Name} (#{PlantID})</h4>
                <p>humidity: {Humidity}</p>
                <p>minimum: {MinHumidity}</p>
                <div class="buttons">
                    <ChangeHumidity refresh={refresh} id={PlantID} />
                </div>
            </div>
        </div>

    )
}

export default CustomCard