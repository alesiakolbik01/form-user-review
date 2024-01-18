import { ref } from 'vue'
import { defineStore } from 'pinia'

const userDataInit = {
    fullname: '',
    email: '',
    phone: '',
    company: '',
    rating: 0,
    description: '',
    file: null,
    policy: false
};

export const useUserReviewFormStore = defineStore('reviewStore', {
  state: () => ({
    userData: Object.assign({}, userDataInit)
  }),
  getters: {
    validationForm () {
        const errors = {};
        errors.policy =  !this.userData.policy
        errors.fullname = this.userData.fullname < 2 ? 'name is required' : ''
        errors.email = (this.userData.email < 5 || !this.userData.email.indexOf('@')) ? 'email is not valid' : ''
        errors.phone = this.userData.phone < 16 ? 'phone number is not valid' : ''
        errors.rating = this.userData.rating === 0 ? 'rating is required' : ''
  
        const valid = Object.values(errors).filter(item => item).length === 0;

        return  { 
          errors, 
          valid
        }
    }
  },
  actions: {
    submitForm () {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(this.userData)
          this.clearUserDataForm();
          resolve({result: 'ok'})
        }, 3000)
      });
      //fetch('localhost:3000', this.userData)
    },
    clearUserDataForm () {
      this.userData = Object.assign({}, userDataInit);
    },
    setUserData (fieldName, value) {
        this.userData[fieldName] = value;
    }
  }
})