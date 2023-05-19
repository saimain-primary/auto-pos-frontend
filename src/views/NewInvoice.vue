<script setup>
import Master from "../views/Layout/Master.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import { PlusIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

const rowCount = ref(1);
const addRow = () => {
  console.log("abc");
  rowCount.value += 1;
};

const discountType = ref("fixed");
</script>

<template>
  <Master>
    <div>
      <div
        class="bg-gray-100 p-4 mb-2 rounded-e-lg rounded-s-lg text-sm font-medium"
      >
        Customer Information
      </div>
      <div
        class="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5"
      >
        <Input label="Name" />
        <Input label="Vehicle Name" />
        <Input label="Plate No." />
        <Input label="Email" />
        <Input label="Phone" />
        <Input label="Address" />
      </div>
    </div>
    <div>
      <table class="w-full px-2">
        <thead class="font-medium text-sm bg-gray-100">
          <td class="p-4 rounded-l-lg">Service</td>
          <td class="p-4 w-[100px]">Quantity</td>
          <td class="p-4 w-[240px]">Amount</td>
          <td class="p-4 w-[240px] rounded-r-lg">Total</td>
        </thead>
        <tbody class="">
          <tr class="" v-for="row in rowCount" :key="row">
            <td class="p-4">
              <Input class="" placeholder="Service Name" />
            </td>
            <td class="p-4">
              <Input class="w-[100px]" type="number" />
            </td>
            <td class="p-4">
              <Input class="w-[240px]" type="number" />
            </td>
            <td class="p-4">
              <Input class="w-[240px]" type="number" />
            </td>
          </tr>
        </tbody>
      </table>
      <Button
        @click="addRow"
        class="text-sm bg-white font-medium text-gray-950 hover:bg-white hover:text-gray-950 focus:bg-white"
        ><PlusIcon class="w-4 h-4 inline-block me-1" /> Add Service</Button
      >
    </div>
    <div class="flex items-center">
      <div class="w-2/3"></div>
      <div class="w-1/3 flex flex-col gap-6 text-sm">
        <div class="flex items-center justify-between gap-8">
          <div class="">
            <p>Subtotal</p>
          </div>
          <div class="flex mx-6"></div>
          <p>Ks 0</p>
        </div>
        <div class="flex items-center justify-between gap-8">
          <div class="">
            <p class="mb-1">Discount</p>
            <div class="flex gap-1">
              <select
                class="border appearance-none border-gray-300 rounded-md text-sm px-2 py-1 focus:border-gray-300 focus:outline-none"
                name=""
                id=""
              >
                <option value="">fixed</option>
                <option value="">percent</option>
              </select>
              <!-- <v-select
                class="text-xs w-[100px]"
                v-model="discountType"
                :clearable="false"
                :options="['fixed', 'percent']"
              ></v-select> -->
              <Input class="text-xs w-[100px]" type="number" />
            </div>
          </div>
          <p>Ks 0</p>
        </div>
        <div class="flex items-center justify-between gap-8">
          <div class="">
            <div class="flex gap-2 items-center">
              <p class="">Tax (%)</p>
              <Input class="text-xs px-[5px] w-[80px]" type="number" />
              <select
                class="border appearance-none border-gray-300 rounded-md text-sm px-2 py-[6px] focus:border-gray-300 focus:outline-none"
                name=""
                id=""
              >
                <option value="">Inclusive</option>
                <option value="">Exclusive</option>
              </select>
              <!-- <v-select
                class="text-xs w-[100px]"
                v-model="discountType"
                :clearable="false"
                :options="['fixed', 'percent']"
              ></v-select> -->
            </div>
          </div>
          <p>Ks 0</p>
        </div>
      </div>
    </div>
  </Master>
</template>
