import { Constants } from '@tosios/common';
import React from 'react';
import { Helmet } from 'react-helmet';
import { View } from '../../../components';

export function Header(): React.ReactElement {
    return (
        <>
            <Helmet>
                <title>{`${Constants.APP_TITLE} - Home`}</title>
                <meta
                    name="description"
                    content="Clipzy Rumble - Un jeu de combat multijoueur."
                />
            </Helmet>

            <View
                flex
                center
                column
                style={{
                    width: 700,
                    maxWidth: '100%',
                }}
            >
                <span
                    style={{
                        color: '#FF7A1A',
                        fontSize: 40,
                        fontWeight: 800,
                        letterSpacing: 1,
                    }}
                >
                    Clipzy Rumble
                </span>
            </View>
        </>
    );
}
