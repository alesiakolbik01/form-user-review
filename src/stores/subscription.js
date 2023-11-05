import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSubscriptionStore = defineStore('subscription', () => {
  const isSubscribe = ref(false)
  function subscribeToggle() {
    isSubscribe.value = !isSubscribe.value
  }

  return { isSubscribe, subscribeToggle }
})
