<template>
<div class="header">
  <p>{{testTitle}}</p>
  <span>姓名：{{name}}</span>
  <span>性别：{{sex}}</span>

</div>
</template>

<script>
export default {
  data() {
		const obj={
      name: "wmh",
      sex: "man"
    };
    return obj
  },
  //props, 父级传递过来的数据
  props: {
    testTitle: String
  }
}
</script>

<style lang="scss">
.header {
  background-color: #fff;
  display: flex;
  flex-direction: column;
	p {
		line-height: 40px;
	};
	span {
	  line-height: 20px;
	}
}
</style>
