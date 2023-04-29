import styled from '@emotion/styled'
import { useState } from 'react'

import PlaygroundSection from '../../components/PlaygroundSection'

const Box = styled.div`
    border: 1px solid red;
    padding: 2px;
    margin: 2px;
`

const Flexbox = () => {
    const [flexOptions, setFlexOptions] = useState({
        // default flex values
        justifyContent: 'flex-start',
        flexDirection: 'row',
    })

    const justifyContent = [
        {
            name: 'flex-start',
        },
        {
            name: 'flex-end',
        },
        {
            name: 'center',
        },
        {
            name: 'space-between',
        },
        {
            name: 'space-around',
        },
        {
            name: 'space-evenly',
        },
    ]
    const direction = [
        {
            name: 'row',
        },
        {
            name: 'column',
        },
        {
            name: 'row-reverse',
        },
        {
            name: 'column-reverse',
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
                    <h3>flex options</h3>
                    {optionsToRender.map((style) => (
                        <div key={style.name}>
                            <h4>{style.name}</h4>
                            {style.options.map((option) => (
                                <label
                                    key={option.name}
                                    style={{ margin: '0 5px' }}
                                >
                                    <input
                                        type="radio"
                                        name={style.name}
                                        onClick={() =>
                                            setFlexOptions((state) => {
                                                return {
                                                    ...state,
                                                    [style.name]: option.name,
                                                }
                                            })
                                        }
                                    />
                                    {option.name}
                                </label>
                            ))}
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        border: '1px solid black',
                        // margin: '5px',
                        // flex styles
                        gap: '5px',
                        display: 'flex',
                        justifyContent: flexOptions.justifyContent,
                        flexDirection: flexOptions.flexDirection as any,
                    }}
                >
                    <Box>BOX 1</Box>
                    <Box>BOX 2</Box>
                </div>
            </div>
        </PlaygroundSection>
    )
}

export default Flexbox
