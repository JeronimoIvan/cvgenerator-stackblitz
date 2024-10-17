import { createBrowserRouter } from 'react-router-dom';

import { Dashboard, Resume } from './layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
]);

/*

import { createBrowserRouter } from "react-router-dom";
import { NotFound, Home,Test } from "./views";
import { Resume } from "./layouts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/resume/:id',
        element: <Resume />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
    {
        path: 'Home',
        element: <Home />,
    },
]);

*/
