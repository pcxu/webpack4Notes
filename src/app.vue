<template>
	<div id="app">
		<!-- 路由加载 -->
    	<router-view />
	</div>
</template>

<script>


export default {
  	name: 'App',
	data () {
		return {
		}
	},
}
</script>

<style lang="less" scoped>
	#app{
		margin: 0;
		padding: 0;
	}
</style>