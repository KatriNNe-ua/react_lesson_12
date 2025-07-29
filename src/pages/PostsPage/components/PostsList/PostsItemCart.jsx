//import { removePost } from "@/store/postsSlice";
import { fetchDeletePosts} from "@/store/postsThunks";
import { useDispatch} from "react-redux";

function PostsItemCart({ postsData }) {
	const dispatch = useDispatch()
	const onDelete = (id) => {
    dispatch(fetchDeletePosts(id));
  };
  return (
    <article className="post__item">
      <h2 className="post__title">{postsData.title}</h2>
      <div className="post__text">
        <p>{postsData.body}</p>
      </div>

      <div className="post__block">
        <span className="post__reviews post__reviews--like">
          👍 {postsData.likesNumber}
        </span>
        <span className="post__reviews post__reviews--dislike">
          👎 {postsData.dislikesNumber}
        </span>
      </div>
      <div className="post__wrapper">
        <div className="post__author">
          Автор: <span>{postsData.authorId}</span>
        </div>

        <button
          className="post__btn btn"
          onClick={() => onDelete(postsData.id)}
        >
          Видалити
        </button>
      </div>
    </article>
  );
}

export default PostsItemCart;
