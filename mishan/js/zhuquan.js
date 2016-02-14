//qq 254406344


 /*   hold
    tap
    doubletap
    drag, dragstart, dragend, dragup, dragdown, dragleft, dragright
    swipe, swipeup, swipedown, swipeleft, swiperight
    transform, transformstart, transformend
    rotate
    pinch, pinchin, pinchout
    touch (gesture detection starts)
    release (gesture detection ends)

*/


// var mz_gaArray = [{"别克BIP-","PAGE_"}]

//hylink.setGaPath('/campaign/bip');

window.TIMER1210 = null;
var Detect = (function(){
    var self = {
        isMobile: function() {
            var result = false;
            
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
                result = true;
            }
            
            return result;
        },
        //Mobile Phones
        isIPhone: function() {
            return (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i));
        },
        isIPad: function() {
            return navigator.userAgent.match(/iPad/i);
        },
        isAndroid: function() {
            return navigator.userAgent.match(/Android/i)
        },
        who: function() {
            var N= navigator.appName, ua= navigator.userAgent, tem;
            var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
            M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
            return M;
        },
        language: function() {
            var language = window.navigator.userLanguage || window.navigator.language;
            return language;
        }
    };
    return self;
})();

function is_weixn(){
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i)=="micromessenger") {
			return true;
		} else {
			return false;
		}
	}









function GetRandomNum(Min,Max)
{   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}  

function REMOVEADD ( obj ){
		obj.removeClass('hover')
		setTimeout( function (){
			obj.addClass('hover');
		} , 200)
};



/*$('img').each( function (){
	this.ontouchmove = function (ev){
		ev.preventDefault();
	}	
})*/


function Canvas (bodyStyle) {
	$('.s24-2').width(0)
	$('.s24-1').show();
	$('.s24-4').removeAttr('style');
	window.ZZZZZ = 0;
    bodyStyle.mozUserSelect = 'none';
    bodyStyle.webkitUserSelect = 'none';
	var img = new Image();
	img.src = 'images/24/5.jpg'
	
    var canvas = document.getElementById('canvas-hb');
    canvas.style.backgroundColor = 'transparent';
    canvas.style.position = 'absolute';
	
	
	
    img.onload = function(e) {
        var ctx;
        var w = img.width,
        h = img.height;
        var offsetX = canvas.offsetLeft,
        offsetY = canvas.offsetTop;
        var mousedown = false;

        function layer(ctx) {
            ctx.fillStyle = 'transparent';
            ctx.fillRect(0, 0, w, h);

        }

		var ggzi = $('.s24-1')[0];
        function eventDown(e) {
			$(ggzi).hide()
			window.ZZZZZ = 0;
            e.preventDefault();
            mousedown = true;
			
				 if (e.changedTouches) {
                    e = e.changedTouches[e.changedTouches.length - 1];

                }
                var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0,
                y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;
				
			ctx.beginPath();  
			ctx.moveTo(x,y);  
				
        }

        function eventUp(e) {
            e.preventDefault();
            mousedown = false;
			
			switch($('.s24-2').width())
			{
				case 0:
					$('.s24-2').width(120);
					$('.s24-4').css('left' , 300)
					break;
				case 120:
					$('.s24-2').width(160);
					break;
				case 160:
					$('.s24-4').css('left' , 410)
					$('.s24-2').width(290);
					break;
				case 290:
				
					$('.s24-4').css('left' , 120).hide();
					$('.s24-2').width(400);
					  	canvas.removeEventListener('touchstart', eventDown);
						canvas.removeEventListener('touchend', eventUp);
						canvas.removeEventListener('touchmove', eventMove);
						canvas.removeEventListener('mousedown', eventDown);
						canvas.removeEventListener('mouseup', eventUp);
						canvas.removeEventListener('mousemove', eventMove);
						
						$('.s24-2').fadeOut(200 , function (){
							$('.s24-2').fadeIn(200 , function (){
								$('.s24-2').fadeOut(200 , function (){
									$('.s24-2').fadeIn(200 , function (){
										PageUp(28);
										window.NOSWIPE = false		
									})	
							})		
							})	
						})
					break;	
			}
			
			
			 setTimeout( function (){ctx.clearRect(0, 0, w, h);} , 300)
        }
		
		
		
		
		
        function eventMove(e) {
            e.preventDefault();
			
            if (mousedown) {
				
                if (e.changedTouches) {
                    e = e.changedTouches[e.changedTouches.length - 1];

                }
                var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0,
                y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;
				
				ctx.strokeStyle = "#fff";
				ctx.lineWidth = 8;
				ctx.lineCap ='round';

				ctx.lineTo(x,y);  
				ctx.stroke();  
				
				

            }

        } 
		
        canvas.width = w;
        canvas.height = h;
        canvas.style.backgroundImage = 'url(' + img.src + ')';
        ctx = canvas.getContext('2d');
        ctx.fillStyle = 'transparent';
        ctx.fillRect(0, 0, w, h);
        layer(ctx);
		ggzi.addEventListener('touchstart', eventDown);
		ggzi.addEventListener('mousedown', eventDown);
        //ctx.globalCompositeOperation = 'destination-out';
        canvas.addEventListener('touchstart', eventDown);
        canvas.addEventListener('touchend', eventUp);
        canvas.addEventListener('touchmove', eventMove);
        canvas.addEventListener('mousedown', eventDown);
        canvas.addEventListener('mouseup', eventUp);
        canvas.addEventListener('mousemove', eventMove);

    }
    

		};
		
		
		
function D360(L) {
			var arr = ['red','blue','yellow','green','pink','#ccc']
			var arr2 = [
				 ['images/19/2.jpg','images/19/4.jpg','images/19/4.jpg','images/19/4.jpg','images/19/1.jpg','images/19/3.jpg']
				
			];

			
			
					var wallArr = [];
					for ( var i=0; i< 6 ; i++ ) {
						
						var d = document.createElement('div');
						 d.style.width= '514px';
						 d.style.height= '514px';
						 
						 
						 switch( i )
						 {
							case 0:
								d.innerHTML ='<img src="'+arr2[0][i]+'" width="100%" />';
								break;
							case 1:
								d.innerHTML ='<img src="'+arr2[0][i]+'" width="100%" /><span class="mubiaodian mu1 hover"></span><span class="mubiaodian mu2"></span>';
								break;
							case 4:
								d.innerHTML ='<img src="'+arr2[0][i]+'" width="100%" /><span class="mubiaodian mu3"></span><span class="mubiaodian mu4"></span><span class="mubiaodian mu5"></span>';
								break;
							case 5:
								d.innerHTML ='<img src="'+arr2[0][i]+'" width="100%" /><span class="mubiaodian mu6"></span>';
								break;
							default:
								d.innerHTML ='<img src="'+arr2[0][i]+'" width="100%" />';
								break;		 
						}
						 
						 wallArr.push (d);	
					}
					var t = new L.fx.panorama ( {
						renderType :　'11',
						renderElements : wallArr,
						warp : $('.step19')[0]
					} );
					window.OBJ360 = t;
					t.autoSpeed = 0;
					//t.androidDeviceSupport = !0;
					t.lockLat = 1;    // y轴锁定
					t.initCss3d ();
					if (  L.tool.device () === 'mobile' ) {
						t.renderMobile ();
						t.initDevice ();		
					} else {
						t.renderPc();	
					}
					t.initDomEvent ();
					
				
			
			
				
			
			
			

		} 
function FROAZD360() {
		
		
		
					$('.step19').append('<div id="panorama"></div>');
					  	var AZARR = [380,630,1152,1840,2317,4200]
      					$("#panorama").spritespin({
        width     : 640,
        height    : 1000,
        frames    : 4360,
        behavior  : "drag",
        module    : "panorama",
        sense     : -.3,
        source    : "images/19/0.jpg",
        animate   : false,
        loop      : true,
        frameWrap : false,
        frameTime : 60,
		onLoad : function (){
			
			//$("#panorama").append('<div id="anzhuo360"><div class="AZ_mubiao AZ_mubiao1"></div><div class="AZ_mubiao AZ_mubiao2"></div><div class="AZ_mubiao AZ_mubiao3"></div><div class="AZ_mubiao AZ_mubiao4"></div><div class="AZ_mubiao AZ_mubiao5"></div><div class="AZ_mubiao AZ_mubiao6"></div><img src="images/19/new/1.png" class="s19-n-1 s19-n" /><img src="images/19/new/2.png" class="s19-n-2 s19-n" /><img src="images/19/new/3.png" class="s19-n-3 s19-n" /><img src="images/19/new/4.png" class="s19-n-4 s19-n" /><img src="images/19/new/5.png" class="s19-n-5 s19-n" /><img src="images/19/new/6.png" class="s19-n-6 s19-n" /><img src="images/19/new/7.png" class="s19-n-7" /></div>')
					
		},
		onFrame : function ( i , b ){
			
			if(AZARR.length == 0) {
				AZARR = [999999999];
				setTimeout( function (){
					window.PageUp(23);		
				} , 1000)	
			}
			if( b.frame > AZARR[0]) {
				window.ONDRAG = true;
				setTimeout( function (){
					window.ONDRAG = false;	
				} , 300)
				
				$('.s19-n:hidden:first').fadeIn(1000);
				$('.AZ_mubiao').not('.hover').eq(0).addClass('hover');
				AZARR.splice(0,1);
			}
			
			document.getElementById('anzhuo360').style.left = - b.frame + 'px'
			
		}
      });
				
} 
	

var PAGE_INDEX = 1;
var TRANSTION_SPEED = 'all .5s'
var api ;
var LASTINDEX = 1;
var TranslateZ = Zhu._translateZ();
var IDINDEX = 0;


	
var BstopTime = null;
	

window.Timer = null;

var LoadArr = [];
LoadArr.push("images/close.png");
LoadArr.push("images/iphone.png");
LoadArr.push("images/loading-black.png");
LoadArr.push("images/loading.gif");
LoadArr.push("images/music.png");
LoadArr.push("images/page_1_0.jpg");

LoadArr.push("images/share.jpg");
	//if(Detect.isAndroid() && is_weixn()) LoadArr.push("images/19/0.jpg");
	
	/*function LoadFn(arr , fn ){
		
		var loader = new PxLoader();
		
		for ( var i = 0 ; i < arr.length ; i ++)
		{
			loader.addImage(arr[i]);	
		}
		
		
		
		loader.addProgressListener(function(e) {
			
			var percent = Math.round( e.completedCount / e.totalCount * 100 );
			$('#loading-black span').text(percent);
			
		});
		loader.addCompletionListener(fn);
		loader.start();	
	};
	LoadFn(LoadArr , function (){})
*/


	// document.addEventListener('touchstart' , function (ev){
	// 	ev.preventDefault();
	// 	return false;
	// } , false)
	
	// document.addEventListener('touchmove' , function (ev){
	// 	ev.preventDefault();
	// 	return false;
	// } , false)
	function orientationchange() {
		if (window.orientation == 0 || window.orientation == 180) {
			document.getElementById("horizontal").style.display = 'none';
			$('#main').show();
			window.OBJ360 && window.OBJ360.play()
	
		} else {
			document.getElementById("horizontal").style.display = 'block';
			window.OBJ360 && window.OBJ360.stop()
			$('#main').hide();
		}
	
	};
	
	

	function is_weixn(){
			var ua = navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i)=="micromessenger") {
				return true;
			} else {
				return false;
			}
		}
	if(is_weixn())
	{
		document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
			WeixinJSBridge.call('hideToolbar');
		});	
		
	}

	$(function (){
	/*$('img').bind('touchstart' , function ( ev ){
		
			ev.preventDefault();
			return false;
			
	}).bind('touchmove' , function ( ev ){
		
			ev.preventDefault();
			return false;
			
	})*/
	
	setTimeout(scrollTo,0,0,0);
	window.onorientationchange = function() {
		orientationchange();
	};
	

	var FristImg = ['images/page_1_4.png'];

	var loader = new PxLoader();
	for(var i=0; i <FristImg.length;i++ ) {
		loader.addImage(FristImg[i]);
	}
	//屏幕尺寸
	device_height=$(window).height();
	if(device_height>960)
	{
		device_height=device_height+"px";
		background_size="640px "+device_height
		$(".page_1_0,.page_2_0,.page_3_0,.page_4_0,.page_5_0,.page_6_0,.page_7_0,.page_8_0,.page_9_0,.page_10_0,.page_11_0,.page_12_0,.page_14_0").css({"height":device_height,"background-size":background_size});
		$("#main,#content,.box-step").css({"height":device_height});
		$("#content,.box-step").css({"max-height":device_height});
		
	}
	if(device_height<850)
	{
		$(".page_2_1").css({top:'0%'});
		$(".page_2_2").css({top:'62%'});
		$(".page_2_3").css({top:'70%'});
		$(".page_2_4").css({top:'80%'});
		$(".page_2_5").css({top:'90%'});
		$(".page_3_1").css({top:'3%'});
		$(".page_3_2").css({top:'10%'});
		$(".page_3_3").css({top:'70%'});
		$(".page_3_4").css({top:'80%'});
		$(".page_5_1").css({top:'3%'});
		$(".page_5_2").css({top:'10%'});
		$(".page_5_3").css({top:'80%'});
		$(".page_5_4").css({top:'70%'});
		$(".page_7_1").css({top:'3%'});
		$(".page_7_2").css({top:'10%'});
		$(".page_7_3").css({top:'70%'});
		$(".page_7_4").css({top:'80%'});
		$(".page_9_1").css({top:'3%'});
		$(".page_9_2").css({top:'10%'});
		$(".page_9_4").css({top:'80%'});
		$(".page_9_5").css({top:'70%'});
		$(".page_6_2").css({top:'5%'});
		$(".page_10_2").css({top:'5%'});
		$(".page_11_1").css({top:'3%'});
		$(".page_11_2").css({top:'10%'});
		$(".page_11_3").css({top:'55%'});
		$(".page_11_4").css({top:'70%'});
		$(".page_11_5").css({top:'80%'});
		$(".page_9_4").css({top:'80%'});
		$(".page_9_5").css({top:'70%'});
		$(".page_12_2").css({top:'70%'});
		$(".page_12_3").css({top:'85%'});
		$(".page_14_1").css({top:'14%'});
		$(".page_14_1").css({top:'14%'});
		$(".page_14_3").css({top:'58%'});
		$(".page_14_4").css({top:'72%'});

		$(".page_15_1").css({top:'3%'});
		$(".page_15_2").css({top:'10%'});
		$(".page_15_2_form").css({top:'10%'});
		$(".page_15_3").css({top:'55%'});
		$(".page_14_5").css({top:'1%'});
		
	
		
		
	}
	loader.start();
	loader.addCompletionListener(function() {
		loader = null;
		loader = new PxLoader();
		for(i = 0; i <LoadArr.length;i++ ) {
			loader.addImage(LoadArr[i]);
		}
		var pageArray = loadingPage(1,31);
		for(i = 0; i <pageArray.length; i++) {
			loader.addImage(pageArray[i].attr('src-data'));
		}


		loader.start();
		
		loader.addProgressListener(function(e) {

			var NUM = Math.ceil(e.completedCount/e.totalCount*100);
			 
			
			var N1 = 0  , N2 = 0;
			
			NUM = Math.min(99 , NUM);
			if(NUM < 10) {
				N1 = 0;
			 	N2 = NUM;	
			}else
			{
			 	N1 = NUM.toString().charAt(0);
				N2 = NUM.toString().charAt(1);	
			}
			N1=(N1>0) ? N1 : "0";
			//document.getElementById('loadingnum1').className = 'ten ten'+ N1;
			//document.getElementById('loadingnum2').className = 'ten bit ten'+ N2;
			$(".page_index_zi").html(N1+N2+"%");

			percent=240-parseInt(240*(N1+N2)/100);
			percent="0 "+percent+"px";
			//$(".page_index").css("background-position",percent);
			//$('.loadbar').width(NUM/100*175);
		});
		loader.addCompletionListener(function() {
			
			// $('img').each( function (){
			// 	$(this).attr('src' , $(this).attr('src-data'))	
			// });

			for(i = 0; i <pageArray.length; i++) {
				pageArray[i].attr('src',pageArray[i].attr('src-data'));
			}
			bipinit();
			
			
			
			
			/*loadPage(4,8,function(){
				console.log("tttt");
			});*/
		});
	
	});
	
	
	
	
				
				
	

	/**
	 * [loadPage 分步加载]
	 * @param  {[type]} 开始页面index
	 * @param  {[type]} 结束页面index
	 * @param  {[type]} loadComplete  加载完成 callback;
	 * @return {[type]}
	 */
	function loadPage(startStep,endStep,loadComplete) {
		loader = null;
		loader = new PxLoader();
		var pageArray = loadingPage(startStep,endStep);
		for(i = 0; i <pageArray.length; i++) {startStep
			loader.addImage(pageArray[i].attr('src-data'));
		}
		loader.start();
		loader.addCompletionListener(function() {
			for(i = 0; i <pageArray.length; i++) {
				pageArray[i].attr('src',pageArray[i].attr('src-data'));
			}
			loadComplete();
		});
	}
	
	function loadingPage(startStep,endStep) {
		var imgArray = [];

		for(var i =startStep; i <= endStep; i++ ){
			$('.zhuquan'+i).find('img').each(function(index,el) {
				imgArray.push($(this));
			});
		}
		return imgArray;
	}


	function bipinit() {
			to_down=1;
			$('#newloading').fadeOut(200);
			$('.box-step:first').show();
			
			
			$("#button_zhuayao").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="button_zhuayao")
				{
					
					$(".zhuquan1").fadeOut();$(".zhuquan2").show();
					//setTimeout(function (){$(".zhuquan1").fadeIn();$(".zhuquan2").show();},800);
				}
			});
			// $("#button_info").on("touchstart mousedown",function (e)
			// {
			// 	e.preventDefault();
			// 	if($(e.target).attr("id")=="button_info")
			// 	{
			// 		$("#button_form").show();
			// 		$(".zhuquan1").fadeOut();$(".zhuquan14").show();
			// 	}
			// });
			$("#button_info").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="button_info")
				{
					$("#button_form").show();
					$(".zhuquan1").fadeOut();$(".zhuquan14").show();
				}
			});
			$("#button_form").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="button_form")
				{
					$(".zhuquan14").fadeOut();$(".zhuquan15").show();					
				}
			});
			$("#button_youhui").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="button_youhui")
				{
					
					location.href="http://kdt.im/ipaKPr";
				}
			});
			$("#button_link").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="button_link")
				{
					
					location.href="http://wap.koudaitong.com/v2/ump/promocard/fetch?alias=17ienvy8s";
				}
			});
			$("#button_submit").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="button_submit")
				{
					name=$("#name").val();
					phone=$("#phone").val();
					info=$("#info").val();
					if(name=="" || name==" ")
					{
						alert("请输入您的姓名");
						$("#name").focus();
					}
					else if(phone=="")
					{
						alert("请输入您的手机号");
						$("#phone").focus();
					}
					// else if(!phone || !/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(phone)) {
					
					// 	alert("手机号格式不正确");
					// 	$("#phone").focus();
					
					// }
					else if(info==""  || info==" ")
					{
						alert("请输入您的地址");
						$("#info").focus();
					}
					else
					{
						$.post(base_url+"ajax_save_info.php",{"data":$(".this_form").serialize()},function (res)
						{
							if(res.info=="ok")
							{
								alert("提交成功!");
								$("#button_form").hide();
								$("#button_form_aleady").show();
								$(".zhuquan15").fadeOut();$(".zhuquan14").fadeIn();

							}
							else
							{
								alert("提交失败!");
							}
						},"json")
					}
				}
			});
			
			
			$("#button_one_1,#button_one_2,#button_one_3").on("touchstart mousedown",function (e)
			//$("#button_one_1").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				//if($(e.target).attr("id")=="button_one_1")
				if($(e.target).attr("id")=="button_one_1" || $(e.target).attr("id")=="button_one_2" || $(e.target).attr("id")=="button_one_3")
				{
					
					$(".zhuquan2").fadeOut();$(".zhuquan3").fadeIn();
					result=$("#result").html();
					$("#result").html(result+$(this).attr("attr_id")+",");
					clearInterval(red_person);
					//setTimeout(function (){$(".zhuquan1").fadeIn();$(".zhuquan2").show();},800);
				}
			});
			$("#button_two_1,#button_two_2,#button_two_3").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="button_two_1" || $(e.target).attr("id")=="button_two_2" || $(e.target).attr("id")=="button_two_3")
				{
					$(".zhuquan4").fadeOut();$(".zhuquan5").fadeIn();
					result=$("#result").html();
					$("#result").html(result+$(this).attr("attr_id")+",");
				}
			});
			$("#button_three_1,#button_three_2,#button_three_3").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="button_three_1" || $(e.target).attr("id")=="button_three_2" || $(e.target).attr("id")=="button_three_3")
				{
					$(".zhuquan6").fadeOut();$(".zhuquan7").fadeIn();
					result=$("#result").html();
					$("#result").html(result+$(this).attr("attr_id")+",");
				}
			});
			$("#button_four_1,#button_four_2,#button_four_3").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="button_four_1" || $(e.target).attr("id")=="button_four_2" || $(e.target).attr("id")=="button_four_3")
				{
					$(".zhuquan8").fadeOut();$(".zhuquan9").fadeIn();
					result=$("#result").html();
					$("#result").html(result+$(this).attr("attr_id")+",");
				}
			});
			$("#button_five_1,#button_five_2,#button_five_3").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="button_five_1" || $(e.target).attr("id")=="button_five_2" || $(e.target).attr("id")=="button_five_3")
				{
					$(".zhuquan10").fadeOut();$(".zhuquan11").fadeIn();
					result=$("#result").html();
					$("#result").html(result+$(this).attr("attr_id")+",");
				}
			});
			
			$("#button_next3").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="button_next3")
				{
					$(".zhuquan3").fadeOut();$(".zhuquan4").fadeIn();
				}
			});
			$("#button_next5").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="button_next5")
				{
					$(".zhuquan5").fadeOut();$(".zhuquan6").fadeIn();
				}
			});
			$("#button_next7").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="button_next7")
				{
					$(".zhuquan7").fadeOut();$(".zhuquan8").fadeIn();
				}
			});
			$("#button_next9").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="button_next9")
				{
					$(".zhuquan9").fadeOut();$(".zhuquan10").fadeIn();
				}
			});
			$("#button_next_ajax").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="button_next_ajax")
				{
					result=$("#result").html();
					$.post(base_url+"ajax.php",{"result":result},function (res)
					{
						if(res.result==1)
						{
							$(".page_12_1").show();
						}
						else if(res.result==2)
						{
							$(".page_12_1b").show();
						}
						else if(res.result==3)
						{
							$(".page_12_1c").show();
						}
						$(".zhuquan11").fadeOut();$(".zhuquan12").fadeIn();	
					},"json")
					$(".zhuquan9").fadeOut();$(".zhuquan10").fadeIn();
				}
			});
			
			
			
			
		
			//page_arrow2
			$("#button_share").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="button_share")
				{
					$(".page_13_1,.page_13_3,#bggray").show();
				}
			});
			$("#bggray").on("touchstart mousedown",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="bggray")
				{
					$(".page_13_1,.page_13_3,#bggray").hide();
					page_13_3_signal=0;
					clearInterval(page_13_3);
				}
			});	
			
			
		
		document.getElementById("red_person").addEventListener("webkitAnimationEnd", function(){ //动画结束时事件
		
			red_person_size=1;
			red_person_signal=1;
			red_person=setInterval(function ()
			{	
				device_height=$(window).height();
				if(red_person_signal==1)
				{
					
						

						if(red_person_size==1 && device_height<850)	
						background_url="background:url("+base_url+"images/page_2_1.png) no-repeat;background-size:450px 524px;background-position:0 0;width:450px;height:524px;top:0%;left:14.8%;position:absolute;z-index:0";
						else if(red_person_size==1 && device_height>850)	
						background_url="background:url("+base_url+"images/page_2_1.png) no-repeat;background-size:450px 524px;background-position:0 0;width:450px;height:524px;top:4%;left:14.8%;position:absolute;z-index:0";
					    else if(red_person_size==2 && device_height<850)	
					    	background_url="background:url("+base_url+"images/page_2_1a.png) no-repeat;background-size:450px 524px;background-position:0 0;width:450px;height:524px;top:0%;left:14.8%;position:absolute;z-index:0";
					    else	
					    	background_url="background:url("+base_url+"images/page_2_1a.png) no-repeat;background-size:450px 524px;background-position:0 0;width:450px;height:524px;top:4%;left:14.8%;position:absolute;z-index:0";
				
                    $("#red_person").attr("style",background_url);
					
					red_person_size++;
					if(red_person_size>2)
					red_person_size=1;
				}
				
			},200);

			}, false);
			document.getElementById("share_pic").addEventListener("webkitAnimationEnd", function(){ //动画结束时事件
		
			page_13_3_size=1;
			page_13_3_signal=1;
			page_13_3=setInterval(function ()
			{	
				if(page_13_3_signal==1)
				{
					if(page_13_3_size<=4)
					{
					if(page_13_3_size==1)	
					background_url="background:url("+base_url+"images/page_13_3.png) no-repeat;background-size:112px 123px;background-position:0 0;width:112px;height:123px;top:2%;right:5%;position: absolute;z-index:1000;display:block";
					else	
						background_url="background:url("+base_url+"images/page_13_3_"+page_13_3_size+".png) no-repeat;background-size:112px 123px;background-position:0 0;width:112px;height:123px;top:2%;right:5%;position: absolute;z-index:1000;display:block";
					
					//$(".loadbar").html('<img src="'+base_url+'resource/clarks/images/loading_0'+loading_size+'.png"/>');
                    $("#share_pic").attr("style",background_url);
					}
					page_13_3_size++;
					if(page_13_3_size>4)
					page_13_3_size=1;
				}
				
			},300);

			}, false);
			// document.getElementById("page_9_1").addEventListener("webkitAnimationEnd", function(){ //动画结束时事件
			// setTimeout(function (){$(".page_9_1").addClass("page_9_1_zuoyou");},800);
				
			// }, false);
			// document.getElementById("page_8_3").addEventListener("webkitAnimationEnd", function(){ //动画结束时事件
			// setTimeout(function (){$(".page_8_3").addClass("page_9_1_zuoyou");},800);
				
			// }, false);
			// document.getElementById("page_6_3").addEventListener("webkitAnimationEnd", function(){ //动画结束时事件
			// setTimeout(function (){$(".page_6_3").addClass("page_9_1_zuoyou");},800);
				
			// }, false);
			// document.getElementById("page_7_1").addEventListener("webkitAnimationEnd", function(){ //动画结束时事件
			// setTimeout(function (){$(".page_7_1").addClass("page_9_1_zuoyou");},800);
				
			// }, false);
			
			
			
			
			
			//Animate();
			
			$('.zhuquan0 img').hide();
			setTimeout( function (){
				
				$('.zhuquan0 img').show();
				
				TweenMax.to($('.s1-0') , .5 , { transform : 'scale(1) rotate(0deg)' , ease:Circ.easeInOut , delay : .2});
				TweenMax.to($('.s1-2') , 2 , {opacity : 1 , transform : 'scale(2)' , onComplete : function (){
						$('.s1-2').addClass('css3');	
				}});
				TweenMax.to($('.s1-4') , .7 , { transform : 'scale(1) rotate(0deg)'});
/*				TweenMax.to($('.s1-1') , .5 , { opacity : 1 , transform : 'scale(1)' , ease:Back.easeOut , delay : .2 , onComplete : function (){
					$('.s1-1').addClass('css3');
				}})*/
				TweenMax.to($('.s1-3'), .5 , { opacity : 1 , delay : .7 , onComplete : function (){
						$('.s1-3').addClass('css3');	
					}})
				} , 300)
			
		
			
			
	
			$('#s11').bind('touchstart',function(ev) {
				TweenMax.to($('.s11-3'),1.5,{width:550});
				ev.preventDefault();
		
			}).bind('touchend',function(ev) {
				TweenMax.killTweensOf('.s11-3');
				
				
				if($('.s11-3').width() > 500) {
					
					$('.s11-6').removeClass('s11-6-loop').addClass('s11-6-run');
					
					
					setTimeout( function (){
						$('.s11-3').width(0)	
						PageUp(15);
					} , 300)
					
				} else {
					TweenMax.to('.s11-3',2,{width:0});
				}
				ev.preventDefault();
			}).bind('touchmove',function(ev) {
				ev.preventDefault();
				
			});
			
			
			var IsPc = 0;
			
			var ZHUQUAN14LEFT = 0;
			var LastZHUQUAN14LEFT = 0;
			
			
			
			$('.step14').bind('touchstart' , function ( ev ){
				var s143 = $('.s14-3');
				var s141 = $('.s14-1');
				
				var left = s143.offset().left;
				
				
				//-530 40
				var left2 = s141.offset().left;
				
				
				TweenMax.killChildTweensOf(s141[0]);
				TweenMax.killChildTweensOf(s143[0]);
				
				var e = IsPc ? ev || event : event || ev;
				var x = IsPc ? e.pageX : e.touches[0].clientX;
				
				
				$('.step14').bind('touchmove' , function ( ev ){
						var e = IsPc ? ev || event : event || ev;
						var x2 = IsPc ? e.pageX : e.touches[0].clientX;
						
						ZHUQUAN14LEFT =  LastZHUQUAN14LEFT + (x2 -x) * .5;
						
						ZHUQUAN14LEFT = Math.min(Math.max( 0 , ZHUQUAN14LEFT) , 570);
							
						//document.title = ZHUQUAN14LEFT
						
						
						/*TweenMax.to(s141[0] , .3 , { transform : 'translate3d('+ZHUQUAN14LEFT+'px,0,0)'})
						TweenMax.to(s143[0] , .3 , { transform : 'translate3d('+ - ZHUQUAN14LEFT / 57 * 65+'px,0,0)'})*/
						
						/*s141[0].style[Zhu._prefixStyle('transform')] = 'translate3d('+ZHUQUAN14LEFT+'px,0,0)'
						s143[0].style[Zhu._prefixStyle('transform')] = 'translate3d('+ - ZHUQUAN14LEFT / 57 * 65+'px,0,0)'*/
						
						s141[0].style['marginLeft'] = ZHUQUAN14LEFT+'px'
						s143[0].style['marginLeft'] = - ZHUQUAN14LEFT / 57 * 65+'px'
						s143[1].style['marginLeft'] = - ZHUQUAN14LEFT / 57 * 65+'px'
						
						ev.preventDefault();
						
				}).unbind('touchend').bind('touchend' , function (){
					
					
					
						if(++window.step14 >= 3) window.PageUp(18);		
						$('.step14').unbind('touchmove')
					
						var a = LastZHUQUAN14LEFT > ZHUQUAN14LEFT ? -20 : 20;
						ZHUQUAN14LEFT += a;
						LastZHUQUAN14LEFT = ZHUQUAN14LEFT;
						
							TweenMax.to(s141[0] , .3 , { marginLeft : ZHUQUAN14LEFT+'px'})
							TweenMax.to(s143[0] , .3 , { marginLeft : - ZHUQUAN14LEFT / 57 * 65+'px'})	
							TweenMax.to(s143[1] , .3 , { marginLeft : - ZHUQUAN14LEFT / 57 * 65+'px'})	
						
							/*TweenMax.to(s141[0] , .3 , { transform : 'translate3d('+ZHUQUAN14LEFT+'px,0,0)'})
							TweenMax.to(s143[0] , .3 , { transform : 'translate3d('+ - ZHUQUAN14LEFT / 57 * 65+'px,0,0)'})	*/
						
						
						
				})
			})
		
		
	$('.s16-5').bind('touchend' , function (){
			PageUp(++PAGEINDEX);	
	})

		}
	


	
	
	
	
	
	var ZINDEX = 10;
	var Bstop = true;
	


	function PageUp ( index ){

				if(!Bstop || index>3 || to_down==3) return;
				Bstop = false;
				PAGEINDEX = index;
				
				//PAGE_INDEX ++
			
				
				var THIS = $('.zhuquan' + LASTINDEX)[0];
				
			
				
				THIS.style[Zhu._prefixStyle('transition')] = '';
				THIS.style[Zhu._prefixStyle('transform')] = 'scale(1) translate(0 0)' + TranslateZ
				THIS.style['opacity'] = 1;
				
				
				
				setTimeout( function (){
						
						THIS.style[Zhu._prefixStyle('transition')] = TRANSTION_SPEED;
						THIS.style[Zhu._prefixStyle('transform')] = 'scale(.8) translate(0,-200px)' + TranslateZ
						THIS.style['opacity'] = 0;
				
				} , 50)
				
				var THIS2 = $('.zhuquan' + index)[0];
				
				THIS2.style.zIndex = ++ZINDEX;
				THIS2.style.display = 'block';
				
				
				THIS2.style[Zhu._prefixStyle('transition')] = '';
				THIS2.style[Zhu._prefixStyle('transform')] = 'scale(1.3) translate(0,500px)' + TranslateZ
				THIS2.style['opacity'] = 0;
				
				
				
				setTimeout( function (){
						THIS2.style[Zhu._prefixStyle('transition')] = TRANSTION_SPEED;
						THIS2.style[Zhu._prefixStyle('transform')] = 'scale(1) translate(0,0)' + TranslateZ
						THIS2.style['opacity'] = 1;
						Animate();
				} , 50)
				
				setTimeout( function (){
					THIS.style.display = 'none';
					Bstop = true;
				} , 550);
				LASTINDEX = index;	
	}
	
	function PageDown ( index , s){

				if(!Bstop || to_down==3) return;
				Bstop = false;
				
				
				
				PAGEINDEX = index;
				var THIS = $('.zhuquan' + index)[0];
				THIS.style.display = 'block';
				
				THIS.style.zIndex = ++ZINDEX;
				
				THIS.style[Zhu._prefixStyle('transition')] = '';
				THIS.style[Zhu._prefixStyle('transform')] = 'scale(0.8) translate(0,-200px)' + TranslateZ
				THIS.style['opacity'] = 0;
				
				setTimeout( function (){
						THIS.style[Zhu._prefixStyle('transition')] = TRANSTION_SPEED;
						THIS.style[Zhu._prefixStyle('transform')] = 'scale(1) translate(0,0)' + TranslateZ
						THIS.style['opacity'] = 1;
				} , 50)
				
				
				/////////////////////////////////////////////////////////
				var THIS2 = $('.zhuquan' + LASTINDEX)[0];
				THIS2.style.display = 'block';
				
				
				
				THIS2.style[Zhu._prefixStyle('transition')] = '';
				THIS2.style[Zhu._prefixStyle('transform')] = 'scale(1) translate(0,0)' + TranslateZ
				THIS2.style['opacity'] = 1;
				
			
				setTimeout( function (){
						
							THIS2.style[Zhu._prefixStyle('transition')] = TRANSTION_SPEED;
							THIS2.style[Zhu._prefixStyle('transform')] = 'scale(1.3) translate(0,500px)' + TranslateZ
							THIS2.style['opacity'] = 0;
						 	Animate();
				} , 50);
					
				setTimeout( function (){
					THIS2.style.display = 'none';
					Bstop = true;
					
				} , 550)
				
				LASTINDEX = index;	
			
	}
	window.PageUp = PageUp;
	
	var PAGEINDEX　= 1;
	
	$('body').swipe({
			swipeUp : function(){
				if(window.NOSWIPE) return;
				if(PAGEINDEX == $('.box-step').size()) return;
				PageUp(++PAGEINDEX);	
			} , 
			swipeDown : function (){
				if(PAGEINDEX <= 1	) return;
				if( PAGEINDEX - 1 == 26) return;
				
				PageDown( --PAGEINDEX);	
			} 
		})/*.click( function (){
			document.title = PAGEINDEX
			PageUp(++PAGEINDEX);	
			//zqqqqqqqq	
		})*/
	
	
	$('#sound')[0].play();
	
	$('body').one('touchend' , function (){
		
		if(window.isTouch) return;
		$('#sound')[0].play();	
	})
	
	
	$('.sound').bind('touchend' , function (){
			window.isTouch = true;
			if($(this).hasClass('sound_no'))
			{
				$(this).removeClass('sound_no');
				 $('#sound')[0].play();
				return;
			}
			
			$(this).addClass('sound_no');
			$('#sound')[0].pause();
			
	});
	Animate();
	function Animate(){
		
		
		//hylink.trackPV('别克BIP漫画H5-'+PAGEINDEX,'/bip_page_'+PAGEINDEX);
		
		var IMG1 = new Image();
		var IMG2 = new Image();
		//IMG1.src = MZ1[PAGEINDEX-1];
		//IMG2.src = MZ2[PAGEINDEX-1];
		
		
		location.hash =  PAGEINDEX  
		
		//document.title = PAGEINDEX
		window.NOSWIPE = false;
		TweenMax.killAll( true );
		clearInterval(window.Timer);
		
		
		
	//	document.title = ( PAGEINDEX - 1 )
		background_size="640px "+device_height
		switch ( PAGEINDEX - 1 ) {   ///+1增加了一屏
		
		case 1 : 
			
			//TweenMax.from($('.s0-2') , .6 , {opacity : 0 , transform : 'translate3d(-40px , 0, 0)' , delay : .5});
			//TweenMax.from($('.s0-1') , .6 , {opacity : 0 , transform : 'translate3d(0 , 40px, 0)' , delay : .5});
			
			
			
			break;	
		case 2 : 
		
		
			//TweenMax.from($('.s2-2') , .6 , {opacity : 0 , transform : 'translate3d(0 , 40px, 0)' , delay : .5});
			//TweenMax.from($('.s2-2') , .6 , {opacity : 0 , transform : 'translate3d(0 , -200px, 0)'});
			break;
		case 3 :
		
			
/*			TweenMax.from($('.s3-8') , .6 , {opacity : 0 , transform : 'translate3d(0 , 40px, 0)'  , delay : 1.2});
			
			TweenMax.from($('.s3-5') , .6 , {opacity : 0 , transform : 'scale(0)' , ease:Back.easeOut , delay : 1.2});
			TweenMax.from($('.s3-2') , .6 , {opacity : 0 , transform : 'translate3d(200px , 0, 0)' , delay : .3});
			TweenMax.from($('.s3-3') , .6 , {opacity : 0 , transform : 'translate3d(-200px , 0, 0)' , delay : .8});
			
			TweenMax.from($('.s3-4') , 1.2 , {opacity : 0 , transform : 'scale(0)' , delay : 1 , onComplete : function (){
				$('.s3-4').addClass('css3');
			}});
			
			$('.s3-6').hide();
			TweenMax.from($('.s3-1') , .6 , {opacity : 0  , delay : 1.2 , onComplete : function (){
				$('.s3-7 , .s3-6').show();
			}});*/
			buffer_i=1;
			background_size="640px "+device_height
			buffer=setInterval(function ()
			{
				if(buffer_i==1)
				//$(".page_5_1").css({"background":"url(images/page_5_0.jpg) no-repeat","background-size":background_size});
				$(".page_5_1").attr("style","background:url(images/page_5_0.jpg) no-repeat;background-size:640px "+device_height+";background-position:0 0;width:640px;height:"+device_height+";top:0%;left:0.0%;position:absolute;z-index:0");
				else if(buffer_i==0)
				$(".page_5_1").attr("style","background:url(images/page_5_1.jpg) no-repeat;background-size:640px "+device_height+";background-position:0 0;width:640px;height:"+device_height+";top:0%;left:0.0%;position:absolute;z-index:0");
				buffer_i++;
				if(buffer_i>1)
				buffer_i=0;
			},600);
			break ;
		case 4 :
		
			
			//TweenMax.from($('.s28-1') , .6 , {opacity : 0 , transform : 'translate3d(0 , 40px, 0)'  , delay : .5});
		case 5 :
		
		buffer_5=1;
			buffer_5_b=setInterval(function ()
			{	
				if(buffer_5==1)
				$(".page_7_4").css({"background":"url(images/page_7_4_1.png) no-repeat"});
				else if(buffer_5==2)
				$(".page_7_4").css({"background":"url(images/page_7_4_2.png) no-repeat"});
				else if(buffer_5==3)
				$(".page_7_4").css({"background":"url(images/page_7_4_3.png) no-repeat"});
				else if(buffer_5==4)
				$(".page_7_4").css({"background":"url(images/page_7_4_4.png) no-repeat"});
				else if(buffer_5==5)
				$(".page_7_4").css({"background":"url(images/page_7_4_5.png) no-repeat"});
				buffer_5++;
				if(buffer_5>5)
				buffer_5=1;
			},300);
/*		TweenMax.from($('.s4-6') , .6 , {opacity : 0 , transform : 'translate3d(0 , 40px, 0)' , ease:Back.easeOut , delay : 1.2});
			$('.s4-5').hide();
			TweenMax.from($('.s4-2') , .5 , {opacity : 0 , transform : 'translate3d(-200px , 0, 0)' , onComplete : function (){
				$('.s4-5').show();
			}});
			TweenMax.from($('.s4-3') , .5 , {opacity : 0 , transform : 'translate3d(-200px , 0, 0)' , delay : .5});
			TweenMax.from($('.s4-4') , .5 , {opacity : 0 , transform : 'translate3d(200px , 0, 0)' , delay : 1});
			TweenMax.from($('.s4-1') , .5 , {opacity : 0  , delay : 1.2});*/
			break ;
		
		case 6:
		/*$('.s5-5').hide();
		setTimeout( function (){
			$('.s5-5').show();	
		} , 500)*/
			
			
			$('.s5-7').hide();
			$('.s5-4').show();
			
			clearTimeout(window.TIMER1210);
			window.TIMER1210 = setTimeout( function (){ 
				$('.s5-7').fadeIn();
				$('.s5-4').fadeOut();
			},5000)
			
			
		
		
			
			TweenMax.from($('.s5-6') , .5 , {opacity : 0 , transform : 'translate3d(0 , 300px, 0)'});
			//TweenMax.from($('.s5-5') , .5 , {opacity : 0  , delay : .5});
			TweenMax.from($('.s5-2') , .2 , {opacity : 0 , transform : 'translate3d(0 , -50px)' , delay:.5});
			TweenMax.from($('.s5-4') , .6 , {opacity : 0 , transform : 'translate3d(0 , -50px, 0)',delay : .7});
			
			break;
		case 7 :
			
			$('.s6-4').css('left' , 190).css('marginTop' , 220);
			TweenMax.from($('.s6-3') , .6 , {opacity : 0 , transform : 'translate3d(-200px , 0, 0)'});
			TweenMax.from($('.s6-2') , .6 , {opacity : 0 , transform : 'translate3d(200px , 0, 0)' , delay : .5});
			
			TweenMax.from($('.s6-1 , .s6-4') , .6 , {opacity : 0  , delay : 1 , onComplete : function (){
				TweenMax.to($('.s6-4') , .3 , { left : 340 , marginTop : 250})
			}});
			
			break ;
		case 8 :
			// window.NOSWIPE = true;
			/*$('.s7-7 ').hide();
			TweenMax.from($('.s6-6') , .6 , {opacity : 0 , transform : 'translate3d(0 , 20px, 0)' , delay : 1.5});
			TweenMax.from($('.s7-4') , .6 , {opacity : 0 , transform : 'translate3d(0 , -100px, 0)'});
			
			TweenMax.from($('.s7-3') , .6 , {opacity : 0 , transform : 'translate3d(-200px , 0, 0)'});
			
			TweenMax.from($('.s7-2') , .6 , {opacity : 0 , transform : 'translate3d(200px , 0, 0)' , delay : 1 , onComplete : function (){
					$('.s7-7').fadeIn();
			}});
			TweenMax.from($('.s7-1 , .s7-6') , .6 , {opacity : 0  , delay : 1.5});
			
			var Index = 50;
			
				window.NOSWIPE = true;
			window.Timer = setInterval( function (){
				Index --;
				
				$('.s7-6').html('20' + (Index > 10 ? Index : '0' + Index) + '/0'+GetRandomNum(1,9)+'/'+GetRandomNum(1,3)+''+GetRandomNum(1,9)+'<br><b style="font-size:50px">'+ GetRandomNum(0,2) + '' + GetRandomNum(0,2)+ ':' + GetRandomNum(1,6)+ '' + GetRandomNum(1,9)+ ':' + GetRandomNum(1,6)+ '' + GetRandomNum(1,9) +'</b>');	
				
				setTimeout( function (){
					$('.s7-6').html('20' + (Index > 10 ? Index : '0' + Index) + '/0'+GetRandomNum(0,9)+'/'+GetRandomNum(0,3)+''+GetRandomNum(0,9)+'<br><b style="font-size:50px">'+ GetRandomNum(0,2) + '' + GetRandomNum(0,2)+ ':' + GetRandomNum(0,6)+ '' + GetRandomNum(0,9)+ ':' + GetRandomNum(0,6)+ '' + GetRandomNum(0,9) +'</b>');	
				} , 75)
				
				if(Index <= 20) {
					clearInterval(window.Timer)
					
					setTimeout( function (){
						
						window.NOSWIPE = false;
						PageUp(++PAGEINDEX);			
					} , 300)
				}
			} , 150)*/
			
			$("#page_10_13").on("touchend",function (e)
			{
				e.preventDefault();
				if($(e.target).attr("id")=="page_10_13")
				{
					$(".page_11_1,.page_11_2").show();
				}
			});
			
			break ;
		case 9 :
	
	
			//TweenMax.from($('.s29-1') , .6 , {opacity : 0 , transform : 'translate3d(0 , 20px, 0)' , delay : .5});
			break ;
		case 10 :
		
			TweenMax.from($('.s8-1') , .6 , {opacity : 0 , transform : 'translate3d(-200px , 0, 0)'});
			TweenMax.from($('.s8-3') , .6 , {opacity : 0  ,transform : 'translate3d(0px , -40px, 0)', delay : 1});
			TweenMax.from($('.s8-4') , .5 , {opacity : 0  , transform : 'translate3d(200px , 0, 0)' , delay : 1});
			
			break ;
		case 11 :
			
			
			REMOVEADD($('#step-1'));
			
			TweenMax.from($('.s9-2') , .6 , {opacity : 0 , transform : 'translate3d(-200px , 0, 0)'});
			TweenMax.from($('.s9-3').removeAttr('style') , .6 , {opacity : 0  ,transform : 'scale(.5)', delay : .5});
			TweenMax.from($('.s9-4').removeAttr('style') , 1 , {opacity : 0  , delay : .7});
			
			TweenMax.from($('.s9-1') , .6 , {opacity : 0 , transform : 'translate3d(200px , 0, 0)' , delay : .5});
			
			
			TweenMax.from($('.s9-7') , .3 , {opacity : 0 , transform : 'scale(0.5)' , delay : 1});
			clearTimeout(window.TIMER1210);
			window.TIMER1210 = setTimeout( function (){
					TweenMax.to($('.s9-4').removeAttr('style') , 1 , {opacity : 0  });
					TweenMax.to($('.s9-3').removeAttr('style') , 1 , {transform : 'translate3d(200px , 150px, 0)'});
			} , 2000)
			
			
			break ;
		case 12 :
			
			
			$('.s10-10').hide();
			$('.s10-9').show();
			
			TweenMax.from($('.s10-9') , .6 , {opacity : 0  , delay : .5});
			
			clearTimeout(window.TIMER1210);
			
			window.TIMER1210 = setTimeout( function (){ 
				$('.s10-10').fadeIn();
				$('.s10-9').fadeOut();
			},5000)
			
			
			
			TweenMax.from($('.s10-2') , .6 , {opacity : 0 , transform : 'translate3d(-200px , 0, 0)'});
			
			TweenMax.from($('.s10-3') , 1.2 , {opacity : 0 , transform : 'scale(0)', delay : .5});
			
			TweenMax.from($('.s10-4') , .6 , {opacity : 0  ,transform : 'translate3d(200px , 0, 0)', delay : .5});
			TweenMax.from($('.s10-1') , .6 , {opacity : 0 , transform : 'translate3d(0 , 50px, 0)' , delay : 1});
			
			
			var Index = 8;
			window.Timer = setInterval( function (){
				window.NOSWIPE = true;
				$('.s10-5').show();
				
				setTimeout( function (){
						$('.s10-5').hide();	
				} , 500)
				
				$('.s10-7')[0].style.backgroundPosition = '0 '+ Index -- * - 46 + 'px';
				
				if(Index == -1)
				{
					clearInterval(window.Timer);
					//PageUp(11)
					setTimeout( function (){
						window.NOSWIPE = false;
						PageUp(++PAGEINDEX);			
					} , 1300)		
				}
			} , 1000)
			
			break ;
		case 13 :
			window.NOSWIPE = true;
			
			$('.s11-6').removeClass('s11-6-run')
			
			
			TweenMax.from($('.s11-4 ') , 2 , {left : '-100%' , transform : 'scale(.5)' , ease:Cubic.easeOut});
			TweenMax.from($('.s11-5') , 1.7 , {left : '-100%' , transform : 'scale(.5) translate3d(0 , 500px, 0)' , ease:Cubic.easeOut});
			
			
			
			break;
		case 14:
			
			TweenMax.from($('.s12-1-2') , 1.5 , {opacity : 0 , transform : 'scale(0)' , delay : .5});
			TweenMax.from($('.s12-5') , .5 , {opacity : 0 , transform : 'scale(0)' , delay : .5});
			
			TweenMax.from($('.s12-1-1') , 1.5 , {opacity : 0 , left : 470  , marginTop : -100 , width : 60 , delay : .5});
			
			
			TweenMax.from($('.s12-1') , .6 , {opacity : 0 , transform : 'translate3d(-200px , 0, 0)'});
			TweenMax.from($('.s12-2') , .6 , {opacity : 0 , transform : 'translate3d(200px , 0, 0)' , delay : 1});
			TweenMax.from($('.s12-3') , .6 , {opacity : 0  , delay : 1.5 });
			
			
			break;
		case 15 :
		
			TweenMax.from($('.s13-1-2') , .5 , {opacity : 0  , delay : .5});
			TweenMax.from($('.s13-1-1') , .8 , {opacity : 0  , delay : .5});
			
			
			TweenMax.from($('.s13-2-1') , 1.5 , {opacity : 0  , left : '100%' ,  transform : 'scale(.2)' , delay : 1 , onComplete : function(){
					$('.s13-2-1').addClass('hover');
			}});
			
			
			
			
			
			TweenMax.from($('.s13-1') , .6 , {opacity : 0 , transform : 'translate3d(-200px , 0, 0)'});
			TweenMax.from($('.s13-2') , .6 , {opacity : 0 , transform : 'translate3d(200px , 0, 0)' , delay : 1});
			TweenMax.from($('.s13-3') , .6 , {opacity : 0  , delay : 1.5 });
			
			
			
			TweenMax.from($('.s13-3-3') , .6 , {opacity : 0  , delay : 2 });
			TweenMax.from($('.s13-3-2') , .6 , {opacity : 0  , delay : 2.2 });
			
			
			
			break;
		case 16 :
			window.step14 = 0;
			window.NOSWIPE = true;
				// window.NOSWIPE = true;
				REMOVEADD($('#step-2'));
				REMOVEADD($('#step-3'));
				REMOVEADD($('#step-4'));
		
			break;
		case 17 :
		
		// window.NOSWIPE = true;
		TweenMax.from($('#step-5 , #step-5') , 1 , { opacity : 0 , delay :5});
		
		TweenMax.from($('.s15-2') , 6 , {left : -1517 , height : 640 });
		TweenMax.from($('.s15-3') , 6 , {marginTop : -440 , left : 250});
		
		setTimeout( function (){
				//REMOVEADD($('#step-5'));
				//REMOVEADD($('#step-6'));	
		} , 5000)
		
		TweenMax.from($('.s15-1') , .5 , { opacity : 0 , transform : 'translate3d(200px , 0, 0)' , delay : 5 , onComplete : function (){
				
				window.NOSWIPE = false;
		}});
		//TweenMax.from($('.s15-5') , 1 , { left : 296 ,  transform : 'translateZ(450px)' , delay : 5});
		
		
			break;
		case 18 :
			window.NOSWIPE = true;
		
			//.s16-2
			$('.s16-2').hide();	
			setTimeout( function (){
				$('.s16-2').fadeIn();	
			} , 500)
			// window.NOSWIPE = true;
			break;
		case 19 :
		TweenMax.from($('.s17-2') , 1 , { left: 520 , top: 650 , ease:Circ.easeOut , onComplete : function (){
				/*setTimeout( function (){
						//PageUp(++PAGEINDEX);			
					} , 300)	*/
					$('.s17-2').addClass('hover')
		}});
		TweenMax.from($('.s17-3') , 0.5 , { left : 310 , top : 430 });


			break;
		case 20 :
   				
				$('#step-6').hide()
				
				TweenMax.from($('.s18-7') , 2 , {transform : 'translate3d(200px , 0 , 0)'});
				
				$('.s18-8').removeClass('hover')
				setTimeout( function (){
				
				$('.s18-8').addClass('hover');
						
				} , 200)
				
				clearTimeout(window.TIMER1210);
				window.TIMER1210 = setTimeout( function (){
				
					REMOVEADD($('#step-6').show());	
				} , 3000)
				
				TweenMax.from($('.s18-2') , .6 , {opacity : 0 , transform : 'translate3d(200px , 0, 0)' , delay : 1});
				TweenMax.from($('.s18-9') , .6 , {opacity : 0 , transform : 'translate3d(0 , 20px, 0)' , delay : 1});
				
				TweenMax.from($('.s18-6') , .6 , { transform : 'translate3d(-100px , 0, 0)' , delay : 1.8});
				TweenMax.from($('.s18-5') , .6 , { transform : 'translate3d(400px , 0, 0)' , delay : 1.8});
				TweenMax.from($('.s18-4') , .6 , { opacity : 0 ,  transform : 'translate3d(300px , 0, 0)' , delay : 2});
				
				
				TweenMax.from($('.s18-3') , .6 , {opacity : 0 , transform : 'translate3d(-200px , 0, 0)' , delay : 2.4});
				TweenMax.from($('.s18-10') , .6 , {opacity : 0 , transform : 'scale(0.5)' , delay : 3.2});
				
				
			
			break;
		case 21 :
			 window.NOSWIPE = true;
			
			$('#panorama').remove();
				$('.s19-border').show();
			setTimeout( function (){
				$('.s19-border').fadeOut();
				FROAZD360 ();
				/*if(Detect.isAndroid() && is_weixn()) {
					FROAZD360 ();
				}else
				{
					D360(_liuLiang);	
				}*/
				
				
			} , 2000)

			
			break;
		case 22 :
			$('#step-7').removeClass('hover')
			setTimeout( function (){
				REMOVEADD($('#step-7').show());	
			} , 500);
			
			
				TweenMax.from($('.s20-4') , .6 , {opacity : 0 , transform : 'scale(0.8)' , delay : 1});
			/*setTimeout( function (){
				PageUp(++PAGEINDEX);	
			} , 3000)*/
			break;
		case 23 :
		
			
			TweenMax.from($('.s21-1') , .6 , {opacity : 0 , transform : 'translate3d(-200px , 0, 0)'});
			TweenMax.from($('.s21-2') , .6 , {opacity : 0  ,transform : 'translate3d(200px , 0, 0)', delay : .5});
			TweenMax.from($('.s21-3') , .6 , {opacity : 0  ,transform : 'translate3d(0 , 20px, 0)', delay : .5});
			
			break;
		case 24 :
			break;
		case 25 :
			
			
			
			$('.s23-10').hide();
			$('.s23-9').show();
			clearTimeout(window.TIMER1210);
			window.TIMER1210 = setTimeout( function (){ 
				$('.s23-10').fadeIn();
				$('.s23-9').fadeOut();
			},3000)
			
			
			
			TweenMax.from($('.s23-1') , .6 , {opacity : 0 , transform : 'translate3d(-200px , 0, 0)'});
			TweenMax.from($('.s23-4') , .6 , {opacity : 0 , transform : 'translate3d(-20px , -20px, 0)' , delay : .6});
			
			
			
			
			TweenMax.from($('.s23-2') , .6 , {opacity : 0  ,transform : 'translate3d(200px , 0, 0)', delay : .5});
			TweenMax.from($('.s23-3') , .6 , {opacity : 0  ,transform : 'translate3d(-200px , 0, 0)', delay : 1});
			
			
			TweenMax.from($('.s23-5') , .6 , {opacity : 0  ,transform : 'translate3d(20px , 0, 0)', delay : 4.5});
			
			
			TweenMax.from($('.s23-8') , .6 , {opacity : 0  , delay : 5});
			TweenMax.from($('.s23-6') , .6 , {opacity : 0  , delay : 5.2});
			TweenMax.from($('.s23-7') , .6 , {opacity : 0  , delay : 5.4});
			
			break;
		case 26 :
			window.NOSWIPE = true;
			Canvas (document.body.style);
			
			
			break;
		case 27 :
			break;
		case 28 :
		
			$('.step25').removeClass('css3').removeClass('css4')
		
			$('.s25-2').show();
			$('.s25-3').show();
			$('.s25-4').hide();
			
			
			setTimeout( function (){ 
				$('.s25-2').fadeOut();
				$('.s25-3').fadeOut();
				//$('.s25-4').fadeIn();
			},3000)
			
			
			
			setTimeout( function (){ 
				$('.step25').addClass('css3');
				setTimeout(function() {
					$('.step25').removeClass('css3').addClass('css4');
				}, 1000);
			},4000);
			
			
			
			setTimeout( function (){
				$('.s25-4').fadeOut();
				window.NOSWIPE = false;
			} , 5000)
			
			
			break;
			case 29:
				$('.video-pop').fadeOut(100);
				$('.videoBox').html('').hide();
				$('.sound').removeClass('sound_no');
				$('#sound')[0].play();
				$('.s27-1').hide();
				$('.s27-3').hide();
				$('.s27-2').hide();
				$('.s27-4').hide();
				$('.s27-5').hide();
			break;
		case 30:
			//$('.s27-try').fadeIn(100);
			//hylink.trackPV('别克BIP漫画H5-32-预约试驾','/bip_try');
			
		break;
		
	};
	}
	





function showLast() {
	//$('.s27-try').fadeOut(100);
				$('.s27-1').show();
				$('.s27-3').show();
				$('.s27-2').show();
				$('.s27-4').show();
				$('.s27-5').show();
				// TweenMax.from($('.s27-1') , .6 , {opacity : 0 , transform : 'translate3d(-200px , 0, 0)'});
				// TweenMax.from($('.s27-3') , .6 , {opacity : 0 , transform : 'translate3d(-20px , -20px, 0)'});
				// TweenMax.from($('.s27-2') , .6 , {opacity : 0  ,transform : 'translate3d(200px , 0, 0)'});
				// TweenMax.from($('.s27-4') , .6 , {opacity : 0  ,transform : 'translate3d(-200px , 0, 0)'});
				// TweenMax.from($('.s27-5') , .6 , {opacity : 0  ,transform : 'translate3d(20px , 0, 0)'});
}








	$('.s27-1').bind('touchend',function() {
		showVideo('','XODA5NTI3NTY0');
		//hylink.trackEvent('别克BIP漫画H5-31-智慧驾控-Turbo',"bip_page_31", 'click', '别克BIP漫画H5-31-智慧驾控-Turbo');
	});

	$('.s27-2').bind('touchend',function() {
		showVideo('','XODEzODg1NjQ0');
		//hylink.trackEvent('别克BIP漫画H5-31-智慧驾控-CDC',"bip_page_31", 'click', '别克BIP漫画H5-31-智慧驾控-CDC');
	});

	$('.s27-3').bind('touchend',function() {
		showVideo('','XODA5NzM0Njk2');
		//hylink.trackEvent('别克BIP漫画H5-31-智慧驾控-FlexRide',"bip_page_31", 'click', '别克BIP漫画H5-31-智慧驾控-FlexRide');
	});

	$('.s27-4').bind('touchend',function() {
		showVideo('','XODA5NTI1OTU2');
		//hylink.trackEvent('别克BIP漫画H5-31-智慧互联',"bip_page_31", 'click', '别克BIP漫画H5-31-智慧互联');
	});

	$('.s27-5').bind('touchend',function() {
		showVideo('','XODEwMjE0NTcy');
		//hylink.trackEvent('别克BIP漫画H5-31-SBZA+LCA盲区预警',"bip_page_31", 'click', '别克BIP漫画H5-31-SBZA+LCA盲区预警');
	});

	function showVideo(pic,code) {
		$('.sound').addClass('sound_no');
		$('#sound')[0].pause();
			
			
		$('.video-pop').fadeIn(200);
		
		var videourl = '';
		if(Detect.isAndroid()) 
		{
			videourl = '<span class="videoclose"></span><iframe height=300 width="100%" src="http://player.youku.com/embed/'+code+'" frameborder=0 allowfullscreen></iframe>';
		} else {
			videourl = '<span class="videoclose"></span><video width="100%" height="300"  id="video" controls="controls" src="http://www.buick.com.cn/getvideo/youku/getvideo.ashx?vid='+code+'&year=2014&type=mp4" poster="'+pic+'"></video>';
		}
		
		
		
		$('.videoBox').html(videourl).show();
		
			if(!Detect.isAndroid()) $('#video')[0].play();
		$('.videoclose').bind('touchend' ,  function (){
			$('.video-pop').fadeOut(100);
			$('.videoBox').html('').hide();
		});
	}
	

	// setTimeout( function (){
	// 	PageUp(29)		
	//  }, 100)
	
	
});

