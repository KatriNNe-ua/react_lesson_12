import { setCurrentPage } from "@/store/postsSlice";
import { fetchCreatePosts } from "@/store/postsThunks";
import { useState } from "react";
import { useDispatch } from "react-redux";

function PostForm({ totalPagesNumber }) {
  const [userPost, setUserPost] = useState({
    title: "",
    body: "",
    authorId: "",
  });
  const dispatch = useDispatch();

  const getDataForm = (e) => {
    setUserPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const addPost = (e) => {
    e.preventDefault();
    if (userPost.title && userPost.body && userPost.authorId) {
      dispatch(setCurrentPage(totalPagesNumber));
      dispatch(
        fetchCreatePosts({
          ...userPost,
          id: new Date().getTime(),
          likesNumber: 0,
          dislikesNumber: 0,
          createdAt: new Date(),
        })
      );
      setUserPost((prev) => ({ ...prev, title: "", body: "", authorId: "" }));
    }
  };

  return (
    <form className="post__form form">
      <div className="form__item">
        <label htmlFor="title">Заголовок: </label>
        <input
          type="text"
          id="title"
          value={userPost.title}
          onChange={getDataForm}
          name="title"
        />
      </div>
      <div className="form__item">
        <label className="form__textarea" htmlFor="body">
          Текст поля:{" "}
        </label>
        <textarea
          id="body"
          value={userPost.body}
          onChange={getDataForm}
          name="body"
        />
      </div>
      <div className="form__item">
        <label htmlFor="author">ID Автора: </label>
        <input
          type="text"
          id="author"
          value={userPost.authorId}
          onChange={getDataForm}
          name="authorId"
        />
      </div>
      <button className="btn form__btn" onClick={addPost}>
        Додати пост
      </button>
    </form>
  );
}

export default PostForm;
