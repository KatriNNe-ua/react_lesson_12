import { setPostsNumberPerPage } from "@/store/postsSlice";
import { useDispatch } from "react-redux";

function PostsNumberPerPage() {
  const dispatch = useDispatch();

  const number = [5, 6, 7, 8];
  return (
    <div className="post__number">
      <div>Постів на сторінці:</div>
      <select
        name="number"
        id="number"
        onChange={(e) =>
          dispatch(setPostsNumberPerPage(Number(e.target.value)))
        }
      >
        {number.map((num, index) => (
          <option value={num} key={index}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PostsNumberPerPage;
