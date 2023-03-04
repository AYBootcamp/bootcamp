import { Box, Container, Divider, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'

import { PATH } from '../App'
import { useAppSelector } from '../hooks/reduxHooks'
import { getParkByIdSelector } from '../redux/parks'

const NavBar = () => {
    /* ===========================
     Hooks
     ============================= */
    const location = useLocation()
    const { parkId } = useParams()
    const navigate = useNavigate()
    const park = useAppSelector((state) =>
        getParkByIdSelector(state, parkId ?? '')
    )

    // useMemo for performance improvements
    const routing = React.useMemo(() => {
        return [
            { label: 'Home', to: PATH.ROOT, value: 0 },
            { label: 'All Parks', to: PATH.PARKS, value: 1 },
        ]
    }, [])

    /* ===========================
     State Variables
     ============================= */
    const [selectedTab, setSelectedTab] = React.useState(0)

    const isInParkDetailView =
        !!parkId && location.pathname.includes(PATH.PARKS)

    /* ===========================
     Side Effects
     ============================= */
    React.useEffect(() => {
        const selectedTabIndex = isInParkDetailView
            ? 2
            : routing.find((routeObj) =>
                  routeObj.to.includes(location.pathname)
              )?.value ?? 0

        setSelectedTab(selectedTabIndex)
    }, [location.pathname, parkId, routing, isInParkDetailView])

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
        <Container sx={{ padding: '12px' }}>
            <Typography variant="h1">The National Park Advisor</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Tabs value={selectedTab} onChange={handleChange}>
                    {routing.map((route, i) => (
                        <Tab key={`route-${i}`} label={route.label} />
                    ))}
                    {
                        <Tab
                            label={park?.name ?? 'Park Detail'}
                            disabled={!isInParkDetailView}
                        />
                    }
                </Tabs>
            </Box>
            <Divider />
            <Outlet />
        </Container>
    )
}

export default NavBar
