import Admin from "./Pages/Admin";
import Basket from "./Pages/Basket";
import Layout from "./Pages/Layout";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegistartionPage from "./Pages/RegistrPage/RegistartionPage";
import DevicePage from "./Pages/DevicePage";

export const authRoutes = [
    {
        path: '/admin',
        Component: Admin
    },
    {
        path: '/basket',
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: '/',
        Component: Layout
    },
    {
        path: '/login',
        Component: LoginPage
    },
    {
        path: '/registration',
        Component: RegistartionPage
    },
    {
        path: '/device'+"/:id",
        Component: DevicePage
    }
]