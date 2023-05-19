<script setup>
import Sidebar from "../../components/Sidebar.vue";
import Topbar from "../../components/Topbar.vue";
import Breadcumb from "../../components/Breadcumb.vue";
</script>

<template>
  <div class="flex relative">
    <!-- menu -->
    <Sidebar />
    <div class="w-full">
      <!-- topbar -->
      <Topbar />
      <!-- content -->
      <div class="p-2 md:p-4 md:ml-20 ml-16">
        <!-- <Breadcumb class="mb-3"/> -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>
