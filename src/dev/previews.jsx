import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {ExampleLoaderComponent, PaletteTree} from './palette'
import App from "../App";
import NotFound from "../pages/NotFound/NotFound";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ExampleLoaderComponent">
                <ExampleLoaderComponent/>
            </ComponentPreview>
            <ComponentPreview path="/PaletteTree">
                <PaletteTree/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/NotFound">
                <NotFound/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews