import { React } from 'react'
import { PostItem } from '../../components';

import style from './style.module.scss'

const PostList = ({title, posts, remove}) =>
{
     if (!posts.length) {
        return (
            <h1 className={style.posts}>
                Посты не найдены!
            </h1>
        )
    }
    
    return (
        
        <div className={style.posts}>
            <h2 className={style.posts_title}>{ title }</h2>
            
            {posts.length && posts.map((post, index) =>
                {
                    return (
                        <PostItem remove={remove} post={post} number={index + 1} key={post.id} />
                    )
            }) }
                
            
          
        </div>
    )
}

export default PostList;