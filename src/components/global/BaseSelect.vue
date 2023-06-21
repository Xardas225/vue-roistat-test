<script setup>
import { defineProps, defineEmits, toRefs, computed, inject } from "vue";

const options = inject("options");

const emit = defineEmits(["update:input"]);

const props = defineProps({
  label: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  input: String,
});

const { input, label } = toRefs(props);

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit("update:input", val),
});
</script>

<template>
  <div>
    <label class="block uppercase tracking-wide text-xs font-bold mb-2">{{
      label
    }}</label>
    <select
      class="apperance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus: border-gray-500"
      v-model="inputComputed"
    >
      <option v-for="(option, index) in options" :key="index" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
