import React from "react"
import "./addplant.css"
import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

const AddPlant = () => {
    const [opened, setOpened] = useState(false);
    return (
        <div>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Add New Plant"
            >
                <label for="plantname"><b>Plant Name</b></label>
                <input type="text" placeholder="Enter Plant Name" name="plantname" required />

                <label for="humidity"><b>Minimum Humidity</b></label>
                <input type="number" placeholder="Enter Minimum Humidity" name="humidity" required />

                <button type="submit">Add</button>

            </Modal>

            <Group position="center">
                <Button onClick={() => setOpened(true)}>Add New Plant</Button>
            </Group>
        </div>
    )
}

export default AddPlant