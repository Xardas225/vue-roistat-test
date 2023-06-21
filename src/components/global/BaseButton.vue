<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  btnText: String,
});

const { btnText } = toRefs(props);
</script>

<template>
  <button class="bg-transparent text-gray-900 font-semibold hover:text-white py-2 px-4 border hover:border-transparent hover:bg-green-500  border-green-500 rounded">
    {{ btnText }}
  </button>
</template>
