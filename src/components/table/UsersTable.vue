<script setup>
import TableRow from "./TableRow";
import { defineProps, toRefs, defineEmits, ref } from "vue";

const props = defineProps({
  users: Array,
});

const { users } = toRefs(props);

const emit = defineEmits("sortUsers");

const sort = ref(false);
const sortUsers = () => {
  sort.value = !sort.value;
  emit("sortUsers", sort.value);
};
</script>

<template>
  <div class="w-full">
    <div class="flex justify-around">
      <div
        @click="sortUsers"
        class="w-1/2 py-2 text-center border cursor-pointer"
      >
        Имя
        <i :class="`fa fa-solid fa-arrow-${sort ? 'down' : 'up'}`"></i>
      </div>
      <div class="w-1/2 py-2 text-center border">Телефон</div>
    </div>

    <div class="w-full">
      <TableRow v-for="user in users" :key="user.name" :user="user" />
    </div>
  </div>
</template>

<style lang="scss"></style>
