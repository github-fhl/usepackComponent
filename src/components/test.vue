<template>
  <div class="test">
    <div v-for="(el,index) in objC.csColumn" :key="index">{{ el.label }}</div>
    <button @click="testClick">testButton</button>
    <fs :propColArray="propColArray"></fs>
  </div>
</template>

<script>
// import _ from 'lodash'
import fs from './fs.vue'
export default{
  name: 'test',
  props: {
    column: Array
  },
  data () {
    return {
      objC: {
        csColumn: [{label: '456'}]
      },
      testObj: {
        defColumn: [],
        setColumn: []
      },
      testArray: [{
        type: 'a',
        method: this.aFun
      }],
      propColArray: []
    }
  },
  watch: {
    column: {
      handler: function (newValue, oldValue) {
        console.log(newValue, oldValue)
      },
      deep: true
    }
  },
  components: {
    fs
  },
  computed: {

  },
  created () {
  },
  mounted () {
  },
  methods: {
    aFun (flag) {
      console.log(flag)
      console.log('aaaaaaaaa')
    },
    testClick () {
      this.$emit('emitparam', this.objC.csColumn)
    }
  }
}
</script>

<style lang="scss" scoped>
  .test::after{
    box-sizing: content-box;
    content: "";
    border: 1px solid red;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    transform: rotate(45deg) scaleY(1);
    width: 3px;
    transition: transform .15s ease-in .05s;
    transform-origin: center;
  }
</style>
