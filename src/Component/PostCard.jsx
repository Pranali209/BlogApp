import React from 'react'
import { Link } from 'react-router-dom'
import service from '../Appwrite/Upload&Post'
function PostCard({$id , title , featuredImage}) {
    return (
      <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4 max-md:p-2'>
            <div className='w-full justify-center mb-4'>
                <img src={service.getFilePreview(featuredImage)} alt={title} className='m-auto' />
            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
            </div>
      </Link>
    )
}

export default PostCard