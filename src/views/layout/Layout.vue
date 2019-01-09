<template>
<div>
  <navbar />
  <app-main />
  <registration-modal-component />
  <login-modal-component />
  <footer-component />
</div>
</template>

<script>
import { AppMain } from './components';
import Navbar from '@/components/Navbar';
import Footer from '../Footer';
import Registration from '../modal/Registration';
import Login from '../modal/Login';

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    'registration-modal-component': Registration,
    'login-modal-component': Login,
    'footer-component': Footer,
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
