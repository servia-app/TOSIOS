import { Constants } from '@tosios/common';
import React, { useState } from 'react';
import { Box, Button, Input, Space, Text, View } from '../../../components';

interface NameFieldProps {}

export function NameField({}: NameFieldProps) {
    const [name, setName] = useState(localStorage.getItem('playerName') || '');
    const [changed, setChanged] = useState(false);

    function handleChange(event: any) {
        setName(event.target.value);
        setChanged(true);
    }

    function handleSave() {
        localStorage.setItem('playerName', name);
        setChanged(false);
    }

    if (name && !changed) {
        return (
            <Box
                style={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <View flex>
                    <Text>{`Bonjour, ${name} !`}</Text>
                </View>
            </Box>
        );
    }

    return (
        <Box
            style={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            <View flex>
                <Text>Choisissez votre nom :</Text>
            </View>
            <Space size="xs" />
            <Input value={name} placeholder="Name" maxLength={Constants.PLAYER_NAME_MAX} onChange={handleChange} />
            {changed && (
                <>
                    <Space size="xs" />
                    <Button title="Save" text="Save" onClick={handleSave} />
                </>
            )}
        </Box>
    );
}
