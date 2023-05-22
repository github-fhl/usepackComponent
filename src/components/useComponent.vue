<template>
  <div>
    <pack-component></pack-component>
  </div>
</template>
<script>
// 100% =  175px

// 125% = 175 % 1.25 = 140px

// 175% =  175 % 1.75 = 100px
import packComponent from 'packcomponent'
export default {
  name: 'useComponent',
  data () {
    return {
    }
  },
  components: {packComponent},
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
</style>
