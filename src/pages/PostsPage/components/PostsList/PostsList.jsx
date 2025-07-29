import PostsItemCart from './PostsItemCart'

function PostsList({ postsList}) {
  return (
    <>
      {postsList.length? (
        <ul className="post__list">
          {postsList.map((post) => (
            <li key={post.id}>
              <PostsItemCart postsData={post} />
            </li>
          ))}
        </ul>
      ) : (
        <div>Список порожній</div>
      )}
    </>
  );
}

export default PostsList
