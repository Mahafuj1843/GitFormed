import React, { Fragment } from 'react'

const PullReq = () => {
    return (
        <Fragment>
            <div className='border rounded-md w-full p-3 flex gap-2'>
                <div className='h-[1.2rem] w-[1.3rem] text-[#1c6823]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pt-0.5 lucide lucide-git-pull-request-arrow"><circle cx="5" cy="6" r="3" /><path d="M5 9v12" /><circle cx="19" cy="18" r="3" /><path d="m15 9-3-3 3-3" /><path d="M12 6h5a2 2 0 0 1 2 2v7" /></svg>
                </div>
                <div className='space-y-2'>
                    <h4 className='text-md md:text-lg font-bold'>Pull request title.</h4>
                    <p className='text-sm text-gray-600 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab praesentium expedita, ad veniam eos nisi deserunt eligendi laborum quis sunt? Perferendis magnam culpa totam debitis eos repellendus aspernatur dolores id?</p>
                    <p className='text-xs text-gray-600 flex items-center gap-x-1'>
                        <div className='h-[0.9rem] w-[0.9rem] text-[#1c6823]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="0.9rem" height="0.9rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        </div>
                        <span className='text-black font-medium'>#433</span> by <span className='text-black font-medium'>Mahafuj1843</span> 2 hours ago</p>
                </div>
            </div>
        </Fragment>
    )
}

export default PullReq
