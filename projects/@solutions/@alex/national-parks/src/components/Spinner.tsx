import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const StyledSpinner = styled.div`
    animation: 1.5s linear infinite ${rotate};
    animation-play-state: inherit;
    border: solid 4px #cfd0d1;
    border-top: 4px solid #1c87c9;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    will-change: transform;
`

const Spinner = () => {
    return <StyledSpinner />
}

export default Spinner
