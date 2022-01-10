<template>
  <div class="hello">
    <main>
      <header class="layout-header">Header</header>
      <div class="layout-sidebar">Sidebar</div>
      <div class="layout-content">Content</div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'layout'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello{
    width: 100%;
    height: 100%;
}
main {
  height: 100%;
  width: 100%;
}
.layout-header {
  background-color: #dddd88;
  display: block;
  min-height: 10%;
  width: 100%;
}
.layout-header,
.layout-sidebar,
.layout-content {
  text-align: center;
}
.layout-sidebar,
.layout-content {
  float: left;
  height: calc(100% - 20%);
}
.layout-sidebar {
  background-color: #8888bb;
  width: 20%;
}
.layout-content {
  background-color: #eebb55;
  width: 80%;
}
@media all and (max-width: 640px) {
  .layout-header,
  .layout-sidebar,
  .layout-content {
    display: block;
    float: none;
    height: auto;
    min-height: 100px;
    width: 100%;
  }
}
</style>
