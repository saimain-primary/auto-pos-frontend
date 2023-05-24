import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import axios from "axios";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes],
});

const checkAuth = async (to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.meta.requiresAuth) {
    if (token) {
      const response = await axios.get("/me");
      const { data } = response;
      if (data.success && data.data.user) {
        next();
      } else {
        localStorage.removeItem("token");
        next("/login");
      }
    } else {
      next("/login");
    }
  } else if (to.meta.preventAuth) {
    if (token) {
      next(from.fullPath);
    } else {
      next();
    }
  } else {
    next();
  }
};

router.beforeEach(checkAuth);

export default router;
