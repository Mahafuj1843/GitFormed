import React, { useEffect, useState } from 'react'
import Repository from './../components/Repository';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';
import AppWrapper from '../components/AppWrapper';
import { useSelector } from 'react-redux';
import { MyRepositoryListRequest } from '../apiRequests/repositoryRequest';
import { getUserDetails } from '../helpers/sessionHelper';

const MyRepoPage = () => {
    const [pageNo, setPageNo] = useState(0)
    const [perPage, setPerPage] = useState(10)
    const [searchKey, setSearchKey] = useState("");
    const [sort, setSort] = useState("")

    let Repositories = useSelector((state) => (state.repository.Repositories));
    let Total = useSelector((state) => (state.repository.Total))

    const searchKeywordOnChange = async (e) => {
        setSearchKey(e.target.value)

        if ((e.target.value).length === 0) setSearchKey("")
    }

    const handlePageClick = async (e) => {
        setPageNo(e.selected)
    };

    useEffect(() => {
        const search = setTimeout(() => {
            (async () => {
                await MyRepositoryListRequest(pageNo + 1, perPage, searchKey, sort)
            })();
        }, 1000);

        return () => clearTimeout(search)
    }, [pageNo, sort, searchKey])

    return (
        <AppWrapper>
            <div className='w-full px-[1rem] md:px-[2rem] lg:px-[5rem] py-6 mt-16'>
                <div className='flex flex-col md:flex-row md:py-6 gap-2 md:gap-4'>
                    <div class="flex-[1] flex-col justify-center py-4">
                        <img class="w-full sm:w-3/5 lg:w-full rounded-full object-fill mx-auto" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" /*ref={(input) => userImgView = input}*/ alt="" />
                        <div className="mt-4">
                            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                                {getUserDetails().username}
                            </h3>
                            <p className="font-medium mb-1.5">{getUserDetails().email}</p>
                            <button class="w-full inline-flex items-center justify-center py-2 px-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border border-gray-400 hover:bg-gray-200 focus:ring-4 focus:outline-none  dark:bg-gray-300 dark:hover:bg-gray-400 dark:focus:ring-gray-300">
                                Edit profile
                            </button>
                        </div>
                    </div>
                    <div class="flex-[1] md:flex-[3] w-full py-4">
                        <div className='w-full flex flex-col md:flex-row justify-between gap-y-3 border-b mb-2'>
                            <div class="w-full lg:w-full border-md">
                                <input type="search" onChange={searchKeywordOnChange} id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full lg:w-[250px] px-2.5 py-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Name" required />
                            </div>
                            <div className='flex gap-3 w-full md:justify-end mb-5'>
                                <select onChange={(e) => setSort(e.target.value)} id="lsit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ring-gray-300 block outline-gray-300  px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-600 dark:focus:border-gray-600">
                                    <option selected value=''>Latest</option>
                                    <option value='Alphabetical'>Alphabetical</option>
                                    <option value='Watchers'>Watcher</option>
                                </select>
                                <Link to="/createRepo" class="inline-flex items-center gap-2 py-2 px-3 ml-2 text-sm font-medium text-white bg-[#1c6823] rounded-lg border border-[#1c6823] hover:opacity-90 focus:ring-4 focus:outline-none  dark:bg-gray-300 dark:hover:bg-gray-400 dark:focus:ring-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-marked"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><polyline points="10 2 10 10 13 7 16 10 16 2" /></svg>
                                    <span className=''>New</span>
                                </Link>
                            </div>
                        </div>
                        {
                            Repositories.length ?
                                <div className='flex flex-col gap-y-1'>
                                    {
                                        Repositories.map((item, i) =>
                                            <Repository repository={item} key={i} />
                                        )
                                    }
                                </div>
                                :
                                <div className='mt-3 w-full h-80 border rounded-md flex flex-col items-center justify-center gap-y-3'>
                                    <div className='h-[25px] w-[25px] text-[#1c6823]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-marked text-gray-600"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><polyline points="10 2 10 10 13 7 16 10 16 2" /></svg>
                                    </div>
                                    <h3 className='text-xl font-semibold'>There aren’t any Repository.</h3>
                                </div>
                        }
                        {
                            Repositories.length &&
                            <Pagination pageNo={pageNo + 1} perPage={perPage} total={Total} handlePageClick={handlePageClick} />
                        }
                    </div>
                </div>
            </div>
        </AppWrapper>
    )
}

export default MyRepoPage
