//import { routes } from './routes.ts'
import { Link } from '@remix-run/react'
import { routes } from './routes'
import { Button } from '../button'
import { IconComponent } from '../icon'
import { useLocation } from 'react-router-dom'
import {Fragment} from 'react/jsx-runtime'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function SideBar() {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    
    return (
        <aside className="flex flex-col w-56 items-center bg-[#fafbfb] border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className='sticky top-0 z-50 flex h-[60px] items-center border-b px-4 bg-[#fafbfb]'>
                <Link className='flex items-center gap-2 font-semibold' key='/' to='/'>
                    {/* Icono */}
                    <Button className='ml-auto' variant='ghost'><GiHamburgerMenu className='size-4'/></Button>
                    <span className='text-[#3d3d3d] dark:text-white'>GPI PymeX</span>
                </Link>
                
            </div>
            <ul className="sticky top-16 z-50 flex flex-col px-4 pt-4 text-sm font-medium">
                {routes.map((route) => (
                    <Fragment key={route.path}>
                        <li key={route.path} className="flex items-center gap-3 ">
                            
                            <Link 
                                key={route.path}
                                to={route.path}
                                className={isActive(route.path) ? 
                                    'flex items-center gap-3 rounded-lg px-3 py-2 w-full text-gray-900 transition-all bg-gray-100 dark:bg-gray-400 dark:text-gray-50 dark:hover:text-gray-50' 
                                    : 
                                    'flex items-center gap-3 rounded-lg px-3 py-2 w-full text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-400 dark:text-gray-50 dark:hover:text-gray-50'}
                            >
                                <IconComponent value={route.icon} />
                                {route.name}
                                {route.sub && <span className='ml-auto hover:bg-gray-200 p-1 rounded-md'><FaAngleDown /></span>}
                            </Link>

                        </li>
                        {route.sub && route.sub.map((subRoute) => (
                            <li className=''>
                                <Link
                                    key={subRoute.path}
                                    to={subRoute.path}
                                    className='pl-6 flex items-center  gap-2 rounded-lg px-3 py-2 w-full text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-400 dark:text-gray-50 dark:hover:text-gray-50'
                                >
                                    <IconComponent value={subRoute.icon}/>
                                    {subRoute.name}
                                </Link>   
                            </li> 
                        ))}
                        
                    </Fragment>
                ))}
            </ul>
        </aside>
    )
}