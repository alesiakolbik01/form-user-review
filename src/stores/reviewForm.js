import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserReviewFormStore = defineStore('review', () => {
  const data = ref({
    fullname: '',
    email: '',
    phone: '',
    company: '',
    rating: 4,
    description: '',
    file: null
  })

  function set(fieldName, value) {
    data.value[fieldName] = value;
    console.log(value)
  }

  function get(fieldName) {
    return data.value[fieldName];
  }

  return { set, get }
})
