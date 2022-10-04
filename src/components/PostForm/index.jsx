import { useState, React } from 'react'
import style from './style.module.scss'
import { Button, Input } from '../../components';

const PostForm = ({create}) =>
{
    const [post, setPost] = useState({ title: "", description: "" });
    
    const addNewPost = (e) =>
    {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            ...post
        }
        create(newPost);

        setPost({ title: "", description: "" });
    }

    return (
        <form className={ style.form }>
            <Input type="text" placeholder="Название поста" value={post.title} onChange={e => setPost({...post, title: e.target.value})}/>
            <Input type="text" placeholder="Описание поста" value={ post.description } onChange={ e => setPost({ ...post, description: e.target.value }) } />  
            <div className={ style.form_footer }>
                <Button onClick={addNewPost}>Добавить</Button>
            </div>
           
        </form>
    )
}

export default PostForm;