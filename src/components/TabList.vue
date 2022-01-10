<template>
  <div class="hello">
    <nav>
      <ul class="tab-group">
        <li class="tab "><a href="#">Tab One</a></li>
        <li class="tab active"><a href="#">Tab Two</a></li>
        <li class="tab"><a href="#">Tab Three</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'tab-list'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tab {
  background-color: #f2f2f2;
  margin-left: 0;
  margin-right: 0;
  position: relative;
  & > a {
    color: inherit;
    display: block;
    height: 100％;
    padding: 12px;
    text-decoration: none;
    width: 100％;
  }
  &.active {
    background-color: #fff;
    color: #000000;
  }
  &:hover {
    background-color: #f9f9f9;
  }
}
.tab-group,
.tab-group-vertical {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
.tab,
.tab-group,
.tab-group-vertical {
  border-color: #eeeeee;
  border-style: solid;
  border-width: 0;
}
.tab-group {
  border-bottom-width: 1px;
  .tab {
    border-bottom-width: 1px;
    border-top-width: 1px;
    bottom: -1px;
    display: inline-block;
    margin-top: 4px;
  }
  .tab:first-child {
    border-left-width: 1px;
    border-top-left-radius: 4px;
  }
  .tab:last-child {
    border-right-width: 1px;
    border-top-right-radius: 4px;
  }
  .tab.active {
    border-bottom-width: 1px;
    border-bottom-color: #2196f3;
  }
}

.tab-group-vertical {
  border-left-width: 1px;
  .tab {
    border-left-width: 1px;
    border-right-width: 1px;
    left: -1px;
    display: block;
  }
  .tab:first-child {
    border-top-width: 1px;
    border-top-right-radius: 4px;
  }
  .tab:last-child {
    border-bottom-width: 1px;
    border-bottom-right-radius: 4px;
  }
  .tab.active {
    border-left-width: 1px;
    border-left-color: #2196f3;
  }
}
</style>
