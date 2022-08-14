import React from "react"
import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

const ChangeHumidity = () => {
    const [opened, setOpened] = useState(false);
    return (
        <div>

            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Change Minimum Humidity"
            >
                <label for="humidity"><b>Minimum Humidity</b></label>
                <input type="number" placeholder="Enter Minimum Humidity" name="humidity" required />
                <button type="submit">Save</button>
            </Modal>

            <Group position="center">
                <Button onClick={() => setOpened(true)}>Change Humidity</Button>
            </Group>
        </div>
    )
}

export default ChangeHumidity