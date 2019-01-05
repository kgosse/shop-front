<template>
  <div class="home">
    <div class="head">
      <p class="title">Free ecommerce template for Vue.js projects</p>
      <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima iste aspernatur. </p>
    </div>
    <div class="body"></div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.home {
  background: #51bafc;
  color: #fff;
  display: flex;
  justify-content: center;
  .head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 960px;
    width: 960px;
    padding-bottom: 9rem;
    padding-top: 9rem;
    .title {
      margin-bottom: 1.5rem;
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.125;
    }

    .subtitle {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.25;
      margin-top: -1.25rem;
    }
  }
}
</style>