import React from "react"
import "./LoginPage.css"
import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

const LoginPage = () => {
    const [opened, setOpened] = useState(false);
    return (
        <div>

            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Introduce yourself!"
            >
                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" required />

                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required />

                <button type="submit">Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
            </Modal>

            <Group position="center">
                <Button onClick={() => setOpened(true)}>Login</Button>
            </Group>
        </div>
    )
}

export default LoginPage