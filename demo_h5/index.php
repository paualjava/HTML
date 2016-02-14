<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx045d9f4fde4d29b8", "8662709459bf397d6b53c3ecaf72255a");
$signPackage = $jssdk->GetSignPackage();
?>
<!doctype html>
<html>
<head>
<title>H5 demo</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=640,target-densitydpi=device-dpi,user-scalable=no" />
<script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
<script type="text/javascript">
base_url="http://172.16.65.31/HTML/demo_h5/";
base_url="http://www.wappmob.com/HTML/demo_h5/";
</script>

<link rel="stylesheet" href="css/css3.css" type="text/css" />
<link rel="stylesheet" href="css/css4.css" type="text/css" />
<link rel="stylesheet" href="css/jquery.jscrollpane.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="css/other.css?1" />
<link rel="stylesheet" href="css/index.css" type="text/css" />
</head>
<body class="s">
<div style="display:none;"><img src="images/share.jpg"/></div>
<!--<div id="loading-black" >
  <div class="load"><img src-data="images/loading-black.png" width="64" class="animate-load" /><span></span></div>
</div><div id="text" style="position:fixed; top:20%; left:30%; color:#fff; font-size:50px; z-index:99999999"></div>
<div class="down-ico-box"></div>-->
<div id="uploadloading"></div>
<div id="newloading">
  <div class="loading">
    <div class="page_index_line">&nbsp;</div>
     <div class="page_index_zi"></div>
  
   
   
    
    
    <!--	<img src="images/0.png" style=" position:absolute; left:20px;" />
    <div class="loadbar"> </div>
    <div class="ten" id="loadingnum1"></div>
    <div class="ten bit" id="loadingnum2"></div>
    <div class="percent"></div>--> 
  </div>
</div>

<div id="horizontal"></div>
<!-- <span class="sound"></span> -->
<div id="main">
  <div id="content"> 
    <!------------------------------------------------------> 
    <!------------------------------------------------------> 
    <!------------------------------------------------------> 
    <!------------------------------------------------------>
    <div id="bggray"></div>
      <div class="page_5_5"></div>
        <div class="page_7_6"></div>
        <div class="page_7_7" id="button_form_confirm"></div>
        <div class="page_7_8" id="button_form_cancle"></div>
        <div class="page_7_9"></div>
        
    <div class="box-step step0 zhuquan1">
    
    <div class="page_1_0"></div>
    	  <div class="page_1_1"></div>
        <div class="page_1_2"></div>
        <div class="page_1_3"></div>
        <div class="page_1_4"></div>
        <div class="page_1_5"></div>
        <div class="page_1_6"></div>
        <div class="page_1_7"></div>
        <div class="page_1_8"></div>
        <div class="page_1_9"></div>
        <div class="page_1_10"></div>
        <div class="page_1_11"></div>
        <div class="page_1_12"></div>
        <div class="page_1_13"></div>
        <div class="page_1_14"></div>
        <div class="page_1_15"></div>
        <div class="page_1_16"></div>
        
        

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
        <div class="page_2_10"></div>
        <div class="page_2_11"></div>
        <div class="page_2_12"></div>
        <div class="page_2_13"></div>


        
    </div>
    <!------------------------------------------------------> 
    <!------------------------------------------------------> 
    <!------------------------------------------------------> 
    <!------------------------------------------------------>
    <div class="box-step step2 zhuquan3">
    <div class="page_3_0"></div>
   <div class="page_3_1"></div>
        <div class="page_3_2"></div>
        <div class="page_3_3"></div>
        <div class="page_3_4"></div>
    </div>
    <div class="box-step step3 zhuquan4">
    <div class="page_4_0"></div>
   <div class="page_4_1"></div>
        <div class="page_4_2"></div>

    </div>
    <div class="box-step  zhuquan5">
    <div class="page_5_0"></div>
    <div class="page_5_1"></div>
        <div class="page_5_2"></div>
        <div class="page_5_3" id="button_tanchu"></div>
        <div class="page_5_4"></div>
        

    </div>
    <!--女:红色电脑-->
    <div class="box-step step4 zhuquan6">
    <div class="page_6_0"></div>
     <div class="page_6_1"></div>

    </div>
    <!--女:黑色电脑-->
    <div class="box-step step5 zhuquan7">
    <div class="page_7_0"></div>
     <div class="page_7_1"></div>
        <div class="page_7_2"></div>
        <div class="page_7_3"></div>
        <div class="page_7_4"></div>
        <div class="page_7_5" id="button_form"></div>
       

    </div>
    <!--男:蓝色-->
    <div class="box-step step6 zhuquan8">
    <div class="page_8_0"></div>
  <div class="page_8_1"></div>
        <div class="page_8_2"></div>
        <div class="page_8_3"></div>
        <div class="page_8_4"></div>
        <div class="page_8_5"></div>

    </div>
    <!--男:白色-->
    <div class="box-step step7 zhuquan9">
    <div class="page_9_0"></div>
     <div class="page_9_1"></div>
        <div class="page_9_2"></div>
        <div class="page_9_3"></div>
        <div class="page_9_4" id="button_next9"></div>
        <div class="page_9_5"></div>

    </div>
    <div class="box-step step7 zhuquan10">
    <div class="page_10_0"></div>
    <div class="page_10_1"></div>
        <div class="page_10_2"></div>
        <div class="page_10_3"></div>
        <div class="page_10_4" id="button_five_1" attr_id="A"></div>
        <div class="page_10_5" id="button_five_2" attr_id="B"></div>
        <div class="page_10_6" id="button_five_3" attr_id="C"></div>

    </div>
    <div class="box-step step7 zhuquan11">
    <div class="page_11_0"></div>
    <div class="page_11_1"></div>
        <div class="page_11_2"></div>
        <div class="page_11_3"></div>
        <div class="page_11_4"></div>
        <div class="page_11_5" id="button_next_ajax"></div>
    </div>
    
    <div class="box-step step7 zhuquan12">
    <div class="page_12_0"></div>
     <div class="page_12_1" style="display:none;"></div>
     <div class="page_12_1b" style="display:none;"></div>
     <div class="page_12_1c" style="display:none;"></div>
        <div class="page_12_2" id="button_share"></div>
        <div class="page_12_3"></div>
    </div>
    
    <div class="box-step step7 zhuquan14">
    <div class="page_14_0"></div>
     <div class="page_14_1"  style="display:none;"></div>
     <div class="page_14_1a" style="display:none;"></div>
     <div class="page_14_5" ></div>
        <div class="page_14_2" id="button_link" style="display:none;"></div>
        <div class="page_14_2" id="button_form" style="display:none;"></div>
        <div class="page_14_2a" id="button_form_aleady" style="display:none;"></div>
        <div class="page_14_3" id="button_youhui"></div>
        <div class="page_14_4"></div>
        
    </div>
    <div class="box-step step7 zhuquan15">
    <div class="page_15_0"></div>
     <div class="page_15_1"></div>
        <div class="page_15_2"></div>
        <div class="page_15_2_form">
        <form action="" method="post" class="this_form">
        	<div class="one"><input name="" id="name" type="text" holdplace="请输入您的姓名"></div>
            <div class="two"><input name="" id="phone"  type="number" holdplace="请输入您的电话"></div>
            <div class="three"><textarea name="" id="info" cols="" rows=""></textarea></div>
        </form>
        </div>
        <div class="page_15_3" id="button_submit"></div>
        <div class="page_15_4"></div>
    </div>
    
    
    
  </div>
</div>
<div style="position:absolute; left:-9999px; overflow:hidden; width:0; height:0;">
  <audio id="sound" src="audio/sound.mp3" preload="preload" loop></audio>
</div>
<script type="text/javascript" src="js/PxLoader.js"></script> 
<script src="js/zhu.js"></script> 
<script src="js/TweenMax.min.js"></script> 
<script src="js/jquery.touchSwipe.min.js"></script> 
<script src="js/Fx.min.js"></script> 
<script src="js/core.js"></script> 
<script src="js/zhuquan.js?4"></script> 
<script type="text/javascript">
$(function() {
  var core = new wizad.Core();
  core.init();
   //initTry();
})
</script>
<div id="result"></div>
<div style="display:none">
<!--监测-->
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
      		  title: "分享标题！", // 分享标题
       		  desc: "分享内容！", // 分享描述
              link: base_url, // 分享链接
              imgUrl: base_url+'images/share.jpg', // 分享图标
			  success: function () { 
				
      		 }
   	});
  wx.onMenuShareTimeline
  ({
        title: "分享标题！", // 分享标题
        desc: "分享内容！", // 分享描述
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