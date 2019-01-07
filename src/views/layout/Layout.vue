<template>
<div>
  <navbar />
  <app-main />
  <registration />
  <footer-component />
</div>
</template>

<script>
import { AppMain } from './components';
import Navbar from '@/components/Navbar';
import Footer from '../Footer';
import Registration from '../modal/Registration';

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    Registration,
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
