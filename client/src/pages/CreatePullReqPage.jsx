import React, { Fragment } from 'react'
import AppWrapper from '../components/AppWrapper'

const CreatePullReqPage = () => {
    return (
        <AppWrapper>
            <div className='w-full px-[1rem] md:px-[2rem] lg:px-[5rem] mt-16'>
                <div className='w-full space-y-2 md:w-[70%] mx-auto py-4'>
                    <h2 className='text-2xl font-bold'>Open a pull request</h2>
                    <div className='space-y-1'>
                        <label className='text-base font-semibold' htmlFor="repoName">Title *</label>
                        <input name="repoName" type="text" id='repoName' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full px-2 py-1.5  dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    <div className='space-y-1'>
                        <label className='text-base font-semibold' htmlFor="repoName">Comment *</label>
                        <textarea cols="30" rows="5" name="repoName" type="text" id='repoName' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full resize-none px-2 py-1.5  dark:bg-gray-700 dark:border-gray-600"></textarea>
                    </div>
                    <button className='mb-5 py-2 px-3 text-sm font-medium text-white bg-[#1c6823] rounded-lg border border-[#1c6823] hover:opacity-85 focus:ring-4 focus:outline-none  dark:bg-gray-300 dark:hover:bg-gray-400 dark:focus:ring-gray-300' type="submit">Create pull request</button>
                </div>
            </div>
        </AppWrapper>
    )
}

export default CreatePullReqPage
