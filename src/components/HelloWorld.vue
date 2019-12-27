<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
import _ from 'lodash';
import axios from 'axios';

export default {
  	name: 'HelloWorld',
	data () {
		return {
			msg: 'Welcome to vue_webpack_demo'
		}
	},
	mounted() {
		console.log( 'HelloWorld mounted', _ , axios );
	},
}
</script>

<style>

</style>
