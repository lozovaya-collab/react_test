import { React } from 'react'
import style from './style.module.scss'
import { Button } from '../../components';

const PostItem = ({number, post}) =>
{

    return (
        <div className={ style.post }>
            <div className={ style.post_content }>
                <h3 className={style.post_content__title}>{ number }. { post.title }</h3>
                <p className={style.post_content__description}>{ post.description }</p>  
            </div>
            <Button>Удалить</Button>
        </div>
    )
}

export default PostItem;