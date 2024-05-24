import React, { useEffect , useState } from 'react'
import service from '../Appwrite/Upload&Post'
import  {Button, Container ,PostCard }from '../Component/index'
import {useNavigate} from 'react-router-dom'
function AllPost() {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    useEffect(() => {
         service.GetAllPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
    }, [])
   
    
  return (
    <div className='w-full py-8'>
        {posts.length > 0 ? (
            <Container>
            <div className='flex flex-wrap '>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4 max-md:w-full '>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
        ) : <Button onClick = {()=>navigate('/addpost')}  type="submit"
        className=" mx-auto w-28 h-[2.75rem]"> Add Post </Button>}
        
    </div>
  )
}

export default AllPost
