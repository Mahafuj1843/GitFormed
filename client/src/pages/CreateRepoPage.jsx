import React, { useState } from 'react'
import AppWrapper from '../components/AppWrapper'
import { useNavigate } from 'react-router-dom';
import { ErrorToast, IsEmpty } from '../helpers/formHelper';
import { CreateRepositoryRequest } from '../apiRequests/repositoryRequest';
import { getUserDetails } from '../helpers/sessionHelper';

const CreateRepoPage = () => {
    let navigate = useNavigate();
    const [repository, setRepository] = useState({
        name: "",
        desc: "",
        visivility:""
    });

    const handleChange = (e) => {
        setRepository((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (IsEmpty(repository.name)) {
            ErrorToast("Repository name required.")
        }
        else {
            const result = await CreateRepositoryRequest(repository)
            
            if (result) navigate('/myRepo')
        }
    }
    
    return (
        <AppWrapper >
            <div className='w-[100vw] px-[1rem] md:px-[2rem] lg:px-[5rem] py-6 mt-16'>
                <form onSubmit={handleSubmit} className='w-full space-y-2 md:w-[70%] mx-auto py-4'>
                    <h3 className='text-2xl font-semibold'>Create a new repository.</h3>
                    <p className='text-sm text-gray-500'>A repository contains all project files, including the revision history.</p>
                    <hr />
                    <div className='flex items-center gap-3'>
                        <div className='space-y-1'>
                            <label className='text-base font-semibold' htmlFor="owner">Owner *</label>
                            <span class="flex items-center gap-1 md:gap-x-2 text-sm md:text-base font-semibold bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-300 focus:border-gray-300 w-fit px-2 py-1.5 md:py-1  dark:bg-gray-700 dark:border-gray-600">
                                <span className="w-fit flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button">
                                    <img className="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </span>
                                {getUserDetails().username}
                            </span>
                        </div>
                        <div className='space-y-1'>
                            <label className='text-base font-semibold' htmlFor="name">Repository name *</label>
                            <input onChange={handleChange} name="name" type="text" id='name' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full lg:w-[250px] px-2 py-1.5  dark:bg-gray-700 dark:border-gray-600" />
                        </div>
                    </div>
                    <p className='text-sm text-gray-500'>Great repository names are short and memorable.</p>
                    <div className='space-y-1'>
                        <label className='text-base font-semibold flex items-center' htmlFor="desc">Description<p className='text-sm text-gray-500'>(optional) </p> *</label>
                        <input onChange={handleChange} name="desc" type="text" id='desc' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full px-2 py-1.5  dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    <hr />
                    <div className='flex items-center gap-4'>
                        <input onChange={handleChange} value="Public" type="radio" name="visivility" id="visivility" />
                        <div className='flex items-center gap-3'>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-key"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14" /><path d="M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20" /><circle cx="14" cy="8" r="2" /><path d="m20 2-4.5 4.5" /><path d="m19 3 1 1" /></svg></div>
                            <div>
                                <h4 className='text-base font-semibold flex'>Public</h4>
                                <p className='text-sm text-gray-500'>Anyone on the internet can see this repository. You choose who can commit.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <input onChange={handleChange} value="Private" type="radio" name="visivility" id="visivility" />
                        <div className='flex items-center gap-3'>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-lock"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" /><path d="M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20" /><rect width="8" height="5" x="12" y="6" rx="1" /><path d="M18 6V4a2 2 0 1 0-4 0v2" /></svg></div>
                            <div>
                                <h4 className='text-base font-semibold flex'>Private</h4>
                                <p className='text-sm text-gray-500'>You choose who can see and commit to this repository.</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <button type="submit" className='py-2 px-3 text-sm font-medium float-right text-white bg-[#1c6823] rounded-lg border border-[#1c6823] hover:opacity-85 focus:ring-4 focus:outline-none  dark:bg-gray-300 dark:hover:bg-gray-400 dark:focus:ring-gray-300'>Create repository</button>
                </form>
            </div>
        </AppWrapper>
    )
}

export default CreateRepoPage
