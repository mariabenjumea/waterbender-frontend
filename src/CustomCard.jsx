import React from "react"
import ChangeHumidity from "./ChangeHumidity"

const CustomCard = ({ name = "Pflanze" }) => {
    return (

        <div className="card">
            <img src={"/images/plant1.png"} className="plantimg" />
            {/* <img src={"./images/plant1.png"} alt="Avatar" style="width:100%"></img> */}
            <div class="container">
                <h4>{name}</h4>
                <p>humidity:</p>
                <p>minimum:</p>
                <div class="buttons">
                    <ChangeHumidity />
                    <button type="button">Water</button>
                </div>
            </div>
        </div>

    )
}

export default CustomCard