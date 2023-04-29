import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Nav from './components/Nav'
import NonResponsive from './routes/NonResponsive'
import Playground from './routes/Playground'

export enum PATH {
    ROOT = '/',
    responsive = '/responsive',
    nonResponsive = 'non-responsive',
    playground = '/playground',
}

// Router object
const router = createBrowserRouter([
    {
        path: PATH.ROOT,
        element: <Nav />,
        children: [
            {
                path: '',
                element: <div>Responsive Design</div>,
            },
            { path: PATH.responsive, element: <div>responsive</div> },
            { path: PATH.nonResponsive, element: <NonResponsive /> },
            { path: PATH.playground, element: <Playground /> },
        ],
        errorElement: <div>404 not found</div>,
    },
])

const App = () => {
    const theme = createTheme({})

    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
