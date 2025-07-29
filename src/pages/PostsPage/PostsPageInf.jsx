import { useDispatch, useSelector } from "react-redux";
import PostsList from "./components/PostsList";
import { fetchPosts } from "@/store/postsThunks";
import { useEffect } from "react";
import { setCurrentPage } from "@/store/postsSlice";

function PostsPage() {
  const {
    postsList,
    postsNumberPerPage,
    totalPagesNumber,
    currentPageNumber,
    status,
    error,
  } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchPosts({
        pageNumber: 1,
        itemsPerPage: postsNumberPerPage,
      })
    );
  }, [dispatch, postsNumberPerPage]);

  useEffect(() => {
    const showPostsFromScroll = () => {
      const distanceFromBottom = 100;
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const isBottom =
        scrollTop + clientHeight >= scrollHeight - distanceFromBottom;

      if (
        isBottom &&
        currentPageNumber < totalPagesNumber &&
        status !== "loading"
      ) {
        dispatch(
          fetchPosts({
            isMore: true,
            pageNumber: currentPageNumber + 1,
            itemsPerPage: postsNumberPerPage,
          })
        );
        dispatch(setCurrentPage(currentPageNumber + 1));
      }
    };

    window.addEventListener("scroll", showPostsFromScroll);
    return () => window.removeEventListener("scroll", showPostsFromScroll);
  }, [
    dispatch,
    totalPagesNumber,
    postsNumberPerPage,
    status,
    currentPageNumber,
  ]);

  return (
    <div className="post">
      <div className="post__container">
        <PostsList postsList={postsList} />
        {status === "loading" ? <div className="loader"></div> : null}
        {status === "failed" ? <div>{error}</div> : null}
      </div>
    </div>
  );
}

export default PostsPage;
