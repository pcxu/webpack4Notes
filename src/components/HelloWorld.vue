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
			msg: 'Welcome to vue_webpack_demo_191219'
		}
	},
	mounted() {
		let now = new Date();
		let year = now.getFullYear(); //得到年份
		let month = now.getMonth();//得到月份
		let date = now.getDate();//得到日期
		let day = now.getDay();//得到周几
		let hour = now.getHours();//得到小时
		let minu = now.getMinutes();//得到分钟
		let sec = now.getSeconds();//得到秒
		let mss = now.getMilliseconds();//获取毫秒
		let week;
		month = month + 1;
		if (month < 10) month = "0" + month;
		if (date < 10) date = "0" + date;
		if (hour < 10) hour = "0" + hour;
		if (minu < 10) minu = "0" + minu;
		if (sec < 10) sec = "0" + sec;
		if (mss < 100) mss = "0" + mss;

		let arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
		week = arr_week[day];

		// let time = "";
		// time = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minu + ":" + sec + ":" + mss + " " + week;

		this.msg = `${year}年${month}月${date}日 ${hour}:${minu}:${sec}(${mss}) ${week}`;

		console.log( 'HelloWorld mounted', _ , axios );
	},
}
</script>

<style>

</style>
