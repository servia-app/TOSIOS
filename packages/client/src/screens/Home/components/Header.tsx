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
                        fontFamily: "'Luckiest Guy', cursive",
                        fontSize: 14,
                        color: '#FF7A1A',
                        letterSpacing: 4,
                    }}
                >
                    CLIPZY
                </span>
                <span
                    style={{
                        fontFamily: "'Luckiest Guy', cursive",
                        fontSize: 64,
                        lineHeight: 1,
                        marginTop: -4,
                        background: 'linear-gradient(180deg, #FFD65C 0%, #FF7A1A 55%, #FF3D6E 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextStroke: '3px #1a1414',
                        backgroundClip: 'text',
                        color: 'transparent',
                        filter: 'drop-shadow(0 4px 0 #1a1414)',
                        transform: 'rotate(-2deg)',
                    }}
                >
                    RUMBLE
                </span>
            </View>
        </>
    );
}
