import React from 'react';
import { FullPageLoader, Loader, LoadingText, Letter } from './LoaderStyles'

const LoadingScreen = () => {
    const text = "Chargement en cours ";
    return (
        <FullPageLoader>
            <Loader />
            <LoadingText>
                <>
                    {text.split("").map((letter, index) => (
                        <Letter key={index} $delay={`${index * 0.1}s`}>
                            {letter === " " ? "\u00A0" : letter}
                        </Letter>
                    ))}
                </>
            </LoadingText>
        </FullPageLoader>
    );
};

export default LoadingScreen;
