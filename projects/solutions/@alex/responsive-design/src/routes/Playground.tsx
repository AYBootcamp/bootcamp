import styled from '@emotion/styled'
import { useState } from 'react'

import Clamp from './PlaygroundComponents/Clamp'
import Flexbox from './PlaygroundComponents/Flexbox'
import MaterialUI from './PlaygroundComponents/MaterialUI'
import MediaQuery from './PlaygroundComponents/MediaQuery'
import Units from './PlaygroundComponents/Units'

const CheckboxContainer = styled.div`
    & > * {
        margin: 0 5px;
        text-transform: capitalize;
    }
`

interface PlaygroundComponents {
    flexBox: boolean
    units: boolean
    mediaQuery: boolean
    clamp: boolean
    materialUI: boolean
}

const Playground = () => {
    const [shouldDisplayComponent, setShouldDisplayComponent] =
        useState<PlaygroundComponents>({
            flexBox: false,
            units: false,
            mediaQuery: false,
            clamp: false,
            materialUI: false,
        })

    const componentCheckboxes: Array<keyof PlaygroundComponents> = [
        'flexBox',
        'units',
        'mediaQuery',
        'clamp',
        'materialUI',
    ]
    return (
        <div>
            <h1>Playground</h1>
            <h4>Try different options and screen sizes!</h4>
            <CheckboxContainer>
                <span>Show:</span>
                {componentCheckboxes.map((component) => (
                    <label key={component}>
                        <input
                            type="checkbox"
                            checked={shouldDisplayComponent[component]}
                            onChange={(e) =>
                                setShouldDisplayComponent((state) => ({
                                    ...state,
                                    [component]: e.target.checked,
                                }))
                            }
                        ></input>
                        {component}
                    </label>
                ))}
            </CheckboxContainer>

            {shouldDisplayComponent.flexBox && (
                <>
                    <Flexbox />
                    <hr />
                </>
            )}
            {shouldDisplayComponent.units && (
                <>
                    <Units />
                    <hr />
                </>
            )}
            {shouldDisplayComponent.mediaQuery && (
                <>
                    <MediaQuery />
                    <hr />
                </>
            )}
            {shouldDisplayComponent.clamp && (
                <>
                    <Clamp />
                    <hr />
                </>
            )}
            {shouldDisplayComponent.materialUI && (
                <>
                    <MaterialUI />
                    <hr />
                </>
            )}
        </div>
    )
}

export default Playground
