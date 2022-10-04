import { useState, React } from 'react'
import style from './style.module.scss'
import { Button, Input } from '../../components';

const PostItem = () =>
{

    const [post, setPost] = useState({title: "", body:""});
    return (
        <form className={ style.form }>
            <Input type="text" placeholder="Название поста" value={post.title} onChange={e => setPost({...post, title: e.target.value})}/>
            <Input type="text" placeholder="Описание поста" value={ post.description } onChange={ e => setPost({ ...post, title: e.target.value }) } />  
            <div className={ style.form_footer }>
                <Button>Добавить</Button>
            </div>
           
        </form>
    )
}

export default PostItem;