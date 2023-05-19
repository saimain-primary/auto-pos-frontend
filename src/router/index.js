import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Invoices from "../views/Invoices.vue";
import NewInvoice from "../views/NewInvoice.vue";
import Purchases from "../views/Purchases.vue";
import Customers from "../views/Customers.vue";
import Settings from "../views/Settings.vue";
import Products from "../views/Products.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/services",
      name: "services",
      component: Services,
    },
    {
      path: "/purchases",
      name: "purchases",
      component: Purchases,
    },
    {
      path: "/invoices",
      name: "invoices",
      children: [
        {
          path : "",
          name: "invoices",
          component: Invoices,
        },
        {
          path: "new",
          name: "new-invoice",
          component: NewInvoice,
        },
      ],
    },
    {
      path: "/customers",
      name: "customers",
      component: Customers,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,
    },
    {
      path: "/services",
      name: "services",
      component: Services,
    },
  ],
});

export default router;
