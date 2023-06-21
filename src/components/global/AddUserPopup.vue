<script setup>
import BaseButton from "./BaseButton";
import BaseInput from "./BaseInput";
import BaseSelect from "./BaseSelect";
import { ref, defineEmits } from "vue";

const name = ref("");
const phone = ref("");
const parent = ref("");

const emit = defineEmits("addUser", "togglePopup");

const addUser = (user) => {
  emit("addUser", user);
  emit("togglePopup");
  name.value = "";
  phone.value = "";
  parent.value = "";
};
</script>

<template>
  <div class="backdrop">
    <div class="popup">
      <h1 class="text-xl pb-5">Добавление пользователя</h1>

      <div class="popup__body">
        <BaseInput
          class="mb-5"
          type="text"
          v-model:input="name"
          label="Имя"
          placeholder="Введите имя"
        />
        <BaseInput
          class="mb-5"
          type="phone"
          v-model:input="phone"
          label="Телефон"
          placeholder="Введите телефон"
        />
        <BaseSelect class="mb-5" v-model:input="parent" label="Начальник" />
      </div>

      <div class="footer">
        <BaseButton
          class="mr-5"
          btnText="Сохранить"
          @click="addUser({ name, phone, parent })"
        />
        <BaseButton btnText="Закрыть" @click="emit('togglePopup')" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.popup {
  width: 500px;
  top: 50px;
  padding: 20px;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  z-index: 101;
  background-color: white;
  border-radius: 10px;
}

.popup h1 {
  text-align: center;
  margin: 0;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
}

.footer {
  text-align: right;
}
</style>
