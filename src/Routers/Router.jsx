import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import HomePage from "../Pages/HomePage/HomePage";
import TimeLine from "../Pages/Timelines/TimeLine";
import Error404Page from "../Pages/Error404/Error404Page";
import Stats from "../Pages/Stats/Stats";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children:[
            {
                index: true,
                element: <HomePage/>
            },
            {
                path:'/timeline',
                element:<TimeLine/>
            },
            {
                path:'/stats',
                element: <Stats/>
            }
        ],
        errorElement: <Error404Page/>
    }
])