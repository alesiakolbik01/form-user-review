<script setup>
import { useUserReviewFormStore} from '@/stores/reviewForm'
import { ref, watch  } from 'vue'


const review = useUserReviewFormStore();

const rating = ref(review.get('rating'));

const updateRating =  (newValue) => {
    review.set('rating', newValue)
}

</script>

<template>
    <form>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="fullname">Name</label>
                <input type="email" class="form-control" name="fullname" placeholder="Email address">
            </div>
            <div class="form-group col-md-6">
                <label for="inputEmail">Email</label>
                <input type="password" class="form-control" name="inputEmail" placeholder="Password">
            </div>
        </div>
        <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input type="text" class="form-control" name="phoneNumber" placeholder="1234 Main St">
        </div>
        <div class="form-group">
            <label for="company">Company</label>
            <input type="text" class="form-control" name="company" placeholder="Company name">
        </div>
        <div class="form-row">
            <Rating id="review" v-model="rating" @handle-change="updateRating"/>
        </div>
        <div class="form-group">
            <div>
                <textarea  name="message"></textarea>
                <label  for="message">
                    Additional feedback
                </label>
            </div>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" name="privacy-policy">
            <label class="form-check-label" for="privacy-policy">I have read and accept the Privacy Policy.</label>
        </div>
        <Ubutton type="submit">
            Submit feedback
        </Ubutton>
    </form>
</template>

<style scoped>


</style>