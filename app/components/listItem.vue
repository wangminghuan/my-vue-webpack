<template>
<div class="item" @click="handleClick(itemName)">
  <em>我是第{{itemIndex}}个列表</em>
</div>
</template>

<script>
export default {

  props: {
    itemIndex: Number,
    itemName: String
  },
  methods: {
    handleClick(name) {
      alert("我的名字是" + name)
    }
  }

}
</script>

<style lang="scss">
.item {
  color: red;
  line-height: 40px;
  background-color: #fff;
  margin-bottom: 10px;
}
</style>
