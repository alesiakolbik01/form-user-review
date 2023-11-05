
<script setup>

import { defineProps, defineEmits, ref, watch } from 'vue';

const { modelValue } = defineProps({
    id: { type: String, required: true },
    modelValue: Number
})

const emits = defineEmits(['handle-change']);

const rating = ref(modelValue);

watch(rating, (newValue) => {
    emits('handle-change', newValue)
})

</script>

<template>
    <legend for="rating">Your service rating</legend>
    <fieldset>
        <input type="radio" name="rating" :id="'1-' + id " value="1" v-model="rating">
        <label :for="'1-' + id">1 Star</label>
        <input type="radio" name="rating" :id="'2-' + id" value="2" v-model="rating">
        <label :for="'2-' + id">2 Stars</label>
        <input type="radio" name="rating" :id="'3-' + id" value="3" v-model="rating">
        <label :for="'3-' + id">3 Stars</label>
        <input type="radio" name="rating" :id="'4-' + id" value="4" v-model="rating">
        <label :for="'4-' + id">4 Stars</label>
        <input type="radio" name="rating" :id="'5-' + id" value="5" v-model="rating">
        <label :for="'5-' + id">5 Stars</label>
    </fieldset>
</template>

<style scoped>
:root {
  --primary-color: #227093;
  --size: 48px;
}

fieldset {
  display: flex;
  align-items: center;
  border: 2px solid var(--primary-color);
  border-radius: 0.25rem;
}

legend {
  padding-inline: 0.5rem;
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
}

/* Hide label */
label {
  width: 0;
  overflow: hidden;
}

/* You can style inputs directly thanks to appearance:none! */
input {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  width: var(--size);
  height: var(--size);
  text-align: center;
  cursor: pointer;
}
input::after {
  content: url(../assets/star.svg);
  font-size: calc(var(--size) * 3 / 4);
  line-height: var(--size);
  color: var(--primary-color);
}
input:is(:checked, :hover)::after, input:has(~ input:is(:checked, :hover))::after {
    content: url(../assets/star-filled.svg);
}
input:hover ~ input::after {
    content: url(../assets/star.svg);
}

</style>