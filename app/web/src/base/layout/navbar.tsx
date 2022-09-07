import { layout } from 'web-init';
import React, {useState} from 'react';
import logoDorry from '../../assets/logo-dorry.png';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

export default layout({
    component: ({ children }) => {
    const [nav, setNav] = useState(false);
    const [bgNav, setBgNav] = useState(false);

    const navBarList = [
        {key:1, text:"Pricing", link:"#"},
        {key:2, text:"About", link:"#"},
        {key:3, text:"Learn", link:"#"},
        {key:4, text:"Corporate", link:"#"},
        {key:5, text:"News", link:"#"},
    ];

    const handleClick = () => setNav(!nav);

    const changeBackground = () => {
        if(window.scrollY >= 20){
            setBgNav(true);
        } else {
            setBgNav(false);
        }
        console.log(window.scrollY);
    }

    window.addEventListener('scroll',changeBackground);

    return <>
    
    <div className={bgNav ? "sticky top-0 z-50 lg:fixed w-screen h-[80px] py-14 drop-shadowlow-xl text-white bg-[#16403f] transition duration-300 ease-in-out" : "sticky top-0 lg:fixed bg-[#16403f] lg:bg-transparent w-screen h-[80px] text-white py-14 transition duration-300 ease-in-out"} >
            <div className="container px-4 w-full h-full flex justify-between items-center mx-auto lg:px-20">
                <div className="flex items-center">
                    <img src={logoDorry} alt="logo" className="h-8"/>
                    <p className="text-md font-normal pl-2 lg:text-xl ">Dorry</p>
                </div>
                    <ul className="hidden lg:flex">
                        {navBarList.map((list) =>
                        [
                            <li className="px-6 text-gray-300 hover:text-white" key={list.key}><a href={list.link}>{list.text}</a></li>
                        ])}
                    </ul>
                <div>
                    <button className="hidden py-3 px-10 border-slate-400 rounded-full lg:flex border hover:bg-white hover:text-[#16403f] hover:border-white">Contact Us</button>
                </div>
                <div className="w-5 lg:hidden " onClick={handleClick}>
                    {!nav ? <Bars3Icon /> : <XMarkIcon />
                    }
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute translate-y-8 lg:hidden bg-[#16403f] w-full px-6 lg:px-20"}>
                {navBarList.map((list)=>[
                    <li className="px-6 py-2 text-sm text-gray-300 border-b hover:text-white" key={list.key}><a href={list.link}>{list.text}</a></li>
                ])}
                <div className="flex justify-end mt-4 mb-8 px-6 lg:px-20">
                    <button className="text-sm border border-white rounded-full py-2 px-6 hover:bg-white hover:text-[#16403f]">Contact Us</button>
                </div>
            </ul>
        </div>
    
    {children}</>
    },
})
