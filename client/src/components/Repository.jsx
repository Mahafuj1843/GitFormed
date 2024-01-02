import React from 'react'
import { Link } from 'react-router-dom'

const Repository = () => {
  return (
    <div className="flex flex-col justify-between gap-y-2 mb-3 p-[10px] border rounded-md w-full">
      <div className='space-y-2'>
        <div class="flex w-full gap-2">
          <div className='w-6 h-7'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-marked text-gray-600"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><polyline points="10 2 10 10 13 7 16 10 16 2" /></svg>
          </div>
          <Link to={`/repository/aaaaa`} className='text-lg font-semibold text-left text-blue-600 hover:underline leading-[1.3rem] cursor-pointer'>
            Mahafuj1843 / Food_order_MERN
          </Link>
        </div>
        <p className="text-sm font-normal text-left text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus optio tenetur iusto, ipsum omnis nisi sed facilis voluptate ut dignissimos aspernatur sequi quam. Modi veritatis cupiditate nemo amet explicabo excepturi!</p>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
          <span>Javascript</span>
        </div>
        <div className="flex items-center gap-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          <span>50</span>
        </div>
        <div className="flex items-center gap-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
          <span>30</span>
        </div>
        <div className="flex items-center gap-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
          <span>1 Jan 2024, 7:25 pm</span>
          {/* moment().format('MMMM Do YYYY, h:mm:ss a'); */}
        </div>
      </div>
    </div>
  )
}

export default Repository
