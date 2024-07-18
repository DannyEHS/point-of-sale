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
import { useState , useEffect } from 'react'
import TooltipInfo from '../general/TooltipInfo'

export default function SideBar() {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    const [isOpen, setIsOpen] = useState(true);

    const [isOpenMenu, setIsOpenMenu] = useState<{[key: string]: boolean }>({});

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    //Controlador menu
    useEffect(() => {
        const initialSubMenuState: {[key: string]: boolean} = {};
        routes.forEach((menu, index) => {
            initialSubMenuState[index] = false;
        });   
        setIsOpenMenu( initialSubMenuState ); 
    }, []);

    const toggleMenu = (index: number, e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpenMenu((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        })
        );
    }


    return (
        <aside className={`flex flex-col ${isOpen ? 'w-56' : 'w-20'} items-center bg-[#fafbfb] border-r bg-gray-100/40 lg:block dark:bg-gray-800/40 transition-all duration-200 ease-in-out`}>
            <div className='sticky top-0 z-50 flex h-[60px] items-center border-b px-4 bg-[#fafbfb]'>
                <div className='flex items-center gap-2 '>
                <TooltipInfo
                    element={<Button className='ml-auto hover:animate-pulse ' variant='ghost'onClick={toggleSidebar}><GiHamburgerMenu className='size-4'/></Button>}
                    text={isOpen ? 'Cerrar barra lateral' : 'Abrir barra lateral'}
                />
                    
                    <Link className={`flex items-center font-semibold ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none hidden'} transition-all duration-300 ease-in-out`} key='/' to='/'>
                        <span className='text-[#3d3d3d] dark:text-white'>GPI PymeX</span>
                    </Link>    
                </div>
                
                
            </div>
            <ul className="sticky top-16 z-40 flex flex-col px-4 pt-4 text-sm font-medium">
                {routes.map((route, index) => (
                    <Fragment key={route.path}>
                        <li key={index} className="flex items-center gap-3 ">
                            
                            <Link 
                                key={route.path}
                                to={route.path}
                                className={isActive(route.path) ? 
                                    `flex items-center gap-3 rounded-lg px-3 py-2 w-full text-gray-900 transition-all bg-gray-100 dark:bg-gray-400 dark:text-gray-50 dark:hover:text-gray-50 ${isOpen ? '' : 'justify-center'} `  
                                    : 
                                    `flex items-center gap-3 rounded-lg px-3 py-2 w-full text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-400 dark:text-gray-50 dark:hover:text-gray-50 ${isOpen ? '' : 'justify-center'}`}
                            >
                                {!isOpen ? 
                                    (route.sub ? 
                                        <IconComponent className="hidden" value={route.icon} /> :
                                        <IconComponent className="size-4" value={route.icon} />)
                                    : <IconComponent className="size-4" value={route.icon} />}
                   

                                <div className={`${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none hidden'} transition-all duration-300 ease-in-out`}>
                                    {route.name}            
                                    
                                </div>
                                {route.sub && 
                                    <span className={`ml-auto hover:bg-gray-200 p-1 rounded-md `} onClick={(e) => toggleMenu(index, e)}>
                                        <TooltipInfo element={<FaAngleDown className={` ${isOpenMenu[index] ? 'rotate-180' : 'rotate-0'} transform transition-transform duration-300 `}/> } text={isOpenMenu[index] ? 'Ocultar Submenú '+route.name : 'Mostrar submenú '+route.name} />     
                                    </span>
                                }
                            </Link>

                        </li>
                        {route.sub && route.sub.map((subRoute) => (
                            <li key={subRoute.path} 
                                className=''>
                                <Link
                                    key={subRoute.path}
                                    to={subRoute.path}
                                    className={`${isOpen ? 'pl-6' : 'justify-center'} ${isOpenMenu[index] ? 'block' : 'hidden'} flex items-center  gap-2 rounded-lg px-3 py-2 w-full text-gray-500 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-400 dark:text-gray-50 dark:hover:text-gray-50 `} 
                                >
                                    <IconComponent className="size-4" value={subRoute.icon}/>
                                    <div className={`${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none hidden'} transition-all duration-300 ease-in-out`}>
                                        {subRoute.name}
                                        </div>
                                    
                                </Link>   
                            </li> 
                        ))}
                        
                    </Fragment>
                ))}
            </ul>
        </aside>
    )
}