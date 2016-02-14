//***********************************************************
// Name: miaozhen与ga整合一起的
// Author: Wally.he@hylinkad.com
// Date: 2014.07.14 10:51
// Desc: 秒针代码与GA代码整合, 提供一个公共的方法一起调用
//		*****在每个页面head处加上<script src="//m.buick.com.cn/script/mz_ga_code.js" ></script>****
//		这会自动加载mz与ga的配制代码
// 		共有4个方法, 1个属性, 都在hylink下
//		1. hylink.isDebug = false;
//			默认值为false, 当为true时, 调用四个方法会console.log 方法名与参数值.
//		2. hylink.setGaPath(p);
//			定义GA PV的目录, 默认为空字串, 同一页面只需定义一次前缀, 
//			参数 p: String, PV的前缀目录, 如:"/encore", "/2014promotion/excellent", "/golf/new-cars/2014"
//			例子: hylink.setGaPath("/encore");
//		3. hylink.trackPV(mzPage,gaPage);
//			触发一次"曝光"(PV), mz的曝光可以为中文字符, GA的PV只能是英文路径.
//			参数 mzPage: String, 参考xls的曝光值, 支持中文字符, 如:"产品首页"
//			参数 gaPage: String, 参考xls, 只能为英文路径, 当这些PV都在某个目录下时, 需要定义setGaPath(p),
//			例子: 在/encore目录下的首页, 则先调用hylink.setGaPath("/encore"); 再调用hylink.tracePV("昴克拉-首页", "/home");
//		4. hylink.trackEvent(mzBtn,category, action, label);
//			触发一次"点击"(Event), 第一个参数为mz的点击名称, 后三个为GA的Event参数
//			参数 mzBtn: String, 参考xls的点击值,
//			参数 category: String, GA事件分类
//			参数 action: String, GA事件操作, 如 click
//			参数 label: String, GA事件名称, 其实与mzBtn按键名称差不多
//			例子: hylink.trackEvent("试驾提交", "底部", "click", "试驾提交");
//		5. hylink.trackLeads(name, mobile, leadsId);
//			当试驾成功后, 调用此方法, 把姓名, 手机号,与BUxxxxxx值传入
//			参数 name: String 姓名
//			参数 mobile: String 11位手机号
//			参数 leadsId: 试驾接口返回的BU id
//			例子: hylink.trackLeads("王小二", "13333333333", "BU045345");
//***********************************************************

if(!window['GoogleAnalyticsObject']){
	(function(){
		var s = document.getElementsByTagName("script");
		for(var i=0,l=s.length;i<l;i++){
			var n = s[i];
			if(n.getAttribute('data-disable-default-pageview')=="0" &&
				n.getAttribute('src').indexOf("//m.buick.com.cn/js/mz_ga_code.")!=-1){
				document.write('<script src="//m.buick.com.cn/js/ga_ua_code.js" data-disable-default-pageview="0"></script>');
				break;
			}
		}
		document.write('<script src="//m.buick.com.cn/js/ga_ua_code.js" data-disable-default-pageview="1"></script>');
	})();
	
}

if(!window['_CiQ10199']){
	(function() {
		window._CiQ10199 = window._CiQ10199 || [];
    window._CiQ10199.push(['_cookieUseRootDomain', true]);
    var c = document.createElement('script');
    c.type = 'text/javascript';
    c.async = true;
    c.charset = 'utf-8';
    c.src = '//collect.cn.miaozhen.com/ca/10199';
    var h = document.getElementsByTagName('script')[0];
    h.parentNode.insertBefore(c, h);
	})();
}

window.hylink = window.hylink || {};

(function(hy){
	window._CiQ10199 = window._CiQ10199 || [];
	var _gaPath = "";
	//
	function setGaPath(v){
		if(v.indexOf("/")!=0){
			v = "/"+v;
		}
		if(v.lastIndexOf("/")==v.length-1){
			v = v.substr(0, v.length-1);
		}
		_gaPath = v;
		_debug("hylink.setGaPath('"+v+"');//return '"+_gaPath+"'");
	}
	//曝光, PV
	function trackPV (mzPage,gaPage){
		if(!mzPage)	_error("hylink.trackPV() mzPage参数为空");
		window._CiQ10199.push(['_trackEvent', {
	     type: 1,
	     labels:[
	      {'页面名称':mzPage}
	      ],
	     values: [
	      {'数量':1}
	      ]
	    }]);
			window.CClickiV3 && window.CClickiV3[10199] && window.CClickiV3[10199]._flushObserver(function(){});
	    //GA
	    if(gaPage){
	    	if(gaPage.indexOf("/")!=0){
				gaPage = "/"+gaPage;
			}
	    	ga('send', 'pageview', _gaPath+gaPage);
	    }
	    _debug("hylink.trackPV('"+mzPage+"','"+_gaPath+gaPage+"')");
	}
	//
	function trackEvent(mzBtn,category, action, label){
		if(!mzBtn)	_error("hylink.trackEvent() mzBtn参数为空");
		window._CiQ10199.push(['_trackEvent', {
         type: 2,
         labels:[
          {'按钮名称':mzBtn}
          ],
         values: [
          {'数量':1}
          ]
        }]);
        window.CClickiV3 && window.CClickiV3[10199] && window.CClickiV3[10199]._flushObserver(function(){});
        if(label){
        	ga('send', 'event', category, action, label);
        }
        _debug("hylink.trackEvent('"+mzBtn+"','"+category+"','"+action+",'"+label+"')");
	}
	//
	function trackLeads(name, mobile, leadsId){
		if(!name || !mobile || !leadsId || name=="" || mobile=="" || leadsId=="")	_error("hylink.trackLeads() 参数为空");
		window._CiQ10199 = window._CiQ10199 || [];
        window._CiQ10199.push(['_trackEvent', {
				    type: 4,
				    labels: [
				        {'姓名': name },    
				        {'手机': mobile },    
				        {'LeadsID': leadsId }    
				    ],
				    values: [
				        { '数量' : 1}
				    ]
				}]);
				window.CClickiV3 && window.CClickiV3[10199] && window.CClickiV3[10199]._flushObserver(function(){});
        ga('set', 'dimension1', 'testdrive');
	}

	function trackLeadsT1(name, mobile, leadsId){
		if(!name || !mobile || !leadsId || name=="" || mobile=="" || leadsId=="")	_error("hylink.trackLeads() 参数为空");
		window._CiQ10199 = window._CiQ10199 || [];
        window._CiQ10199.push(['_trackEvent', {
				    type: 5,
				    labels: [
				        {'姓名': name },    
				        {'手机': mobile },    
				        {'LeadsID': leadsId }    
				    ],
				    values: [
				        { '数量' : 1}
				    ]
				}]);
				window.CClickiV3 && window.CClickiV3[10199] && window.CClickiV3[10199]._flushObserver(function(){});
        ga('set', 'dimension1', 'testdrive');
	}


	function trackLeadsT2(name, mobile, leadsId){
		if(!name || !mobile || name=="" || mobile=="")	_error("hylink.trackLeads() 参数为空");
		window._CiQ10199 = window._CiQ10199 || [];
        window._CiQ10199.push(['_trackEvent', {
				    type: 7,
				    labels: [
				        {'姓名': name },    
				        {'手机': mobile }   
				    ],
				    values: [
				        { '数量' : 1}
				    ]
				}]);
				window.CClickiV3 && window.CClickiV3[10199] && window.CClickiV3[10199]._flushObserver(function(){});
        ga('set', 'dimension1', 'testdrive');
	}

	function _error(msg){
		try{console.error(msg);}catch(err){};
	}

	function _debug(msg){
		if(hy.isDebug)try{console.log(msg);}catch(err){};
	}


	hy.isDebug = false;
	hy.setGaPath = setGaPath;
	hy.trackPV = trackPV;
	hy.trackEvent = trackEvent;
	hy.trackLeads = trackLeads;
	hy.trackLeadsT1 = trackLeadsT1;
	hy.trackLeadsT2 = trackLeadsT2;
})(hylink);


