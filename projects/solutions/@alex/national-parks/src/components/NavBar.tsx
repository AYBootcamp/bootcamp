import { Box, Container, Divider, Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'

import { PATH } from '../App'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { fetchParks, getParkByIdSelector } from '../redux/parks'
import FetchStatus from '../types/FetchStatus'

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

    const fetchStatus = useAppSelector((state) => state.parks.fetchStatus)

    const dispatch = useAppDispatch()

    // App initial fetch
    useEffect(() => {
        if (fetchStatus === FetchStatus.Initial) {
            dispatch(fetchParks({ pageNumber: 1 }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
        <Container
            sx={{
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
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
            {/* eslint-disable-next-line no-constant-condition */}
            <Outlet />
        </Container>
    )
}

export default NavBar
