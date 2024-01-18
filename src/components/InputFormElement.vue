<script setup>

import { ref, defineProps, defineEmits, watch, onUpdated } from 'vue'

const { modelValue, name } = defineProps({
    modelValue: String,
    type: String,
    placeholder: String,
    name: String,
    mask: String,
    label: String,
    error: String
})

const emits = defineEmits(['handle-change', 'update:modelValue'])

const value = ref(modelValue);

watch(value, (newValue) => {
    //emits('update:modelValue', { value: newValue, field: name })
    emits('handle-change', { value: newValue, field: name })
})

</script>
<template>
    <label :for="name" class="mb-3 d-inline-block">{{ label }}</label>
    <textarea v-if="type === 'textarea'" v-model="value" :class="{ 'is-invalid': error }"></textarea>
    <input v-else-if="type === 'tel'"
        type="text" v-mask="[mask]"
        v-model="value"
        :placeholder="placeholder"
        class="form-control" :name="name"
        :class="{ 'is-invalid': error }"
    >
    <input v-else :type="type"
        v-model="value"
        class="form-control"
        :class="{ 'is-invalid': error }"
        :name="name"
        :placeholder="placeholder"
    >
</template>

<style scoped>
label {
    color: var(--dark);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    display: block;
    margin-bottom: 18px;
}

textarea {
    width: 100%;
    height: 168px;
    border-radius: 20px;
    border: 1px solid var(--light-grey);
    background: var(--white);
    box-shadow: 0px 2px 6px 0px rgba(19, 18, 66, 0.07);
    padding: 28px 28px 28px 20px;
    resize: none;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: var(--purple-light);
}

input[type="text"] {
    border-radius: 46px;
    border: 1px solid var(--light-grey);
    background: var(--white);
    padding: 22px 20px;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 23px;
    box-shadow: 0px 2px 6px 0px var(--dark-purple);
    color: var(--purple-light);
}

input[name="fullname"],
input[name="email"],
input[name="phone"],
input[name="company"] {
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 90% center;
}

input[name="fullname"]:focus,
input[name="email"]:focus,
input[name="phone"]:focus,
input[name="company"]:focus,
textarea:focus,
textarea:focus-visible {
    border: 2px solid var(--purple);
    outline: none;
}

input[name="fullname"] {
    background-image: url(/src/assets/user.svg);

}

input[name="fullname"]:focus {
    background-image: url(/src/assets/user-focused.svg);
}

input[name="email"] {
    background-image: url(/src/assets/email.svg);

}

input[name="email"]:focus {
    background-image: url(/src/assets/email-focused.svg);
}

input[name="phone"] {
    background-image: url(/src/assets/phone.svg);

}

input[name="phone"]:focus {
    background-image: url(/src/assets/phone-focused.svg);
}

input[name="company"] {
    background-image: url(/src/assets/address.svg);

}

input[name="company"]:focus {
    background-image: url(/src/assets/address-focused.svg);
}

::placeholder {
    color: var(--purple-light);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
}

.privacy-policy-label {
    color: var(--purple-light);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.28px;
}

.form-check {
    padding-left: 2em;
}

.form-check-input:checked {
    background-color: var(--purple);
    border-color: var(--purple);
}

.form-control.is-invalid, .was-validated .form-control:invalid {
    border-color: var(--bs-form-invalid-border-color);
}
</style>