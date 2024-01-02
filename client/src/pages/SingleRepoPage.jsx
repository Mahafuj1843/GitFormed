import React from 'react'
import { Link } from 'react-router-dom'
import AppWrapper from '../components/AppWrapper'

const SingleRepoPage = () => {
    return (
        <AppWrapper>
            <div className='w-[100vw] px-[1rem] md:px-[2rem] lg:px-[5rem] py-6 mt-16'>
                <div className='w-full space-y-2 md:py-2'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-2'>
                            <span className="w-fit flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button">
                                <img className="h-6 md:h-8 w-6 md:w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </span>
                            <h3 className='text-lg md:text-xl font-semibold'>Food_order_MERN</h3>
                            <span className='px-1 text-xs font-medium border rounded-2xl bg-slate-100 -mt-2'>Public</span>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <button class="flex items-center gap-1 md:gap-x-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-300 focus:border-gray-300 w-fit px-2 py-1.5 md:py-1  dark:bg-gray-700 dark:border-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                <p className='hidden md:block text-xs md:text-sm font-semibold'>Watch</p>
                                <span className='hidden md:block px-1 py-0.5 text-xs rounded-full bg-slate-200'>20</span>
                            </button>
                            <Link to="/repository/id/pull" class="flex items-center gap-1 md:gap-x-2 text-xs md:text-base font-semibold bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-300 focus:border-gray-300 w-fit px-2 py-1.5 md:py-1  dark:bg-gray-700 dark:border-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-pull-request-arrow"><circle cx="5" cy="6" r="3" /><path d="M5 9v12" /><circle cx="19" cy="18" r="3" /><path d="m15 9-3-3 3-3" /><path d="M12 6h5a2 2 0 0 1 2 2v7" /></svg>
                                <p className='hidden md:block text-xs md:text-sm font-semibold'>Pull request</p>
                            </Link>
                        </div>
                    </div>
                    <hr />
                    <div className='flex flex-col md:flex-row md:py-3 gap-2 md:gap-4'>
                        <div class="flex-[1] md:flex-[3] w-full py-4">
                            <div className='w-full h-80 border rounded-md flex items-center justify-center bg-slate-100'>
                                <span className='text-md font-semibold border-gray-600 border-dashed border-2 px-5 py-10'>Repository folder/file</span>
                            </div>
                        </div>
                        <div class="flex-[1] flex-col justify-center space-y-3 py-3">
                            <div className='flex items-center justify-between text-gray-700'>
                                <h3 className='text-md font-semibold'>About</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                            </div>
                            <p className='text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nemo voluptatibus, odio accusamus quisquam adipisci ullam dolores quasi nisi veritatis doloribus vero magnam unde esse incidunt rerum officia ipsum sint.</p>
                            <div className='space-y-2 text-gray-600'>
                                <span className='flex items-center gap-x-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <span className='flex items-center gap-1'>
                                        <p>6</p>
                                        <h4 className='text-sm'>Stars</h4>
                                    </span>
                                </span>
                                <span className='flex items-center gap-x-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                    <span className='flex items-center gap-1'>
                                        <p>2</p>
                                        <h4 className='text-sm'>Watching</h4>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </AppWrapper>
    )
}

export default SingleRepoPage
