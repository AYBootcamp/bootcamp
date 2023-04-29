import styled from '@emotion/styled'
import { useState } from 'react'

import PlaygroundSection from '../../components/PlaygroundSection'

const Box = styled.div`
    border: 1px solid red;
    padding: 2px;
    margin: 2px;
`

interface FlexBoxOptions {
    justifyContent: string
    flexDirection: string
}

const Flexbox = () => {
    const [flexOptions, setFlexOptions] = useState<FlexBoxOptions>({
        // default flex values
        justifyContent: 'flex-start',
        flexDirection: 'row',
    })

    const justifyContent = [
        {
            value: 'flex-start',
        },
        {
            value: 'flex-end',
        },
        {
            value: 'center',
        },
        {
            value: 'space-between',
        },
        {
            value: 'space-around',
        },
        {
            value: 'space-evenly',
        },
    ]
    const direction = [
        {
            value: 'row',
        },
        {
            value: 'column',
        },
        {
            value: 'row-reverse',
        },
        {
            value: 'column-reverse',
        },
    ]

    const optionsToRender = [
        { name: 'flexDirection', options: direction },
        { name: 'justifyContent', options: justifyContent },
    ]
    return (
        <PlaygroundSection
            title="Flexbox"
            guide={{
                label: 'Flexbox Guide',
                url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
            }}
        >
            <div id="flex-box">
                <div>
                    <h3>Flex Options</h3>
                    {optionsToRender.map((style) => (
                        <div key={style.name}>
                            <h4>{style.name}</h4>
                            {style.options.map((option) => (
                                <label
                                    key={option.value}
                                    style={{ margin: '0 5px' }}
                                >
                                    <input
                                        type="radio"
                                        name={style.name}
                                        checked={
                                            flexOptions[
                                                style.name as keyof FlexBoxOptions
                                            ] === option.value
                                        }
                                        onClick={() =>
                                            setFlexOptions((state) => {
                                                return {
                                                    ...state,
                                                    [style.name]: option.value,
                                                }
                                            })
                                        }
                                    />
                                    {option.value}
                                </label>
                            ))}
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        border: '1px solid black',
                        height: '300px',
                        margin: '5px',
                        // flex styles
                        gap: '5px',
                        display: 'flex',
                        justifyContent: flexOptions.justifyContent,
                        flexDirection: flexOptions.flexDirection as any,
                    }}
                >
                    <Box>BOX 1</Box>
                    <Box>BOX 2</Box>
                    <Box>BOX 3</Box>
                </div>
            </div>
        </PlaygroundSection>
    )
}

export default Flexbox
