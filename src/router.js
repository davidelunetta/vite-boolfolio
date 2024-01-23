import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppPosts from "./pages/AppPosts.vue";
import SinglePost from "./pages/SinglePost.vue";
import NotFound from "./pages/NotFound.vue";



const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/",
            name: "home",
            component: AppHome,
        },
        {
            path: "/projects",
            name: "projects",
            component: AppPosts,
          },
          {
            path: "/project/:slug",
            name: "single-project",
            component: SinglePost,
          },
          {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound
          } 
    ]
});
export default router;