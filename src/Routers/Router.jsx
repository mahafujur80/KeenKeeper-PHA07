import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import HomePage from "../Pages/HomePage/HomePage";
import TimeLine from "../Pages/Timelines/TimeLine";
import Error404Page from "../Pages/Error404/Error404Page";
import Stats from "../Pages/Stats/Stats";
import FriendDetails from "../Pages/FriendDetails/FriendDetails";

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
            },
            {
                path:'/friendDetails/:id',
                element:<FriendDetails/>
            }
        ],
        errorElement: <Error404Page/>
    }
])