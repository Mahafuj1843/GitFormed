import React, { Fragment, useState } from 'react'
import AppWrapper from '../components/AppWrapper'
import { useNavigate, useParams } from 'react-router-dom';
import { ErrorToast, IsEmpty } from '../helpers/formHelper';
import { CreatePullRequest } from '../apiRequests/pullRequest';

const CreatePullReqPage = () => {
    const params = useParams()
    let navigate = useNavigate();
    const [pull, setPull] = useState({
        title: "",
        comment: ""
    });

    const handleChange = (e) => {
        setPull((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (IsEmpty(pull.title)) {
            ErrorToast("Pull request title required.")
        }
        else {
            const result = await CreatePullRequest(pull, params.id)
            if (result) navigate(`/repository/${params.id}/pull`)
        }
    }

    return (
        <AppWrapper>
            <div className='w-full px-[1rem] md:px-[2rem] lg:px-[5rem] mt-16'>
                <form onSubmit={handleSubmit} className='w-full space-y-2 md:w-[70%] mx-auto py-4'>
                    <h2 className='text-2xl font-bold'>Open a pull request</h2>
                    <div className='space-y-1'>
                        <label className='text-base font-semibold' htmlFor="title">Title *</label>
                        <input onChange={handleChange} name="title" type="text" id='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full px-2 py-1.5  dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    <div className='space-y-1'>
                        <label className='text-base font-semibold' htmlFor="comment">Comment *</label>
                        <textarea onChange={handleChange} cols="30" rows="5" name="comment" type="text" id='comment' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full resize-none px-2 py-1.5  dark:bg-gray-700 dark:border-gray-600"></textarea>
                    </div>
                    <button type="submit" className='mb-5 py-2 px-3 text-sm font-medium text-white bg-[#1c6823] rounded-lg border border-[#1c6823] hover:opacity-85 focus:ring-4 focus:outline-none  dark:bg-gray-300 dark:hover:bg-gray-400 dark:focus:ring-gray-300'>Create pull request</button>
                </form>
            </div>
        </AppWrapper>
    )
}

export default CreatePullReqPage
