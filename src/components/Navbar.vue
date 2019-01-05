<template>
<div class="header">
  <div>Vue-Shop</div>
  <div>
    <el-input placeholder="Please input" v-model="input"></el-input>
  </div>
  <div>
    <el-button>Sign up</el-button>  
    <el-button>Log in</el-button>
  </div>
</div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  components: {
  },
  computed: {
  },
  methods: {
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}
</style>

