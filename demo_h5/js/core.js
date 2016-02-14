/**
 *@author wjsu
 */
var wizad = window.wizad || {};

var utm = {utm_source:'',utm_medium:'',utm_campaign:'',utm_content:'',utm_term:''};

var channelSource = '官网';
/**
 * 核心对象
 */
wizad.Core = function() {
}

var c = wizad.Core.prototype;

/**
 * 核心模块对左右菜单，底部菜单，动态加载
 * @return {[type]} [description]
 */
c.init = function () {
  var tool = new wizad.Tools();
  utm.utm_source = tool.getSreachString('utm_source');
  utm.utm_medium = tool.getSreachString('utm_medium');
  utm.utm_campaign = tool.getSreachString('utm_campaign');
  utm.utm_content = tool.getSreachString('utm_content');
  utm.utm_term = tool.getSreachString('utm_term');
  if(utm.utm_source != '' && utm.utm_source != null) {
    tool.setCookie('utm_source',utm.utm_source,1);
  }
  if(utm.utm_medium != '' && utm.utm_medium != null) {
    tool.setCookie('utm_medium',utm.utm_medium,1);
  }
  if(utm.utm_campaign != '' && utm.utm_campaign != null) {
    tool.setCookie('utm_campaign',utm.utm_campaign,1);
  }
  if(utm.utm_content != '' && utm.utm_content != null) {
    tool.setCookie('utm_content',utm.utm_content,1);
  }
  if(utm.utm_term != '' && utm.utm_term != null) {
    tool.setCookie('utm_term',utm.utm_term,1);
  }

  utm.utm_source = tool.getCookie('utm_source');
  utm.utm_medium = tool.getCookie('utm_medium');
  utm.utm_campaign = tool.getCookie('utm_campaign');
  utm.utm_content = tool.getCookie('utm_content');
  utm.utm_term = tool.getCookie('utm_term');
}

var autoparam = [{"cartype":"英朗XT","term":"Direct_MOB_XT-Minsite","channelSource":"Campaign-bip-英朗XT"},
                 {"cartype":"英朗GT","term":"Direct_MOB_GT-promotionsite","channelSource":"Campaign-bip-英朗GT金融方案"},
                 {"cartype":"凯越","term":"Direct_MOB_Excelle-Minsite ","channelSource":"Campaign-bip-凯越"},
                 {"cartype":"君威","term":"Direct_MOB_Regal-Minsite ","channelSource":"Campaign-bip-君威"},
                 {"cartype":"君威GS","term":"Direct_MOB_RegalGS-Minisite","channelSource":"Campaign-bip-君威GS"},
                 {"cartype":"君越","term":"Direct_MOB_Lacrosse-promotionsite","channelSource":"Campaign-bip-君越年度回馈活动"},
                 {"cartype":"昂科拉","term":"Direct_MOB_Encore-Minisite ","channelSource":"Campaign-bip-昂科拉"},
                 {"cartype":"昂科威","term":"Direct_MOB_Envision-Minisite ","channelSource":"Campaign-bip-昂科威"},
                 {"cartype":"昂科雷","term":"Direct_MOB_Enclave-Minsite ","channelSource":"Campaign-bip-昂科雷"},
                 {"cartype":"GL8豪华商务车","term":"Direct_MOB_GL8258-Minsite","channelSource":"Campaign-bip-GL8豪华商务车"},
                 {"cartype":"GL8商务车","term":"Direct_MOB_GL8201-promotionsite","channelSource":"Campaign-bip-GL8公务舱"}];
/**
 * 预约试驾
 */
wizad.TryOrder = function () {
}

var tryOrder = wizad.TryOrder.prototype;

tryOrder.start = function (name,mobile,buy_plan,car_type,disbtn,callback,pvtype) {
  if(name == "") {
    alert('姓名不能为空');return;
  }
  var tool = new wizad.Tools();
  if(!tool.isMobile(mobile)) 
  {
    alert('手机号码格式不正确');return;
  }
  hylink.trackLeadsT2(name, mobile);

  if(utm.utm_term == '' || utm.utm_term == null) {
    for(var i=0; i < autoparam.length; i++) {
      if(autoparam[i].cartype == car_type) {
        utm.utm_term = autoparam[i].term;
        channelSource = autoparam[i].channelSource;
      }
    }
  }
  disbtn.off('touchstart');
  var server = new wizad.Server();
  var params = {
    RealName: name,
    Mobile:mobile,
    Trycar:car_type,
    isdown:"1",// 是否下发到CCC 固定值1下发
    isopen:"1",// 是否正式下发 1为正式下发 0为测试下发
    comefrom:"503",// 固定值 503 html 官网
    province:"",// 省份
    city:"",// 城市
    dealername:"",// 经销商名称
    dealercode:"",// 经销商Code
    Gender:"",// 称谓
    Tel:"",// 联系电话
    Email:"",// Email
    License:"",// 驾试证
    TryDate: "",// 预约时间
    AgreeMsg:"0",// 是否接收通用的信息 0不接受
    BuyPlan:buy_plan,// 购买计划
    HaveCar:"",// 是否有车
    Carinfo:"",
    utm_source:utm.utm_source,
    utm_medium:utm.utm_medium,// ST值
    utm_campaign:utm.utm_campaign,// BC值
    campaign:"",
    utm_content:utm.utm_content,
    utm_term:utm.utm_term,
    channelSource:channelSource
  };
  server.testd(params,function(data){
      if(data.status == 'suc') {
        data.msg == ''?data.msg='0':data.msg;
        hylink.trackLeads(name, mobile, data.msg);
        hylink.trackLeadsT1(name, mobile, data.msg);
        // pyGMCvtMobFun(data.msg,py_campaign,car_type);
      } else {
        data.msg = '0';
      }
      server.saveTestDriveV3({realName:name,mobile:mobile,buyPlan:buy_plan,"leadsId":data.msg,campaignName:"君越汽车工厂",tryCar:car_type},function (data){
          callback();
      });
  });
}

// var py_campaign = 'GM';
// function pyGMCvtMobFun(_orderno,_campaign,_type){
//   var w=window,d=document,e=encodeURIComponent;
//   var b=location.href,c=d.referrer,f,g=d.cookie,h=g.match(/(^|;)\s*ipycookie=([^;]*)/),i=g.match(/(^|;)\s*ipysession=([^;]*)/);
//   if (w.parent!=w){f=b;b=c;c=f;};u='//stats.ipinyou.com/cvt?a='+e('R6.cP.KUBr6H0UgUkYGpDAzirRE0')+'&OrderNo='+e(_orderno)+'&ProductList='+e(_campaign+'::'+_type)+e(h?h[2]:'')+'&s='+e(i?i[2].match(/jump\%3D(\d+)/)[1]:'')+'&u='+e(b)+'&r='+e(c)+'&rd='+(new Date()).getTime()+'&e=';
//   (new Image()).src=u;
// }





/**
 *@author wjsu
 *desc 常用工具
 */
wizad.Tools = function () {
  // this.configPath = configPath;
}

var tools = wizad.Tools.prototype;

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||

    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(callback) {
      return window.setTimeout(callback, 17 /*~ 1000/60*/ );
    });
}
/**
 * 验证邮箱
 * @param  {[type]}  str [description]
 * @return {Boolean}     [description]
 */

tools.isEmail = function(str) {
  var szReg = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;
  return szReg.test(str);
}

/**
 * 验证手机号码
 * @param  {[type]}  str [description]
 * @return {Boolean}     [description]
 */

tools.isMobile=function(str) {
  var flag = /^(1[3|5|8|9]\d{9})$/;
  return flag.test(str);
}
//------------util---------//
/**
 * url 路径处理
 * @param  {[type]} pathName [description]
 * @return {[type]}          [description]
 */

tools.getPathName = function(pathName) {
  var flag = "";
  var arr = pathName.split("/");
  arr.pop();
  for (var i = 0; i < arr.length; i++) {
    flag += "/" + arr[i];
  }
  return flag;
}

//---------cookie------------//

tools.getCookie = function(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}

tools.setCookie = function(c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) +
    ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}


/**
 * 判断微信
 * @return {Boolean} [description]
 */

tools.is_weixn = function () {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}

/**
 * 屏幕旋转
 * @return {[type]} [description]
 */
tools.orient = function () {
  window.addEventListener('orientationchange', function(e){
    if (window.orientation == 0 || window.orientation == 180) {//ipad、iphone竖屏； ；Andriod竖屏
      //TODO  取消浮层
    } else if (window.orientation == 90 || window.orientation == -90) {//ipad、iphone横屏 Andriod横屏
      //TODO  显示浮层
    }
  });
}

/**
 * 获取location.search 参数
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
tools.getSreachString = function(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return "";
}










