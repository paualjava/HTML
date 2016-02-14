<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx045d9f4fde4d29b8", "8662709459bf397d6b53c3ecaf72255a");
$signPackage = $jssdk->GetSignPackage();
?>
<!doctype html>
<html>
<head>
<title>虎妈猫爸求壁咚</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=640,target-densitydpi=device-dpi,user-scalable=no" />
<script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
<script type="text/javascript">base_url="http://www.wappmob.com/HTML/huma_maoba/";</script>
<link rel="stylesheet" href="css/index.css" type="text/css" />
<link rel="stylesheet" href="css/css3.css" type="text/css" />
<link rel="stylesheet" href="css/css4.css" type="text/css" />
<link rel="stylesheet" href="css/jquery.jscrollpane.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="css/other.css?1" />
</head>
<body class="s">
<!--<div id="loading-black" >
  <div class="load"><img src-data="images/loading-black.png" width="64" class="animate-load" /><span></span></div>
</div><div id="text" style="position:fixed; top:20%; left:30%; color:#fff; font-size:50px; z-index:99999999"></div>
<div class="down-ico-box"></div>-->
<div id="uploadloading"></div>
<div id="newloading">
  <div class="loading">
    <div class="page_index"></div>
     <div class="page_index_zi"></div>
    
 
   
   
    
    
    <!--	<img src="images/0.png" style=" position:absolute; left:20px;" />
    <div class="loadbar"> </div>
    <div class="ten" id="loadingnum1"></div>
    <div class="ten bit" id="loadingnum2"></div>
    <div class="percent"></div>--> 
  </div>
</div>

<div id="horizontal"></div>
<span class="sound"></span>
<div id="main">
  <div id="content"> 
    <!------------------------------------------------------> 
    <!------------------------------------------------------> 
    <!------------------------------------------------------> 
    <!------------------------------------------------------>
    <div id="bggray"></div>
     <div class="page_1_6"></div>
      <div class="page_1_7"></div>
<div class="page_1_8"></div>
    <div class="box-step step0 zhuquan1">
    <div style="width: 640px;
    height: 960px;
    top: 30%;
    left: 22.0%;
    position: absolute;
    z-index: 1111;">
     <form action="" method="get">
       <div> <input name="" type="text" style="height:40px;width:300px;border:solid 2px #f00;font-size:30px;"></div>
       <div> <input name="" type="text"  style="height:40px;width:300px;font-size:30px;"></div>
       <div> <input name="" type="text"  style="height:40px;width:300px;font-size:30px;"></div>
        </form>
        </div>
    <div class="page_1_0"></div>
         <div class="page_1_1"></div>
        <div class="page_1_2"></div>
        <div class="page_1_3"></div>
        <div class="page_1_4"></div>
        <div class="page_1_5"></div>
       
        <div class="page_arrow"></div>
        

    </div>
    <div class="box-step step1 zhuquan2">
        <div class="page_2_0"></div>
      <div class="page_2_1"></div>
        <div class="page_2_2"></div>
        <div class="page_2_3"></div>
        <div class="page_2_4"></div>
        <div class="page_2_5"></div>
        <div class="page_2_6"></div>
        <div class="page_2_7"></div>
        <div class="page_2_8"></div>
        <div class="page_2_9"></div>
        <div class="page_arrow"></div>
    </div>
    <!------------------------------------------------------> 
    <!------------------------------------------------------> 
    <!------------------------------------------------------> 
    <!------------------------------------------------------>
    <div class="box-step step2 zhuquan3">
    <div class="page_3_0"></div>
     <div class="page_3_1"></div>
        <div class="page_3_2" id="button_mail"></div>
        <div class="page_3_3" id="button_femail"></div>
    </div>
    <div class="box-step step3 zhuquan4">
    <div class="page_4_0"></div>
      <div class="page_4_1"></div>
        <div class="page_4_2"></div>
        <div class="page_4_3" id="computer_zhuquan8"></div>
        <div class="page_4_4" id="computer_zhuquan9"></div>

    </div>
    <div class="box-step step28 zhuquan5">
    <div class="page_5_0"></div>
     <div class="page_5_1"></div>
        <div class="page_5_2"></div>
        <div class="page_5_3" id="computer_zhuquan6"></div>
        <div class="page_5_4" id="computer_zhuquan7"></div>

    </div>
    <!--女:红色电脑-->
    <div class="box-step step4 zhuquan6">
    <div class="page_6_0"></div>
     <div class="page_6_1"></div>
        <div class="page_6_2"></div>
        <div class="page_6_3" id="page_6_3"></div>
        <div class="page_6_4" id="button_buy_1"></div>
        <div class="page_6_5 button_change_sex"></div>
        <div class="page_arrow2"></div>

    </div>
    <!--女:黑色电脑-->
    <div class="box-step step5 zhuquan7">
    <div class="page_7_0"></div>
        <div class="page_6_1"></div>
        <div class="page_6_2_1"></div>
      <div class="page_7_1" id="page_7_1"></div>
        <div class="page_7_2" id="button_buy_2"></div>
        <div class="page_7_3 button_change_sex"></div>
        <div class="page_arrow2"></div>

    </div>
    <!--男:蓝色-->
    <div class="box-step step6 zhuquan8">
    <div class="page_8_0"></div>
      <div class="page_8_1"></div>
        <div class="page_8_2"></div>
        <div class="page_8_3" id="page_8_3"></div>
        <div class="page_8_4" id="button_buy_3"></div>
        <div class="page_8_5 button_change_sex"></div>
        <div class="page_arrow2"></div>

    </div>
    <!--男:白色-->
    <div class="box-step step7 zhuquan9">
    <div class="page_9_0"></div>
       <div class="page_8_1"></div>
        <div class="page_8_2_1"></div>
        <div class="page_8_4" id="button_buy_4"></div>
        <div class="page_8_5 button_change_sex"></div>
    <div class="page_9_1" id="page_9_1"></div>
    <div class="page_arrow2"></div>

    </div>
  </div>
</div>
<div style="position:absolute; left:-9999px; overflow:hidden; width:0; height:0;">
  <audio id="sound" src="audio/sound.mp3" preload="preload" loop></audio>
</div>
<script type="text/javascript" src="js/PxLoader.js"></script> 
<script type="text/javascript" src="js/spritespin.js"></script> 
<script src="js/zhu.js"></script> 
<script src="js/TweenMax.min.js"></script> 
<script src="js/jquery.touchSwipe.min.js"></script> 
<script src="js/Fx.min.js"></script> 
<!--<script src="js/mz_ga_code.js"></script>--> 
<script src="js/core.js"></script> 
<!--<script src="js/wizad.server.js"></script>--> 
<script src="js/zhuquan.js?1"></script> 
<script type="text/javascript">
$(function() {
  var core = new wizad.Core();
  core.init();
   initTry();
})
  function initTry() {
    var tryOrder = new wizad.TryOrder();
  $('#try_submitbtn').on('touchstart',function () {
    hylink.trackEvent('','','click','');
    submitTry();
  });

}
</script>
<div style="display:none">
<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1255436032'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s95.cnzz.com/z_stat.php%3Fid%3D1255436032' type='text/javascript'%3E%3C/script%3E"));</script>
</div>

</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  wx.config({
    debug: false,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
    ]
  });
wx.ready(function () {
     wx.onMenuShareAppMessage
	 ({
      		  title: "呼朋唤友求壁咚！一起燃爆色彩盛夏！", // 分享标题
       		  desc: "呼朋唤友求壁咚！一起燃爆色彩盛夏！", // 分享描述
              link: base_url, // 分享链接
              imgUrl: base_url+'images/share.jpg', // 分享图标
			  success: function () { 
				
      		 }
   	});
  wx.onMenuShareTimeline
  ({
        title: "呼朋唤友求壁咚！一起燃爆色彩盛夏！", // 分享标题
        desc: "呼朋唤友求壁咚！一起燃爆色彩盛夏！", // 分享描述
        link: base_url, // 分享链接
        imgUrl: base_url+'images/share.jpg', // 分享图标
        success: function () { 
   
        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
       	 }
   });
});
</script>
</html>