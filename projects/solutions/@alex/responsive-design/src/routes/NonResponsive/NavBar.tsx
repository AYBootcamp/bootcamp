import styled from '@emotion/styled'

import Popover from './Popover'

const StyledNav = styled.nav`
    width: 100%;
    height: 48px;
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    > * {
        margin-right: 20px;
    }
`

const NavBar = () => {
    const leftMenu = [
        { title: 'Why Dropbox' },
        { title: 'Products' },
        { title: 'Solutions' },
        { title: 'Pricing' },
    ]
    const rightMenu = [
        { title: 'Contact' },
        { title: 'Get App' },
        { title: 'Sign Up' },
        { title: 'Login' },
    ]
    return (
        <StyledNav>
            <span
                style={{
                    width: '48px',
                    height: '48px',
                    lineHeight: '48px',
                    backgroundColor: 'rgb(0, 97,254)',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                Logo
            </span>
            <h1>Dropbox</h1>
            <ul
                id="left-nav-menu"
                style={{
                    display: 'flex',
                    listStyle: 'none',
                    marginRight: 'auto',
                }}
            >
                {leftMenu.map((item, i) => (
                    <li
                        key={`left-menu-item-${i}`}
                        style={{ marginRight: '20px', padding: '5px' }}
                    >
                        <Popover label={item.title}>
                            <div> Abtriary content</div>
                        </Popover>
                    </li>
                ))}
            </ul>
            <ul
                id="right-nav-menu"
                style={{
                    display: 'flex',
                    listStyle: 'none',
                    margin: 0,
                    height: '100%',
                    alignItems: 'center',
                }}
            >
                {rightMenu.map((item, i) => (
                    <li
                        key={`right-menu-item-${i}`}
                        style={{ marginRight: '20px', padding: '5px' }}
                    >
                        <Popover label={item.title}>
                            <div> Abtriary content</div>
                        </Popover>
                    </li>
                ))}
                <li
                    style={{
                        width: '100px',
                        height: '38px',
                        padding: '5px',
                        backgroundColor: 'rgb(0,97,254)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    Get Started
                </li>
            </ul>
        </StyledNav>
    )
}

export default NavBar
