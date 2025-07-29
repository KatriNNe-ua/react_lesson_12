import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import Page404 from '@/pages/Page404';
import PostsPage from '@/pages/PostsPage'
import PostsPageInf from '@/pages/PostsPage/PostsPageInf';

import { createBrowserRouter } from 'react-router'

export const routes = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        handler: {
          title: "Home",
        },
      },
      {
        path: "posts",
        Component: PostsPage,
        handler: {
          title: "Posts",
        },
      },
      {
        path: "posts-scroll",
        Component: PostsPageInf,
        handler: {
          title: "Posts Infinity",
        },
      },
      {
        path: "*",
        Component: Page404,
      },
    ],
  },
];

const router = createBrowserRouter(routes)

export default router
