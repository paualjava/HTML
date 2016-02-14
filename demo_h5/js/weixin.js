var wl = window.location;
var pathUrl = 'http://'+wl.host+wl.pathname;
var wxdata = {};

wxdata = {
	signUrl : wl.href.split('#')[0],
	link : pathUrl,
	img : 'http://m.buick.com.cn/campaign/bip/images/share.jpg',
	title : '指尖上的时空穿越之旅',
	desc : '别克BiP动漫巨制＃Last Light＃第一季震撼首发！',
	timeLineTitle : '别克BiP动漫巨制＃Last Light＃第一季震撼首发！',
	timeLineImg :  'http://m.buick.com.cn/campaign/bip/images/share.jpg'
}




$.post('http://www.buick.com.cn/weixinjssign/getbuicksign.aspx',{signurl:wxdata.signUrl},function(data){
	if (data.status == 0) {
		setWxConfig(data);
	} else {
		// 1为url为空，2为url中含有#，3为异常操作，4为签名失败
	}

},'json');




function setWxConfig(data){
	wx.config({
		debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId: 'wx585bcdc64373dfbc', // 必填，公众号的唯一标识
		timestamp: data.timestamp, // 必填，生成签名的时间戳
		nonceStr:  data.nonceStr, // 必填，生成签名的随机串
		signature: data.signature, // 必填，签名，见附录1
		jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});


	wx.error(function(res){

	   // alert(res.errMsg)
	});
	setWxData();

}; 

function setWxData() {
	wx.ready(function(){
			wx.onMenuShareTimeline({
				title: wxdata.timeLineTitle, // 分享标题
				link: wxdata.link, // 分享链接
				imgUrl: wxdata.timeLineImg, // 分享图标
				success: function() {

				},
				cancel: function() {

				}
			});
			wx.onMenuShareAppMessage({
				title: wxdata.title, // 分享标题
				desc: wxdata.desc, // 分享描述
				link: wxdata.link, // 分享链接 
				imgUrl: wxdata.img, // 分享图标
				type: '', // 分享类型,music、video或link，不填默认为link
				dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				success: function() {

				},
				cancel: function() {

				}
			});
	});


};

















