//import { routes } from './routes.ts'
import { Link } from '@remix-run/react'
import { routes } from './routes'
import { Button } from '../button'
import { IconComponent } from '../icon'

export default function SideBar() {
    return (
        <aside className="flex flex-col w-60 items-center bg-[#fafbfb] border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className='sticky top-0 z-50 flex h-[60px] items-center border-b px-6 bg-[#fafbfb]'>
                <Link className='flex items-center gap-2 font-semibold' key='/' to='/'>
                    {/* Icono */}
                    <span className='text-[#3d3d3d] dark:text-white'>Acme POS</span>
                </Link>
                <Button className='ml-auto' variant='outline'>---</Button>
            </div>
            <ul className="flex flex-col px-4 pt-4 text-sm font-medium">
                {routes.map((route) => (
                    <li key={route.path} className="flex items-center gap-3 ">
                        
                        <Link 
                            key={route.path}
                            to={route.path}
                            className='flex items-center gap-3 rounded-lg px-3 py-2 w-full text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-400 dark:text-gray-50 dark:hover:text-gray-50'
                        >
                            <IconComponent value={route.icon}/>
                            {route.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}