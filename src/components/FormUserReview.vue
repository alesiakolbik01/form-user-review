<script setup>
import { useUserReviewFormStore } from '@/stores/reviewForm'
import { ref } from 'vue'

const reviewStore = useUserReviewFormStore();
const userData = reviewStore.userData;
const loader = ref(false);

const updateDataForm = (data) => {
    reviewStore.setUserData(data.field, data.value);
    console.log()
}

const errors = ref({});

const submitForm = async () => {
    const validation = reviewStore.validationForm;
  
    if(validation.valid){
        loader.value = true;
        const { result } = await reviewStore.submitForm();
        if(result === 'ok'){
            loader.value = false;
            userData.value = reviewStore.userData;
        }
    }
    else {
        errors.value = validation.errors;
        console.log(validation.errors);
    }
}

</script>

<template>
    <form class="row g-3">
        <div class="col-md-6">
            <InputFormElement type="text"
                label="Name"
                :error="errors.fullname"
                placeholder="Name"
                name="fullname"
                v-model="userData.fullname"
                @handle-change="updateDataForm"
            />
            <ErrorMessage v-if="errors.fullname">
                {{ errors.fullname }}
            </ErrorMessage>
        </div>
        <div class="col-md-6">
            <InputFormElement type="text"
                label="Email address"
                placeholder="Email"
                :error="errors.email"
                name="email"
                v-model="userData.email"
                @handle-change="updateDataForm"
            />
            <ErrorMessage v-if="errors.email">
                {{ errors.email }}
            </ErrorMessage>
        </div>
        <div class="col-md-6">
            <InputFormElement 
                type="tel" 
                mask="(##) ### ### ###" 
                placeholder="(11) 111 222 333" 
                label="Phone Number" 
                :error="errors.phone"
                name="phone" 
                v-model="userData.phone"
                @handle-change="updateDataForm"
            />
            <ErrorMessage v-if="errors.phone">
                {{ errors.phone }}
            </ErrorMessage>
        </div>
        <div class="col-md-6">
            <InputFormElement 
                type="text" 
                label="Company" 
                placeholder="Company name" 
                name="company" 
                v-model="userData.company" 
                @handle-change="updateDataForm"
            />
        </div>
        <div class="col-12 mt-4">
            <Rating id="review" v-model="userData.rating" @handle-change="updateDataForm" />
            <ErrorMessage v-if="errors.rating">
                {{ errors.rating }}
            </ErrorMessage>
        </div>
        <div class="col-12">
            <InputFormElement type="textarea" label="Additional feedback"
                placeholder="If you have any additional feedback, please type it in here..."
                name="description"
                v-model="userData.description"
                @handle-change="updateDataForm"
            />
        </div>
        <div class="form-check col-12">
            <input class="form-check-input privacy-policy-input"
                type="checkbox"
                v-model="userData.policy"
                name="privacy-policy"
                :class="{ 'is-invalid': errors.policy }"
                @change="(event) => updateDataForm({ value: event.target.checked, field: 'policy' })"
            >
            <label class="form-check-label privacy-policy-label" for="privacy-policy">I have read and accept the Privacy Policy.</label>
        </div>
        <div class="col-12">
            <Ubutton type="submit" @handle-click="submitForm">
                Submit feedback
            </Ubutton>
        </div>
    </form>
    <div class="louder-wrapper position-absolute" v-if="loader">
        <Spinner/>
    </div>
   
</template>

<style scoped>

form {
    border-radius: 34px;
    background: var(--white);
    box-shadow: 0px 98px 66px 0px rgba(19, 18, 66, 0.02), 1px 4px 104px 0px rgba(20, 20, 43, 0.04), 0px 54px 54px 0px rgba(74, 58, 255, 0.02);
    padding: 70px 48px;
}

.louder-wrapper {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>