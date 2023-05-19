<script setup>
import { useRouter } from "vue-router";
import {
  BuildingStorefrontIcon,
  WrenchScrewdriverIcon,
  ReceiptPercentIcon,
  UsersIcon,
  ArrowLeftOnRectangleIcon,
  ChartBarIcon,
  ReceiptRefundIcon,
  Cog6ToothIcon,
  CubeIcon,
} from "@heroicons/vue/24/outline";
import NavItem from "./NavItem.vue";
import { useAuthStore } from "../stores/auth";
const router = useRouter();
const authStore = useAuthStore();

const logout = async () => {
  await authStore.logout();
  router.push({ path: "/login" });
};
</script>

<template>
  <div
    class="bg-gray-800 w-16 md:w-20 text-white flex justify-center p-4 fixed bottom-0 left-0 top-0"
  >
    <nav>
      <div class="flex flex-col items-center justify-between h-full">
        <ul class="flex flex-col justify-center items-center gap-2">
          <li>
            <div class="flex items-center justify-center mb-8">
              <BuildingStorefrontIcon
                class="w-10 h-10 bg-white text-gray-700 p-2 rounded"
              />
            </div>
          </li>
          <NavItem to="/" text="Dashboard" :icon="ChartBarIcon" />
          <NavItem to="/invoices" text="Invoices" :icon="ReceiptPercentIcon" />
          <NavItem to="/purchases" text="Purchase" :icon="ReceiptRefundIcon" />
          <NavItem to="/products" text="Products" :icon="CubeIcon" />
          <NavItem
            text="Services"
            to="/services"
            :icon="WrenchScrewdriverIcon"
          />
          <NavItem to="/customers" text="Customers" :icon="UsersIcon" />
          <NavItem to="/settings" text="Settings" :icon="Cog6ToothIcon" />
        </ul>
        <ul>
          <li
            @click.prevent="logout"
            class="cursor-pointer flex flex-col items-center justify-center gap-2 w-[56px] h-[56px] md:w-[64px] md:h-[64px] hover:bg-white/10 rounded-lg"
          >
            <ArrowLeftOnRectangleIcon class="w-6 h-6 mx-auto" />
            <p class="text-[8px] md:text-[10px]">Logout</p>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
