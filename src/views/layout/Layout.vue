<template>
<div>
  <navbar />
  <app-main />
  <footer-component />
</div>
</template>

<script>
import { AppMain } from './components'
import Navbar from '@/components/Navbar'
import Footer from '../Footer'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
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
