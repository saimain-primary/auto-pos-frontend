import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Invoices from "../views/Invoices.vue";
import NewInvoice from "../views/NewInvoice.vue";
import Purchases from "../views/Purchases.vue";
import Customers from "../views/Customers.vue";
import Settings from "../views/Settings.vue";
import Products from "../views/Products.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      preventAuth: true,
    },
  },
  {
    path: "/services",
    name: "services",
    component: Services,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/purchases",
    name: "purchases",
    component: Purchases,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoices",
    name: "invoices",
    children: [
      {
        path: "",
        name: "invoices",
        component: Invoices,
      },
      {
        path: "new",
        name: "new-invoice",
        component: NewInvoice,
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/customers",
    name: "customers",
    component: Customers,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/products",
    name: "products",
    component: Products,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/services",
    name: "services",
    component: Services,
    meta: {
      requiresAuth: true,
    },
  },
];

export default routes;
