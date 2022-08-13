import React from "react"

const CustomCard = ({ name = "Pflanze" }) => {
    return (
        <div class="card">
            <img src="img_avatar.png" alt="Plant Avatar" style="width:100%" />
            <div class="container">
                <h4><b>{name}</b></h4>
                <p>Feuchtigkeit:</p>
                <p>Minimum:</p>
            </div>
        </div>
    )
}

export default CustomCard