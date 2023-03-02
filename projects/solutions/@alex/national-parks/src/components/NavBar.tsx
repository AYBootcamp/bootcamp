import { Box, Container, Divider, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { PATH } from '../App'

const NavBar = () => {
    /* ===========================
     Hooks
     ============================= */
    const location = useLocation()
    const navigate = useNavigate()

    // useMemo for performance improvements
    const routing = React.useMemo(() => {
        return [
            { label: 'Home', to: PATH.ROOT, value: 0 },
            { label: 'All Parks', to: PATH.PARKS, value: 1 },
        ]
    }, [])
    const selectedTabIndex = routing.find((routeObj) =>
        routeObj.to.includes(location.pathname)
    )?.value

    /* ===========================
     State Variables
     ============================= */
    const [selectedTab, setSelectedTab] = React.useState(selectedTabIndex)

    /* ===========================
     Handlers
     ============================= */
    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue)
        navigate(routing[newValue].to)
    }

    /* ===========================
     JSX
     ============================= */
    return (
        <Container>
            <Typography variant="h1">The National Park Advisor</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Tabs
                    value={selectedTab}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    {routing.map((route, i) => (
                        <Tab key={`route-${i}`} label={route.label} />
                    ))}
                </Tabs>
            </Box>
            <Divider />
            <Outlet />
        </Container>
    )
}

export default NavBar
