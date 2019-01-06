<template>
<div class="wishlist">
  <div class="wishlist__title">Your wishlist</div>
  <div class="wishlist__body">
      <el-row :gutter="20">
        <el-col :span="8" v-for="o in 5" :key="o" >
          <product />
        </el-col>
      </el-row>
  </div>
</div>
</template>

<script>
import Product from '@/components/Product'

export default {
  name: 'wishlist',
  components: {
    Product
  }  
}
</script>

<style lang="scss" scoped>
.wishlist {
  display: flex;
  flex-direction: column;

  &__title {
    font-weight: bolder;
    font-size: 3em;
    margin: 1em;
  }

  &__body {
    padding: 0 1.5em;
  }

  .el-col-8 {
    margin-bottom: 2em;
  }
}
</style>


