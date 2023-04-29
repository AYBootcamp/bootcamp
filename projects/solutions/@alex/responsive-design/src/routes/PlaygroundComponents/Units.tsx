import { useState } from 'react'

import PlaygroundSection from '../../components/PlaygroundSection'

interface FontSizeOptions {
    fontSize: string
}

const Units = () => {
    const [fontSizeOptions, setFontSizeOptions] = useState<FontSizeOptions>({
        // default font size unit
        fontSize: '14px',
    })
    const fontSize = [
        {
            value: '14px',
        },
        {
            value: '2em',
        },
        {
            value: '150%',
        },
        { value: '1vmax' },
    ]
    const optionsToRender = [{ name: 'fontSize', options: fontSize }]

    return (
        <PlaygroundSection
            title="Font Units"
            guide={{
                label: 'Units Guide',
                url: 'https://www.w3schools.com/css/css_units.asp',
            }}
        >
            <div id="units">
                <div>
                    <h3>Unit Options</h3>
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
                                            fontSizeOptions[
                                                style.name as keyof FontSizeOptions
                                            ] === option.value
                                        }
                                        onChange={() =>
                                            setFontSizeOptions((state) => {
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
                    <div
                        style={{
                            border: '1px solid black',
                            margin: '5px',
                            fontSize: fontSizeOptions.fontSize,
                        }}
                    >
                        Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit...
                        <div
                            style={{
                                fontSize: '14px',
                                border: '1px solid red',
                                margin: '5px',
                            }}
                        >
                            <h4>14 px</h4>
                            <span>
                                Neque porro quisquam est qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit...
                            </span>
                        </div>
                        <div
                            style={{
                                fontSize: '1vmax',
                                border: '1px solid red',
                                margin: '5px',
                            }}
                        >
                            <h4>1 vmax</h4>
                            <span>
                                Neque porro quisquam est qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit...
                            </span>
                        </div>
                        <div
                            style={{
                                fontSize: '2em',
                                border: '1px solid red',
                                margin: '5px',
                            }}
                        >
                            <h4>2 em</h4>
                            <span>
                                Neque porro quisquam est qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit...
                            </span>
                        </div>
                        <div
                            style={{
                                fontSize: '150%',
                                border: '1px solid red',
                                margin: '5px',
                            }}
                        >
                            <h4>150%</h4>
                            <span>
                                Neque porro quisquam est qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit...
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </PlaygroundSection>
    )
}

export default Units
