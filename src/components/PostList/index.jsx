import { React, useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { Popup, PostForm, PostItem } from "../../components";

import style from "./style.module.scss";

const PostList = ({ title, posts, create, remove }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Popup
        title={"Новый пост"}
        isOpen={isOpen}
        toggle={toggleModal}
        contentLabel="New Post"
        closeTimeoutMS={0}
        ariaHideApp={false}
      >
        <PostForm toggle={toggleModal} create={create} />
      </Popup>
      <div className={style.posts}>
        <div className={style.posts_header}>
          <h2 className={style.posts_header__title}>{title}</h2>

          <AiOutlineFileAdd
            className={style.posts_header__icon}
            onClick={toggleModal}
          />
        </div>

        {!posts.length && <h1 className={style.posts}>Посты не найдены!</h1>}
        {!!posts.length &&
          posts.map((post, index) => {
            return (
              <PostItem
                remove={remove}
                post={post}
                number={index + 1}
                key={post.id}
              />
            );
          })}
      </div>
    </>
  );
};

export default PostList;
