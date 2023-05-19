import { ref } from "vue";
import axios from "axios";

export default function useAxios(url, options = {}) {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const fetchData = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios({ url, ...options });
      data.value = response.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  // Return the fetchData function directly, along with the data, error, and loading refs
  return { fetchData, data, error, loading };
}
