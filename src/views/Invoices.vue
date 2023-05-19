<script setup>
import Master from "../views/Layout/Master.vue";
import {
  PlusIcon,
  ArrowsUpDownIcon,
  PencilSquareIcon,
  TrashIcon,
  EyeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline";
import Button from "../components/Button.vue";
import { ref } from "vue";
import Input from "../components/Input.vue";
const tableData = ref([
  { column1: "Row 1, Column 1", column2: "Row 1, Column 2" },
  { column1: "Row 2, Column 1", column2: "Row 2, Column 2" },
  // Add more data rows as needed
]);
</script>

<template>
  <Master>
    <div class="mb-3 flex justify-between items-center">
      <div>
        <Input
          class="text-sm"
          placeholder="Search for anything"
          :left-icon="MagnifyingGlassIcon"
        />
      </div>
      <router-link :to="{ path: '/invoices/new' }">
        <Button class="text-sm"
          ><PlusIcon class="w-5 h-5 mr-1 inline-block" /> New Invoice</Button
        >
      </router-link>
    </div>
    <div class="w-full">
      <table class="min-w-full shadow rounded hidden md:table w-full">
        <thead class="text-sm font-medium border-b border-b-gray-100">
          <tr>
            <td class="px-4 py-3">Invoice No.</td>
            <td class="px-4 py-3">Name</td>
            <td class="px-4 py-3">Date</td>
            <td class="px-4 py-3">Status</td>
            <td class="px-4 py-3">Actions</td>
            <!-- Add more table headers as needed -->
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in tableData"
            :key="index"
            class="text-sm cursor-pointer"
            :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-white'"
          >
            <td class="px-4 py-3">{{ item.column1 }}</td>
            <td class="px-4 py-3">{{ item.column2 }}</td>
            <td class="px-4 py-3">{{ item.column2 }}</td>
            <td class="px-4 py-3">{{ item.column2 }}</td>
            <td class="px-4 py-3">
              <div class="flex gap-3">
                <EyeIcon class="w-5 h-5 font-medium hover:text-green-800" />
                <PencilSquareIcon
                  class="w-5 h-5 font-medium hover:text-yellow-500"
                />
                <TrashIcon class="w-5 h-5 font-medium hover:text-red-500" />
              </div>
            </td>
            <!-- Add more table cells as needed -->
          </tr>
        </tbody>
      </table>
    </div>
  </Master>
</template>
