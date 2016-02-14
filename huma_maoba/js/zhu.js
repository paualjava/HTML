
 	var isMobile = {
    Android: function() {
    return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function() {
	
    return navigator.userAgent.match(/iPhone|ipad|iPod/i) ? true : false;
    },
    Windows: function() {
    return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
    };
    if(!isMobile.any()){
		//window.location.href="error.html";
	
		$( function (){
			$('#horizontal').remove();	
		})
    } 
	
	
	var Zhu = {
		_elementStyle	: document.createElement('div').style,	
		_UC 			: RegExp("Android").test(navigator.userAgent)&&RegExp("UC").test(navigator.userAgent)? true : false,
		_weixin			: RegExp("MicroMessenger").test(navigator.userAgent)? true : false,
		_iPhoen			: RegExp("iPhone").test(navigator.userAgent)||RegExp("iPod").test(navigator.userAgent)||RegExp("iPad").test(navigator.userAgent)? true : false,
		_Android		: RegExp("Android").test(navigator.userAgent)? true : false,
		_IsPC			: function(){ 
						var userAgentInfo = navigator.userAgent; 
						var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"); 
						var flag = true; 
						for (var v = 0; v < Agents.length; v++) { 
							if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; } 
						} 
						return flag; 
		} ,	
		_isOwnEmpty		: function (obj) { 
						for(var name in obj) { 
							if(obj.hasOwnProperty(name)) { 
								return false; 
							} 
						} 
						return true; 
					},
		// 微信初始化函数
		_WXinit			: function(callback){
							if(typeof window.WeixinJSBridge == 'undefined' || typeof window.WeixinJSBridge.invoke == 'undefined'){
								setTimeout(function(){
									this.WXinit(callback);
								},200);
							}else{
								callback();
							}
						},
		// 判断浏览器内核类型
		_vendor			: function () {
							var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
								transform,
								i = 0,
								l = vendors.length;
					
							for ( ; i < l; i++ ) {
								transform = vendors[i] + 'ransform';
								if ( transform in document.createElement('div').style ) return vendors[i].substr(0, vendors[i].length-1);
							}
							return false;
						},
		// 判断浏览器来适配css属性值
		_prefixStyle	: function (style) {
							if ( this._vendor() === false ) return false;
							if ( this._vendor() === '' ) return style;
							return this._vendor() + style.charAt(0).toUpperCase() + style.substr(1);
						},
		// 判断是否支持css transform-3d（需要测试下面属性支持）
		_hasPerspective	: function(){
							var ret = this._prefixStyle('perspective') in this._elementStyle;
							if ( ret && 'webkitPerspective' in this._elementStyle ) {
								this._injectStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
									ret = node.offsetLeft === 9 && node.offsetHeight === 3;
								});
							}
							return !!ret;
						},
		_translateZ : function(){
							if(Zhu._hasPerspective){
								return ' translateZ(0)';
							}else{
								return '';
							}
						},
	
		// 判断属性支持是否
		_injectStyles 	: function( rule, callback, nodes, testnames ) {
							var style, ret, node, docOverflow,
								div = document.createElement('div'),
								body = document.body,
								fakeBody = body || document.createElement('body'),
								mod = 'modernizr';
	
							if ( parseInt(nodes, 10) ) {
								while ( nodes-- ) {
									node = document.createElement('div');
									node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
									div.appendChild(node);
									}
							}
	
							style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
							div.id = mod;
							(body ? div : fakeBody).innerHTML += style;
							fakeBody.appendChild(div);
							if ( !body ) {
								fakeBody.style.background = '';
								fakeBody.style.overflow = 'hidden';
								docOverflow = docElement.style.overflow;
								docElement.style.overflow = 'hidden';
								docElement.appendChild(fakeBody);
							}
	
							ret = callback(div, rule);
							if ( !body ) {
								fakeBody.parentNode.removeChild(fakeBody);
								docElement.style.overflow = docOverflow;
							} else {
								div.parentNode.removeChild(div);
							}
	
							return !!ret;
						},
		// 自定义事件操作
		_handleEvent 	: function (type) {
							if ( !this._events[type] ) {
								return;
							}
	
							var i = 0,
								l = this._events[type].length;
	
							if ( !l ) {
								return;
							}
	
							for ( ; i < l; i++ ) {
								this._events[type][i].apply(this, [].slice.call(arguments, 1));	
							}
						},
		// 给自定义事件绑定函数
		_on				: function (type, fn) {
							if ( !this._events[type] ) {
								this._events[type] = [];
							}
	
							this._events[type].push(fn);
						},
		//禁止滚动条
		_scrollStop		: function(){
							//禁止滚动
							$(window).on('touchmove.scroll',this._scrollControl);
							$(window).on('scroll.scroll',this._scrollControl);
						},
		//启动滚动条
		_scrollStart 	: function(){		
							//开启屏幕禁止
							$(window).off('touchmove.scroll');
							$(window).off('scroll.scroll');
						},
		//滚动条控制事件
		_scrollControl	: function(e){e.preventDefault();}
	}
	
	

	var eventStr = ((navigator.userAgent.indexOf('Windows NT') > -1) || (navigator.userAgent.indexOf('Macintosh') > -1)) ? 'mousedown' : 'touchstart';
	var CLICK = ((navigator.userAgent.indexOf('Windows NT') > -1) || (navigator.userAgent.indexOf('Macintosh') > -1)) ? 'click' : 'touchend';
	var eventMove = ((navigator.userAgent.indexOf('Windows NT') > -1) || (navigator.userAgent.indexOf('Macintosh') > -1)) ? 'mousemove' : 'touchmove';
		
		
	