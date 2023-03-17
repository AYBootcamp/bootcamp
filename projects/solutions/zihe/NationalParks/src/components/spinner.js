import React from 'react'
import styled, { keyframes } from 'styled-components'

// constant sizes
const SMALL = {
    width: '20px',
    height: '20px',
    border: '3px',
}
const MEDIUM = {
    width: '40px',
    height: '40px',
    border: '4px',
}
const LARGE = {
    width: '60px',
    height: '60px',
    border: '5px',
}

const sizeMap = { small: SMALL, medium: MEDIUM, large: LARGE }

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
    border: solid ${(props) => props.size.border} #cfd0d1;
    border-top: ${(props) => props.size.border} solid #1c87c9;
    border-radius: 50%;
    width: ${(props) => props.size.width};
    height: ${(props) => props.size.height};
    will-change: transform;
`

const Spinner = ({ size }) => {
    const sizeObj = sizeMap[size]
    return <StyledSpinner size={sizeObj} />
}

Spinner.defaultProps = {
    size: 'medium',
}

export default Spinner