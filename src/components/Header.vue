<script setup>

import { useSubscriptionStore } from '@/stores/subscription'

const subscription = useSubscriptionStore();

const handleClickButton = () => {
    subscription.subscribeToggle()
}

</script>

<template>
    <header>
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="logo col-md-6">
                    <img alt="Vue logo" class="logo-img" src="../assets/main-logo.svg" width="125" />
                </div>
                <div class="col-md-6 d-flex justify-content-end">
                    <Ubutton @click.prevent="handleClickButton" :class="{ active: subscription.isSubscribe }" type="button">
                         {{ subscription.isSubscribe ? 'Unsubscribe' : 'Subscribe' }}
                    </Ubutton>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.logo {
    width: 310px;
    height: auto;
}

.logo img {
    width: 100%;
}

header {
    padding: 32px 0;
}

</style>