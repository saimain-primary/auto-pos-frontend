import { ref, computed } from "vue";
import { defineStore } from "pinia";
import useAxios from "../composables/useAxios";
const baseURL = import.meta.env.VITE_APP_BASE_URL;
import axios from "axios";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    token: null,
    error: null,
    loading: false,
  }),
  actions: {
    async login(req) {
      this.loading = true;
      this.error = null;
      const options = {
        method: "POST",
        data: req,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };

      const axiosInstance = useAxios(baseURL + "/login", options);

      try {
        await axiosInstance.fetchData();
        const response = axiosInstance.data.value.data;
        this.user = response.user;
        this.token = response.token;
        localStorage.setItem("token", this.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("token")}`;
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      this.loading = true;
      this.error = null;
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      const axiosInstance = useAxios(baseURL + "/logout", options);

      try {
        await axiosInstance.fetchData();
        const response = axiosInstance.data.value;
        this.user = null;
        this.token = null;
        localStorage.removeItem("token");
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
  },
});
