<script setup>
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
const router = useRouter();
const showPassword = ref(false);
const isProcessing = ref(false);
const authStore = useAuthStore();

const formData = ref({
  email: "userone@gmail.com",
  password: "password",
});

const loginSubmit = async () => {
  await authStore.login(formData.value);
  if (authStore.user) {
    router.push({ path: "/" });
  }
};
</script>

<template>
  <div class="h-screen flex items-center justify-center bg-gray-100">
    <div
      class="md:w-2/3 bg-cover bg-center h-full hidden md:block"
      :style="{ backgroundImage: 'url(/gtr.png)', transform: 'scaleX(-1)' }"
    ></div>
    <div class="md:w-1/3 p-14 bg-white h-full">
      <div class="mb-8 mt-56">
        <h1 class="text-3xl font-semibold mb-2 text-gray-800 tracking-wide">
          Login to System
        </h1>
        <p class="text-gray-600 font-normal text-sm">
          Auto Point of Sale System
        </p>
      </div>
      <form @submit.prevent="loginSubmit">
        <div class="mb-3">
          <label
            for="email"
            class="block mb-2 text-sm text-gray-700 font-medium"
            >Email Address</label
          >
          <input
            class="px-4 py-3 border-0 bg-gray-100 rounded w-full outline-none"
            id="email"
            type="email"
            v-model="formData.email"
          />
        </div>
        <div class="mb-3">
          <label
            for="password"
            class="block mb-1 text-sm text-gray-700 font-medium"
            >Password</label
          >
          <div class="relative">
            <input
              class="px-4 py-3 border-0 bg-gray-100 rounded w-full outline-none"
              id="password"
              v-model="formData.password"
              :type="showPassword ? 'text' : 'password'"
            />
            <div class="absolute top-3 right-3">
              <EyeIcon
                v-if="!showPassword"
                @click="showPassword = true"
                class="w-6 h-6 cursor-pointer text-gray-600"
              />
              <EyeSlashIcon
                v-else
                @click="showPassword = false"
                class="w-6 h-6 cursor-pointer text-gray-600"
              />
            </div>
          </div>
        </div>
        <div class="mt-5">
          <button
            type="submit"
            :disabled="isProcessing"
            class="w-full bg-gray-700 hover:bg-gray-800 py-3 font-medium rounded text-white text-sm"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
