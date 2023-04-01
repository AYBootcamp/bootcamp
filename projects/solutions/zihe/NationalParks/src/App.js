import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import HomePage from './routes/HomePage';
import ListPage from './routes/ListPage';
import DetailPage from './routes/DetailsPage';
import { URL } from './constants';
import { setAllParks, setNumbers } from './redux/parkSlice';
import { useDispatch } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '',
    element: <LandingPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'ListPage',
        element: <ListPage />,
      },
      {
        path: 'ListPage/:id',
        element: <DetailPage />,
      },
    ],
  },
]);
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const parkList = async () => {
      const urlAll = `${URL}&limit=10000`;
      const allNames = await (await fetch(urlAll)).json();
      const listArray = allNames.data.map((item) => (
        {
          id: item.id,
          name: item.fullName,
          img: item.images[0].url,
          states: item.states,
          latitude: item.latitude,
          longitude: item.longitude,
        }
      ));
      dispatch(setAllParks(listArray))
      dispatch(setNumbers(allNames.data.length))
    };
    parkList()
  }, [])

  return <RouterProvider router={router} />;
};

export default App;