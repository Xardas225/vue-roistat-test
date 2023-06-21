<script setup>
import TableRow from "./TableRow";
import { defineProps, toRefs } from "vue";

const props = defineProps({
  user: Object,
});

const { name, phone, children, lvl } = toRefs(props.user);
</script>

<template>
  <div class="flex justify-around border border-t-0">
    <div class="w-1/2 text-left py-2" :style="`padding-left: ${lvl}rem`">{{ name }}</div>
    <div class="w-1/2 text-left py-2 pl-5">{{ phone }}</div>
  </div>
  <TableRow v-for="child in children" :key="child.name" :user="child" />
</template>
