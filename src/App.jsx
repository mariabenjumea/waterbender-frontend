import React, { useState, useEffect } from "react"
import './index.css';
import CustomCard from "./CustomCard";
import { MantineProvider } from '@mantine/core';
import axios from "axios"
import Logo from "./images/waterbender.png";

const App = () => {

    /*

    let test = 1

    test = 2
    */
    // const [test, setTest] = useState(1)

    // // wird einmal beim app start ausgeführt
    // useEffect(() => {
    //     setTest(2)
    // }, [])

    const [plants, setPlants] = useState([])

    useEffect(() => {
        // wird beim start/mount ausgeführt
        axios({
            url: "http://localhost:6969/Plants",
            method: "GET",
        }).then((response) => {
            const { data } = response
            console.log("alle plants", data)
            setPlants(data)
        })
    }, [])

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <div>
                <div className="logocontainer">
                    <img src={Logo} className="logo" />
                </div>
                <div className='carousel'>
                    {plants.map(plant => <CustomCard name={plant.Name} humidity={plant.Humidity} minimum={plant.MinHumidity} />)}
                </div>
                <div>
                    <footer>
                        <p class="copyright">© WATERBENDER - IoT 2022</p>
                    </footer>
                </div>
            </div>
        </MantineProvider >
    )
}

export default App