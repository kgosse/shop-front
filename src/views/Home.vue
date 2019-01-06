<template>
  <div class="home">
    <div class="head">
      <div class="head__body">
        <p class="title">Free ecommerce template for Vue.js projects</p>
        <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima iste aspernatur. </p>
      </div>
    </div>
    <div class="body">
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :span="8" v-for="o in 8" :key="o" >
          <product />
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import Product from '@/components/Product'

export default {
  name: 'home',
  components: {
    Product
  }
}
</script>

<style lang="scss" scoped>

.home {
  display: flex;
  flex-direction: column;
  .head {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #51bafc;
    color: #fff;
    &__body {
      max-width: 960px;
      width: 960px;
      padding-bottom: 6rem;
      padding-top: 6rem;
    }
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
  .body {
    padding: 1em;
    width: 75vw;
    align-self: center;

    .el-row {
      flex-wrap: wrap;
    }
  }

  .el-col-8 {
    margin-bottom: 2em;
  }
}



</style>