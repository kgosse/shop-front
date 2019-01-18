<template>
<div class="navbar">
  <router-link :to="{path: '/'}">Vue-Shop</router-link>
  <div>
    <el-input placeholder="Please input" v-model="input"></el-input>
  </div>
  <template v-if="connected">
    <el-dropdown trigger="click" class="dropdown" @command="handleUserMenu">
      <span class="el-dropdown-link">
        Welcome {{name}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>Wishlist</el-dropdown-item>
        <el-dropdown-item command="logout">Log out</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </template>
  <template v-else>
    <div>
      <el-button @click="showRegistrationModal({isOpen: true})">Sign up</el-button>  
      <el-button @click="showLoginModal({isOpen: true})" :loading="loading">Log in</el-button>
    </div>
  </template>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  components: {
  },
  computed: {
    ...mapState({
      name: state => state.user.name,
      connected: state => state.user.connected,
      loading: state => state.user.login_request.requesting
    })
  },
  methods: {
    ...mapActions({
      showRegistrationModal: 'app/toggleRegistrationModal',
      showLoginModal: 'app/toggleLoginModal',
      logout: 'user/logout'
    }),
    handleUserMenu(menu) {
      switch (menu) {
        case 'logout':
          this.logout();
          break;
        case 'wishlist':
          break;
      }      
    }
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;

  .dropdown {
    cursor: pointer;
  }
}
</style>

