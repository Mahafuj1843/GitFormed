import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PullReq from '../components/PullReq'
import AppWrapper from '../components/AppWrapper'
import { PullReqListRequest } from '../apiRequests/pullRequest'
import { useSelector } from 'react-redux'

const PullReqListPage = () => {
    const params = useParams()

    let PullRequests = useSelector((state) => (state.pullReq.PullRequest));

    useEffect(() => {
        (async () => {
            await PullReqListRequest(params.id)
        })();
    }, [])

    return (
        <AppWrapper>
            <div className='w-full px-[1rem] md:px-[2rem] lg:px-[5rem] py-6 mt-16'>
                <div className='w-full md:w-[75%] mx-auto py-4'>
                    <span className='flex items-center justify-between'>
                        <h3 className='text-md md:text-xl font-semibold'>All pull requests</h3>
                        <Link to={`/repository/${params.id}/createPullReq`} className='py-1 md:py-2 px-2 md:px-3 text-sm md:text-sm font-medium text-white bg-[#1c6823] rounded-lg border border-[#1c6823] hover:opacity-85 focus:ring-4 focus:outline-none  dark:bg-gray-300 dark:hover:bg-gray-400 dark:focus:ring-gray-300'>New pull request</Link>
                    </span>
                    {
                        PullRequests?.length > 0 ?
                            <div className='w-full space-y-3 mt-3'>
                                {
                                    PullRequests.map((item, i) => (
                                        <PullReq pullReq={item} />
                                    ))
                                }
                            </div>
                            :
                            <div className='mt-3 w-full h-80 border rounded-md flex flex-col items-center justify-center gap-y-3'>
                                <div className='h-[25px] w-[25px] text-[#1c6823]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pt-0.5 lucide lucide-git-pull-request-arrow"><circle cx="5" cy="6" r="3" /><path d="M5 9v12" /><circle cx="19" cy="18" r="3" /><path d="m15 9-3-3 3-3" /><path d="M12 6h5a2 2 0 0 1 2 2v7" /></svg>
                                </div>
                                <h3 className='text-xl font-semibold'>There aren’t any open pull requests.</h3>
                            </div>
                    }
                </div>
            </div>
        </AppWrapper>
    )
}

export default PullReqListPage
