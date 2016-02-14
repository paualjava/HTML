/**
 * 
 * @authors wjsu
 * @date    2014-07-18 13:54:37
 * 在没有后端的
 * @version 1.0.0
 */
wizad.Server = function () {
	// this.configPath = configPath;
}

var server = wizad.Server.prototype;
server.config = [
	// {"itemName":"getCommonProvince","type":"POST","note":"通用获取省份信息接口V2","url":"/html5/common/getCommonProvince.do"},
	// {"itemName":"getCommonCityListByProvinceId","type":"POST","note":"通用获取城市信息接口V2","url":"/html5/common/getCommonCityListByProvinceId.do"},
	// 
	{"itemName":"getProvinceAndCityList","type":"POST","note":"通用获取省份城市信息接口V3","url":"/html5/common/getProvinceAndCityList.do"},
	{"itemName":"getCommonDealerList","type":"POST","note":"通用获取经销商信息接口V2","url":"/html5/common/getCommonDealerList.do"},
	{"itemName":"getCommonMaintenanceCenterList","type":"POST","note":"通用获取维修中心信息接口","url":"/html5/common/getCommonMaintenanceCenterList.do"},
	{"itemName":"validateTestDrive","type":"POST","note":"注册验证","url":"/html5/testDrive/validateTestDrive.do"},
	{"itemName":"saveTestDrive","type":"POST","note":"保存预约试驾信息V2","url":"/html5/testDrive/saveTestDrive.do"},
	{"itemName":"saveProductManual","type":"POST","note":"索取产品手册接口V2","url":"/html5/productManual/saveProductManual.do"},
	{"itemName":"getCreditCarTypeInfo","type":"POST","note":"车贷申请接口","url":"/html5/credit/getCreditCarTypeInfo.do"},
	{"itemName":"getCreditProvinceByCarType","type":"POST","note":"通过车型获得省份信息接口","url":"/html5/credit/getCreditProvinceByCarType.do"},
	{"itemName":"getCreditCityByProvince","type":"POST","note":"获取城市信息","url":"/html5/credit/getCreditCityByProvince.do"},
	{"itemName":"validateMobile","type":"POST","note":"车贷申请验证","url":"/html5/credit/validateMobile.do"},
	{"itemName":"saveCreditInfo","type":"POST","note":"车贷申请接口","url":"/html5/credit/saveCreditInfoV3.do"},
	{"itemName":"getCarType","type":"POST","note":"获取车款","url":"/html5/credit/getCarType.do"},
	{"itemName":"getCarSuite","type":"POST","note":"获取车贷套餐信息","url":"/html5/credit/getCarSuite.do"},
	{"itemName":"getCalculateProvince","type":"POST","note":"获得车贷省份","url":"/html5/credit/getCalculateProvince.do"},
	{"itemName":"getCalculateCityByProvince","type":"POST","note":"获得车贷城市信息","url":"/html5/credit/getCalculateCityByProvince.do"},
	{"itemName":"saveCalculate","type":"POST","note":"车贷计算接口","url":"/html5/credit/saveCalculate.do"},
	{"itemName":"getConfigList","type":"POST","note":"通过车型获取车型配置名称信息接口","url":"/html5/modelArea/getConfigList.do"},
	{"itemName":"getConfigCompare","type":"POST","note":"通过车型、配置ID获取车型对比详情接口","url":"/html5/modelArea/getConfigCompare.do"},
	{"itemName":"getCarList","type":"POST","note":"通过车型名获取车款信息接口","url":"/html5/modelArea/getCarList.do"},
	{"itemName":"testd","type":"POST","note":"收集的leads需要统一下发到CCC","url":"http://www.buick.com.cn/trytestapi/testd.aspx"},
	{"itemName":"saveTestDriveV3","type":"POST","note":"保存预约试驾信息V3","url":"/html5/testDrive/saveTestDriveV3.do"},
	{"itemName":"getGeolocationInfoByCityName","type":"POST","note":"根据城市获取","url":"/html5/dealers/getGeolocationInfoByCityName.do"},
	{"itemName":"getCarListV3","type":"POST","note":"通过车型名获取车款所有信息接口","url":"/html5/modelArea/getCarListV3.do"},
	{"itemName":"saveExcelleplank","type":"POST","note":"报名数据对接接口","url":"/activities/saveExcelleplank.do"},
	{"itemName":"news","type":"POST","note":"通过车型名称获取所有新闻列表数据","url":"http://www.buick.com.cn/mobilenews_cms/news_list.ashx"},
	{"itemName":"newsdetail","type":"POST","note":"通过车型名称获取所有新闻详细页面","url":"http://www.buick.com.cn/mobilenews_cms/news_detail.ashx"}
];

server.getConfig = function(item,param,callback) {
	var obj = {};
	for(var i=0; i < this.config.length;i++) {
		if(this.config[i].itemName == item) {
			obj = this.config[i];
			return obj;
		}
	}
}

server.getResult = function(item,param,callback,dataType) {
	if(dataType == "") {
		dataType = 'json';
	}
	var flag = this.getConfig(item);
	// if(flag.type == 'GET') {
	// 	$.get(flag.url,param,callback,dataType);
	// } else {

		$.post(flag.url,param,callback,dataType);
	// }
}

server.getProvinceAndCityList = function (param,callback) {
	this.getResult("getProvinceAndCityList",param,callback,"");
}

server.getCommonDealerList = function(param,callback) {
	this.getResult("getCommonDealerList",param,callback,"");
}

server.getCommonMaintenanceCenterList = function(param,callback) {
	this.getResult("getCommonMaintenanceCenterList",param,callback,"");
}

server.validateTestDrive = function(param,callback) {
	this.getResult("validateTestDrive",param,callback,"");
}
server.saveTestDrive = function(param,callback) {
	this.getResult("saveTestDrive",param,callback,"");
}

server.saveProductManual = function(param,callback) {
	this.getResult("saveProductManual",param,callback,"");
}

server.getCreditCarTypeInfo = function (param,callback) {
	this.getResult("getCreditCarTypeInfo",param,callback,"");
}

server.getCreditProvinceByCarType = function(param,callback) {
	this.getResult("getCreditProvinceByCarType",param,callback,"");
}

server.getCreditCityByProvince = function(param,callback) {
	this.getResult("getCreditCityByProvince",param,callback,"");
}

server.validateMobile = function(param,callback) {
	this.getResult("validateMobile",param,callback,"");
}

server.saveCreditInfo = function(param,callback) {
	this.getResult("saveCreditInfo",param,callback,"");
}
server.getCarType = function(param,callback) {
	this.getResult("getCarType",param,callback,"");
}

server.getCarSuite = function(param,callback) {
	this.getResult("getCarSuite",param,callback,"");
}

server.getCalculateProvince = function (param,callback) {
	this.getResult("getCalculateProvince",param,callback,"");
}

server.getCalculateCityByProvince = function(param,callback) {
	this.getResult("getCalculateCityByProvince",param,callback,"");
}

server.saveCalculate = function(param,callback) {
	this.getResult("saveCalculate",param,callback,"");
}

server.getConfigList = function(param,callback) {
	this.getResult("getConfigList",param,callback,"");
}

server.getConfigCompare = function(param,callback) {
	this.getResult("getConfigCompare",param,callback,"");
}
server.getCarList = function(param,callback) {
	this.getResult("getCarList",param,callback,"");
}

server.testd = function (param,callback) {
	this.getResult("testd",param,callback,"");
};

server.saveTestDriveV3 = function (param,callback) {
	this.getResult("saveTestDriveV3",param,callback,"");
};

server.getGeolocationInfoByCityName = function(param,callback) {
	this.getResult("getGeolocationInfoByCityName",param,callback,"");
};
server.getCarListV3 = function (param,callback) {
	this.getResult("getCarListV3",param,callback,"");
};

server.saveExcelleplank = function (param,callback) {
	this.getResult("saveExcelleplank",param,callback,"");
};

server.news = function (param,callback) {
	this.getResult("news",param,callback,"");
};

server.newsdetail = function (param,callback) {
	this.getResult("newsdetail",param,callback,"");
};