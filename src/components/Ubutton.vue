<script setup>

import { defineEmits, defineProps } from 'vue'

const props = defineProps({
    type: {
        type: String,
        default: 'button'
    }
})

const emits = defineEmits(['handle-click'])

const handleClick = () => {
    emits('handle-click')
}

</script>
<template>
    <button :type="type" @click.prevent="handleClick">
        <slot />
    </button>
</template>

<style scoped>
button {
    display: inline-flex;
    padding: 20px 40px 21px 40px;
    justify-content: center;
    align-items: center;
    border-radius: 56px;
    background: var(--purple, #4A3AFF);
    box-shadow: 0px 3px 12px 0px var(--dark-purple);
    color: var(--white);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    outline: none;
    cursor: pointer;
    border: solid 1px transparent;
}

button:hover,
button:active {
    border: none;
    color: var(--purple);
    background: var(--white);
    border: solid 1px var(--purple);
}

.active {
    background-color: var(--purple-light);
}

.active:hover,
.active:active {
    color: var(--purple-light);
    border: solid 1px var(--purple-light);
}
</style>