<template>
<div class="header">
  <router-link :to="{path: '/'}">Vue-Shop</router-link>
  <div>
    <el-input placeholder="Please input" v-model="input"></el-input>
  </div>
  <div>
    <el-button>Sign up</el-button>  
    <el-button @click="showLoginModal({isOpen: true})">Log in</el-button>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {
  },
  computed: {
  },
  methods: {
    ...mapActions({
      showRegistrationModal: 'toggleRegistrationModal',
      showLoginModal: 'app/toggleLoginModal',
    })
		// showSignupModal () {
		// 	// this.$store.toggleRegistrationForm(true);
		// }
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
  align-items: center;
}
</style>

