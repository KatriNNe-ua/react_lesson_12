import {
  fetchPosts,
  fetchDeletePosts,
  fetchCreatePosts,
} from "./postsThunks";
//========================================
export const fetchPostsExtraReducers = (builder) => {
  builder
    .addCase(fetchPosts.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "success";
	  if (action.meta.arg.isMore) {
      state.postsList = [...state.postsList, ...action.payload.items];
    } else state.postsList = action.payload.items;
      const paginationData = action.payload.pagination;
      state.currentPageNumber = paginationData.currentPage;
      state.postsNumberPerPage = paginationData.pageSize;
      state.totalPagesNumber = paginationData.totalPages;
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
};
//===========================================================
export const fetchDeletePostsExtraReducers = (builder) => {
  builder
    .addCase(fetchDeletePosts.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(fetchDeletePosts.fulfilled, (state, action) => {
      state.status = "success";
      if (state.postsList.length === 1 && state.currentPageNumber !== 0) {
        state.currentPageNumber -= 1;
      }
      state.postsList = state.postsList.filter(
        (post) => post.id !== action.payload.id
      );
    })
    .addCase(fetchDeletePosts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
};
//=======================================================
export const fetchCreatePostsExtraReducers = (builder) => {
  builder
    .addCase(fetchCreatePosts.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(fetchCreatePosts.fulfilled, (state, action) => {
      state.status = "success";
      state.postsList.push(action.payload);
    })
    .addCase(fetchCreatePosts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
};
