<template>
<div>
  <navbar />
  <app-main />
</div>
</template>

<script>
import { Navbar, AppMain } from './components'

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
