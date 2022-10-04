import { React } from 'react'
import { PostItem } from '../../components';

import style from './style.module.scss'

const PostList = ({title, posts}) =>
{
    return (
        <div className={style.posts}>
            <h2 className={style.posts_title}>{ title }</h2>
            
            {posts.length && posts.map((post, index) =>
                {
                    return (
                        <PostItem post={post} number={index + 1} key={post.id} />
                    )
            }) }
                
            {!posts.length && <h2>Посты не найдены!</h2>}
          
        </div>
    )
}

export default PostList;