import { ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import NavBar from './components/NavBar'
import LandingPage from './routes/LandingPage'
import ParkDetailPage from './routes/ParkDetailPage'
import ParksPage from './routes/ParksPage'
import theme from './theme'

export enum PATH {
    ROOT = '/',
    PARKS = '/parks',
}

// Router object
const router = createBrowserRouter([
    {
        path: PATH.ROOT,
        element: <NavBar />,
        children: [
            {
                path: '',
                element: <LandingPage />,
            },
            {
                path: PATH.PARKS,
                element: <ParksPage />,
            },
            {
                path: `${PATH.PARKS}/:parkId`,
                element: <ParkDetailPage />,
            },
        ],
        errorElement: <div> 404 not found</div>,
    },
])

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
