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
        refresh() // hier wird beim start einmal alles geladen
    }, [])

    // diese funktion lädt alle pflanzen (einmal beim init und einmal wenn wir was geändert haben)
    const refresh = () => {
        axios({
            url: "http://localhost:6969/Plants",
            method: "GET",
        }).then((response) => {
            const { data } = response
            console.log("alle plants", data)
            setPlants(data)
        })
    }
    console.log("alle plants", plants)
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <div>
                <div className="logocontainer">
                    <img src={Logo} className="logo" />
                </div>
                <div className='carousel'>
                    {/* hier besser "plant" das komplette objekt an CustomCard reingeben, nicht alles einzeln wie vorher */}
                    {plants.map(plant => <CustomCard plant={plant} refresh={refresh} />)}
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