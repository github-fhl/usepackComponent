<template>
  <div>
    <div @click="close">关闭</div>
    <div @click="open">打开</div>
    <!-- <div v-for="(el,index) in testArray" :key="index">
        <button @click="el.method(false)">{{el.type}}</button>
    </div> -->
  </div>
</template>
<script>
// import test from './test.vue'
export default {
  name: 'fs',
  props: {
    propColArray: {
      type: Array
    }
  },
  created () {
    this.valueData = this.propColArray
  },
  components: {
    // test
  },
  data () {
    return {obj: {testData: []}, valueData: []}
  },
  methods: {
    open () {
      this.obj.testData = [{label: 'test'}, {label: 'hello'}]
      this.valueData = ['123']
      console.log(this.valueData)
    },
    close () {
    },
    emitparam (value) {
      // console.log(value)
      this.obj.testData = value
      console.log(this.obj.testData)
      this.obj.testData.push({label: '789'})
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
