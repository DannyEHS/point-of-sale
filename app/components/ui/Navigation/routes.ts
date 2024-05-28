import { IconName } from "../icon"

type Route = {
    name: string
    path: string
    icon: IconName
}

export const routes: Route[] = [
    {
        name: 'Dashboard',
        path: '/',
        icon: 'home',
    },
    {
        name: 'POS',
        path: '/pos',
        icon: 'cart',
    },
    {
        name: 'Inventory',
        path: '/inventory',
        icon: 'inventory',
    },
    {
        name: 'Administration',
        path: '/admin',
        icon: 'admin',
    }

]
