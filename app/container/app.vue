<template>
<div>
	<component-header
	:test-title="dataTitle">
	</component-header>

	<component-tips></component-tips>


    <component-item
    v-for="(child,index) in dataList"
    key="index"
    :item-index="index"
    :item-name="child.name">
    </component-item>
   </div>
</template>

<script>
//引入组件
import componentHeader from '../components/header.vue';
import componentTips from '../components/tips.vue';
import componentItem from "../components/listItem.vue";

export default{
	data(){
		return {
			dataTitle:"Vue 测试页面",
			dataList:[{
				name:"jack"
			},{
				name:"blue"
			},{
				name:"jam"
			}]
		}
	},
	//注册组件
	components: {
		componentHeader,
		componentTips,
		componentItem
	},
	created() {
		console.log('render over!');
	}
}
</script>
<style lang="scss">
 @import "../common/css/reset.scss";
</style>
