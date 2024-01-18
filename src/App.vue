<script setup>

</script>

<template>
  <Header />
  <main>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="article">
            <figcaption class="blockquote-footer">
              Submit your feedback
            </figcaption>
            <h1 class="article-title mb-3">Fill the form to submit your feedback</h1>
            <p class="article-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quo eaque
              doloribus maxime nisi vitae aliquid dicta accusantium consectetur libero praesentium dolorem, nam rerum
              reprehenderit voluptates nesciunt, a tenetur excepturi.</p>
          </div>
        </div>
        <div class="col-sm position-relative">
          <FormUserReview />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background-image: url(./assets/ball-gradient.png);
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: right center;
  min-height: calc(100vh - var(--header-height));
}

.article {
  padding: 70px 38px 0 0;
}

.blockquote-footer {
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; 
  letter-spacing: 0.72px;
  text-transform: uppercase;
  color: var(--purple);
}

.blockquote-footer::before {
  font-weight: 700;
}

.article-title {
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 62px; 
  color: var(--dark)
}

.article-description {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  color: var(-purple-light)
}

@media (min-width: 1024px) {}
</style>
