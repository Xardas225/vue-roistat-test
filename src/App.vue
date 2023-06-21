<template>
  <div class="container max-w-4xl mx-auto mt-10">
    <BaseButton
      class="mb-5"
      @click="isOpenPopup = !isOpenPopup"
      btnText="Добавить"
    />
    <UsersTable @sortUsers="sortUsers" :users="users" />
    <AddUserPopup
      @togglePopup="isOpenPopup = !isOpenPopup"
      @addUser="addUser"
      v-show="isOpenPopup"
    />
  </div>
</template>

<script setup>
// Components
import BaseButton from "@/components/global/BaseButton.vue";
import AddUserPopup from "@/components/global/AddUserPopup.vue";
import UsersTable from "@/components/table/UsersTable.vue";
// Vue
import { ref, provide } from "vue";
// Composables
import { getParents } from "@/composables/parents";

// refs
const isOpenPopup = ref(false);
const users = ref(
  localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
);
const parents = ref(getParents() || []);

// provides
provide("options", parents);

// methods
const addUser = (user) => {
  parents.value.push(user.name);

  if (users.value.length == 0 || !user.parent) {
    users.value.push({ ...user, children: [], lvl: 1 });
    return;
  }

  users.value.flatMap(function setUserChildren(el) {
    if (user.parent === el.name) {
      el.children.push({ ...user, children: [], lvl: el.lvl + 1 });
      return;
    }
    el.children?.flatMap(setUserChildren);
  });
};

const sortUsers = (sort) => {
  users.value.sort((a, b) => (sort ? a.name < b.name : a.name > b.name));
  users.value.flatMap(function sortChildren(el) {
    if (el.children.length > 0) {
      el.children.sort((a, b) => (sort ? a.name < b.name : a.name > b.name));
      el.children.flatMap(sortChildren);
    }
  });
};

// Save users to localStorage before reload page
window.onbeforeunload = () => {
  localStorage.setItem("users", JSON.stringify(users.value));
};
</script>