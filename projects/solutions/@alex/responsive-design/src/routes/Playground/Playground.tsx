import styled from '@emotion/styled'
import { useState } from 'react'

import Clamp from './Clamp'
import DropboxExample from './DropboxExample'
import Flexbox from './Flexbox'
import Localization from './Localization'
import MaterialUI from './MaterialUI'
import MediaQuery from './MediaQuery'
import Units from './Units'

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
    localization: boolean
    dropboxExample: boolean
}

const Playground = () => {
    const [shouldDisplayComponent, setShouldDisplayComponent] =
        useState<PlaygroundComponents>({
            flexBox: false,
            units: false,
            mediaQuery: false,
            clamp: false,
            materialUI: false,
            localization: false,
            dropboxExample: true,
        })

    const componentCheckboxes: Array<keyof PlaygroundComponents> = [
        'flexBox',
        'units',
        'mediaQuery',
        'clamp',
        'materialUI',
        'localization',
        'dropboxExample',
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
            {shouldDisplayComponent.localization && (
                <>
                    <Localization />
                    <hr />
                </>
            )}
            {shouldDisplayComponent.dropboxExample && (
                <>
                    <DropboxExample />
                    <hr />
                </>
            )}
        </div>
    )
}

export default Playground
