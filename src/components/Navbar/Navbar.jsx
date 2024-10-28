import React, { useState } from 'react';
import Link from './Link/Link';
import { IoMdMenu, IoMdClose } from "react-icons/io";
const Navbar = () => {
    const routes = [
        {
            path: "/home",
            name: "Home",
            component: "HomePage",
            exact: true,
        },
        {
            path: "/about",
            name: "About",
            component: "AboutPage",
            exact: true,
        },
        {
            path: "/services",
            name: "Services",
            component: "ServicesPage",
            exact: true,
        },
        {
            path: "/contact",
            name: "Contact",
            component: "ContactPage",
            exact: true,
        },
        {
            path: "/profile",
            name: "Profile",
            component: "ProfilePage",
            exact: true,
        },
    ];
    const [open, setOpen] = useState(false)
    return (
        <nav>
            <div className='text-2xl md:hidden' onClick={() => setOpen(!open)}>
                {
                    open ? <IoMdClose></IoMdClose> : <IoMdMenu></IoMdMenu>
                }
            </div>
            <ul className={`md:flex gap-10 absolute md:static duration-1000 ${open ? 'top-10 ' : '-top-96 '}  bg-slate-400 text-black p-5 `}>
                {
                    routes.map((route, ind) => <Link key={ind} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;