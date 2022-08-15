import React from "react"
import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import axios from "axios"

const ChangeHumidity = () => {
    const [opened, setOpened] = useState(false);

    function changeHumidity() {
        axios
            .put(`${"http://localhost:6969/Plants"}/1`, {
                MinHumidity: 0,
            })

    }

    function onSaveClick() {
        changeHumidity();
        setOpened(false);
    }

    return (
        <div>

            <Modal centered
                opened={opened}
                withCloseButton={false}
                title="Change Minimum Humidity"
            >
                <label for="humidity"><b>Minimum Humidity</b></label>
                <input type="number" placeholder="Enter Minimum Humidity" name="minhumidity" required />
                <button onClick={onSaveClick}/*{changeHumidity}*/ >Save</button>
            </Modal>

            <Group position="center">
                <Button onClick={() => setOpened(true)}>Change Humidity</Button>
            </Group>
        </div>
    )
}

export default ChangeHumidity