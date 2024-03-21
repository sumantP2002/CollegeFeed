import React, {useState , useEffect} from 'react'
import service from '../appWrite/config'
import { Container , PostCard } from '../components'


function AllPost() {

    const [post, setPost] = useState([])
    useEffect(() => {

    } , [])
    service.getAllPost([])
    .then((posts)=>{
        if(posts){
            setPost(posts.documents)
        }
    })

  return (
    <div className='w-full py-8'>
        <Container>
            <div className=''>
                {post.map((post) => {
                    <div key= {post.$id} className='p-2 w-1/4'>
                        <PostCard post={post} />
                    </div>
                })}
            </div>
        </Container>
    </div>
  )
}

export default AllPost