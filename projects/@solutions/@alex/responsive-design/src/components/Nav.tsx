import BugReportIcon from '@mui/icons-material/BugReport'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb'
import HomeIcon from '@mui/icons-material/Home'
import MapIcon from '@mui/icons-material/Map'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import { Outlet, useNavigate } from 'react-router-dom'

import { PATH } from '../App'

export default function Nav() {
    const actions = [
        { icon: <HomeIcon />, name: 'Home', to: PATH.ROOT },
        {
            icon: <DoNotDisturbIcon />,
            name: 'Non-Responsive',
            to: PATH.nonResponsive,
        },
        { icon: <CheckCircleIcon />, name: 'Responsive', to: PATH.responsive },
        { icon: <BugReportIcon />, name: 'Playground', to: PATH.playground },
    ]

    const navigate = useNavigate()
    const handleNavigation = (to: PATH) => {
        navigate(to)
    }

    return (
        <div>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: '10px' }}
                icon={<MapIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => handleNavigation(action.to)}
                    />
                ))}
            </SpeedDial>

            <Outlet />
        </div>
    )
}
