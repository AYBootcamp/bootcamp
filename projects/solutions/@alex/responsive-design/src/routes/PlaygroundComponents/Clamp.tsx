import styled from '@emotion/styled'

import PlaygroundSection from '../../components/PlaygroundSection'

const Box = styled.div`
    border: 1px solid red;
    padding: 2px;
    margin: 2px;
`

const RedClampBox = styled.div`
    background-color: red;
    width: clamp(100px, 20vw, 200px);
    height: 50px;
`

const ClampText = styled.span`
    font-size: clamp(14px, 1vmax, 30px);
`

const Clamp = () => {
    return (
        <PlaygroundSection
            title="Clamp"
            guide={{
                label: 'Clamp Guide',
                url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/clamp',
            }}
        >
            <h3>Clamp Syntax : clamp(MIN, VAL, MAX)</h3>
            <ul>
                <li>width: clamp(200px, 20vw, 400px)</li>
            </ul>

            <h3>Clamp Example</h3>
            <Box>
                <RedClampBox />
                <ClampText>This is a text</ClampText>
            </Box>
        </PlaygroundSection>
    )
}

export default Clamp
