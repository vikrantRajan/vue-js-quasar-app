const routes = [
  {
    path: "/",
    component: () => import("layouts/search.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/Index.vue")
      },
      {
        path: "/profile/:id",
        name: "profile",
        component: () => import("pages/profile.vue")
      },
      {
        path: "/search",
        name: "search",
        component: () => import("pages/search-profile.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
