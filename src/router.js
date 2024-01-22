import { createRouter, createWebHistory } from "vue-router";
import AppHomeVue from "./pages/AppHome.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name: "home",
            component: AppHome,
        },
        {
            path: "/project",
            name: "project",
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
}

)