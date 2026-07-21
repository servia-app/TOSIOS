import { Constants } from '@tosios/common';
import React, { useState } from 'react';
import { Button, Input, ListItem, Select, Space, Text, View } from '../../../components';

const PlayersCountList: ListItem[] = Constants.ROOM_PLAYERS_SCALES.map((value) => ({
    value,
    title: `${value} joueurs`,
}));

interface NewGameFieldProps {
    onCreate: (name: string, maxPlayers: number, map: string, mode: string) => void;
}

export function NewGameField({ onCreate }: NewGameFieldProps) {
    const [name, setName] = useState('');
    const [maxPlayers, setMaxPlayers] = useState(PlayersCountList[0].value);

    function handleRoomNameChange(event: any) {
        const roomName = event.target.value;
        localStorage.setItem('roomName', roomName);
        setName(roomName);
    }

    function handleCreate() {
        onCreate(name, maxPlayers, 'gigantic', 'deathmatch');
    }

    return (
        <View
            flex
            style={{
                alignItems: 'flex-start',
                flexDirection: 'column',
            }}
        >
            <View style={{ width: '100%' }}>
                <Text>Nom de la partie :</Text>
                <Space size="xxs" />
                <Input
                    placeholder="Nom"
                    value={name}
                    maxLength={Constants.ROOM_NAME_MAX}
                    onChange={handleRoomNameChange}
                />
                <Space size="s" />

                <Text>Nombre de joueurs maximal :</Text>
                <Space size="xxs" />
                <Select
                    value={maxPlayers}
                    values={PlayersCountList}
                    onChange={(event: any) => {
                        setMaxPlayers(event.target.value);
                    }}
                />
                <Space size="s" />

                <View>
                    <Button title="Créer la partie" text="Créer" onClick={handleCreate} />
                </View>
            </View>
        </View>
    );
}
