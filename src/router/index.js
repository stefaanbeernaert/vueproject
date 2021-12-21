import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TicketDetails from "../views/Ticket/Details";
import TicketEdit from "../views/Ticket/Edit";
import TicketLayout from "../views/Layout";
import Register from "../views/Ticket/Register";
import P404 from "../views/P404";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/about-us",
    name: "x",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path:"/about",
    redirect:{name:'x'}
  },
  {
    path: "/events/:id",
    name: "TicketLayout",
    props: true,
    component: TicketLayout,
    children: [
      {
        path: "",
        name: "TicketDetails",
        component: TicketDetails,
      },
      {
        path: "/edit",
        name: "TicketEdit",
        component: TicketEdit,
      },
      {
        path: "/register",
        name: "Register",
        component: Register,

      }
    ],
  },
  {
    path: "/event/:id",
    redirect: to=>{
      return{name:'TicketDetails',params:{id: to.params.id}}
    },
    children: [
      {
        path: 'edit',redirect:to=>{
          return{name:'TicketEdit',params:{id: to.params.id}}
        },
      }
    ]
  },
  {
    path:'/:catchAll(.*)',
    name: 'P404',
    component: P404
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: P404,
    props:true
  }


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;