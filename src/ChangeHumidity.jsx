import React from "react"
import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import axios from "axios"

const ChangeHumidity = ({ id, refresh }) => {
    const [opened, setOpened] = useState(false);

    const [minHumidity, setMinHumidity] = useState("")


    function changeHumidity() {
        axios
            .post(`http://localhost:6969/Plant/${id}/MinHumidity`, {
                MinHumidity: minHumidity,
            }).then(() => {
                // also nachdem im backend die humidity gändert wurde, wird diese refresh aus der App.jsx gecalled unddamit alles neu geladen
                refresh()
                setOpened(false);
            })
    }

    function onSaveClick() {
        changeHumidity();
    }

    return (
        <div>

            <Modal centered
                opened={opened}
                withCloseButton={false}
                title="Change Minimum Humidity"
            >
                <label for="humidity"><b>Minimum Humidity</b></label>

                <input type="number" placeholder="Enter Minimum Humidity" name="minhumidity" required value={minHumidity} onChange={({ target: { value } }) => setMinHumidity(value)} />

                <button onClick={onSaveClick} >Save</button>
            </Modal>

            <Group position="center">
                <Button onClick={() => setOpened(true)}>Change Humidity</Button>
            </Group>
        </div>
    )
}

export default ChangeHumidity