import React from 'react'
import ReactPaginate from 'react-paginate'
import Repository from '../components/Repository'
import Pagination from '../components/Pagination'
import { Link } from 'react-router-dom'
import AppWrapper from '../components/AppWrapper'

const HomePage = () => {
    return (
        <AppWrapper>
            <div className='w-[100vw] px-[1rem] md:px-[2rem] lg:px-[5rem] py-6 mt-16'>
                <div className='w-full md:w-[75%] mx-auto'>
                    <div class="w-full py-4">
                        <div className='w-full flex flex-col md:flex-row justify-between gap-y-3'>
                            {/* <div class="flex items-center"> */}
                            <div class="w-full lg:w-full border-md">
                                <input type="search" /*onChange={searchKeywordOnChange}*/ id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full lg:w-[250px] px-2.5 py-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Name" required />
                            </div>
                            {/* <button onClick={onSearchData} class="inline-flex items-center py-2 px-3 ml-2 text-sm font-medium text-white bg-[#2C1654] rounded-lg border border-[#2C1654] hover:bg-[#422180] focus:ring-4 focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg aria-hidden="true" class="w-5 h-5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    <span className='hidden md:block'>Search</span>
                                </button> */}
                            {/* </div> */}
                            <div className='flex gap-3 w-full md:justify-end mb-5'>
                                <select /*onChange={perPageOnChange}*/ id="lsit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ring-gray-300 block outline-gray-300  px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-600 dark:focus:border-gray-600">
                                    <option selected disabled value=""> Sort </option>
                                    <option value="8">Alphabetical</option>
                                    <option value="12">Latest</option>
                                    <option value="16">Watcher</option>
                                </select>
                                <Link to="/createRepo" className="inline-flex items-center gap-2 py-2 px-3 ml-2 text-sm font-medium text-white bg-[#39DB4A] rounded-lg border border-[#39DB4A] hover:bg-[#60e06d] focus:ring-4 focus:outline-none  dark:bg-gray-300 dark:hover:bg-gray-400 dark:focus:ring-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-marked"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><polyline points="10 2 10 10 13 7 16 10 16 2" /></svg>
                                    <span className=''>New</span>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            {
                                [...Array(10)].map((item, i) =>
                                    <Repository key={i} />
                                )
                            }
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </AppWrapper>
    )
}

export default HomePage
