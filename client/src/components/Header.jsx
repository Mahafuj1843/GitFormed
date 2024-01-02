import React from 'react'

const Header = () => {
    const [myMenu, setMyMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <Fragment>
            <div className='w-full fixed top-0 left-0'>
                <nav className="bg-gray-800 relative">
                    <div className="px-[1rem] md:px-[2rem] lg:px-[5rem]">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                {/* <!-- Mobile menu button--> */}
                                <button onClick={() => setShowMenu(!showMenu)} onBlur={() => setShowMenu(false)} type="button" className="md:hidden relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                                </button>
                                <Link to='/' className="flex flex-shrink-0 items-center text-xl font-bold text-white">
                                    GitFormed
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 md:block">
                                <div className="flex space-x-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Explore</a>
                                </div>
                            </div>

                            {
                                token ?
                                    <div className="absolute inset-y-0 right-0 flex items-center gap-1.5 md:gap-3 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <button type="button" className="relative rounded-md bg-gray-800 p-1 border text-gray-400 hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5  md:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                        </button>
                                        <button type="button" className="relative rounded-md bg-gray-800 p-1 border text-gray-400 hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5  md:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="5" cy="6" r="3" /><path d="M5 9v12" /><circle cx="19" cy="18" r="3" /><path d="m15 9-3-3 3-3" /><path d="M12 6h5a2 2 0 0 1 2 2v7" /></svg>
                                        </button>
                                        <button type="button" className="relative rounded-md bg-gray-800 p-1 border text-gray-400 hover:text-white">
                                            <svg className="h-4 w-4 md:h-5  md:w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                            </svg>
                                        </button>

                                        {/* <!-- Profile dropdown --> */}
                                        <div className="relative">
                                            <button onClick={() => setMyMenu(!myMenu)} type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button">
                                                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                            </button>

                                            <div onBlur={() => setMyMenu(!myMenu)} className={`${myMenu ? "block" : "hidden"} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all ease-out duration-100`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                                {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                                                <Link to="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                                    Your Profile
                                                </Link>
                                                <Link to="/myRepo" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-marked"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><polyline points="10 2 10 10 13 7 16 10 16 2" /></svg>
                                                    Your repositories
                                                </Link>
                                                <Link to="/myRepo" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-view"><path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" /><path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /><path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" /><path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" /></svg>
                                                    Watching repositories
                                                </Link>
                                                <Link to="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left-from-line"><path d="m9 6-6 6 6 6" /><path d="M3 12h14" /><path d="M21 19V5" /></svg>
                                                    Sign out
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="absolute inset-y-0 right-0 flex items-center  gap-2 md:gap-4 text-sm md:text-base pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <a className="relative rounded-md bg-gray-800 p-1 cursor-pointer text-white">
                                            Sign in
                                        </a>
                                        <a className="relative rounded-md bg-gray-800 p-1 border cursor-pointer text-white">
                                            Sign up
                                        </a>
                                    </div>
                            }
                        </div>
                    </div>

                    {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                    <div className={`${showMenu ? "top-16" : "-top-[300%]"} w-full bg-inherit md:hidden absolute left-0 transition-all duration-300`} id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                            <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Explore</a>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default Header
