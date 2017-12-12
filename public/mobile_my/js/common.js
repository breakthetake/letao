$(function () {
	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	$('span.fa-search').on('tap',function () {  
		window.location.href="./search.html";
	});
	$('span.fa-home').on('tap',function () {  
		window.location.href="./index.html";
	});
	$('span.fa-chevron-left').on('tap',function () {  
		window.history.back();
	});
})