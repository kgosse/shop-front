<template>
<div>
  <navbar />
  <app-main />
</div>
</template>

<script>
import { AppMain } from './components'
import Navbar from '@/components/Navbar'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
