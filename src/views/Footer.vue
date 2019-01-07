<template>
<footer>
  <div class="content">
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint ducimus modi.
    </div>
    <div>
      Vue-Shop | Made with ❤ by kgosse
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'footer-component',
  
}
</script>

<style lang="scss" scoped>
footer {
  background-color: #b9e2fc;
  color: #000;
  display: flex;
  justify-content: center;
  padding: 3rem 1.5rem 6rem;
  align-items: center;

  .content {
    max-width: 960px;
    width: 960px;
    display: flex;
    justify-content: space-between;
  }
}
</style>