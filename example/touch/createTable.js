var addslashes = function( str ) {  
	return (str+'').replace(/([\\"'])/g, "\\$1").replace(/\0/g, "\\0");  
}  

var cTable = function(db) {
	db.transaction(function (tx) {
		// Country Table
		tx.executeSql('CREATE TABLE IF NOT EXISTS cms_country (f_id PRIMARY KEY, f_company_code VARCHAR(255),f_name VARCHAR(255),f_code VARCHAR(255),f_type VARCHAR(20))');
	});
}

var cdecimal = function (value, decPlaces, thouSeparator, decSeparator, currencySymbol) {
    var n = value,
        decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
        decSeparator = decSeparator == undefined ? "." : decSeparator,
        thouSeparator = thouSeparator == undefined ? "," : thouSeparator,
        currencySymbol = currencySymbol == undefined ? "" : currencySymbol,
        sign = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return sign + currencySymbol + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
};

var getDistributorInfo = function(id){
	var cHttp = new XMLHttpRequest();
	var params = "distributor_id="+id;
	cHttp.open("POST", sysPath + '/api/Distributor/DistributorbyID', true);
	cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	cHttp.setRequestHeader("Content-length", params.length);
	cHttp.setRequestHeader("Connection", "close");
	cHttp.onreadystatechange = function () {
		if (cHttp.readyState == 4 && cHttp.status == 200) {
			var tmpInfo = Ext.JSON.decode(cHttp.responseText);
			
			sessionStorage.address1 = tmpInfo.address.corr.f_address1;
			sessionStorage.address2 = tmpInfo.address.corr.f_address2;
			sessionStorage.address3 = tmpInfo.address.corr.f_address3;
			sessionStorage.address4 = tmpInfo.address.corr.f_address4;
			sessionStorage.email = tmpInfo.address.corr.f_email;
			sessionStorage.fax = tmpInfo.address.corr.f_fax;
			sessionStorage.mobile1 = tmpInfo.address.corr.f_mobile1;
			sessionStorage.telHome = tmpInfo.address.corr.f_tel_h;
			sessionStorage.telOffice = tmpInfo.address.corr.f_tel_o;
		}
	}
	cHttp.send(params);
}

var detectLogin = function(){
	if(sessionStorage.userid == 0 || sessionStorage.userid === undefined){
		Ext.getCmp('userontainer').removeAll();
		Ext.getCmp('userontainer').add({xtype: 'loginview'});
	}else if(sessionStorage.userid > 0){
		Ext.getCmp('userName').setHtml('<div style="height:50px"><img height=40 width=40 src="resources/image/user.png""><div style="padding-left:50px;margin-top:-30px">'+sessionStorage.loginame+'</div></div>');
		
		var counter = Ext.getStore('naviStore').getData().length;
		var naviArray = new Array;
		for(var a = 0;a < counter;a++){
			var naviObject = new Object;
			naviObject.group = Ext.getStore('naviStore').getData().getAt(a).data.group;
			
			if(Ext.getStore('naviStore').getData().getAt(a).data.type == 'login'){
				naviObject.title = '<div style="margin-left:4%"><img src="resources/image/userlogin.png"><div style="margin-left:40px;margin-top:-27px;font-weight:bold">Logout</div></div>';
				naviObject.type = 'logout';
			}else{
				naviObject.title = Ext.getStore('naviStore').getData().getAt(a).data.title;
				naviObject.type = Ext.getStore('naviStore').getData().getAt(a).data.type;
			}
			
			naviArray[a] = naviObject;
		}
		
		Ext.getStore('naviStore').setData(naviArray);
		Ext.getCmp('userontainer').removeAll();
		Ext.getCmp('userontainer').add({xtype: 'statementview'});
	}
}
			
var getEligibleBonus = function(id,companyCode){
	var cHttp = new XMLHttpRequest();
	var params = "ID="+id+"&comp="+companyCode;
	cHttp.open("POST", 'http://59.188.15.246/pjc/index.php/api/Distributor/EligibleBonus', true);
	cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	cHttp.setRequestHeader("Content-length", params.length);
	cHttp.setRequestHeader("Connection", "close");
	cHttp.onreadystatechange = function () {
		if (cHttp.readyState == 4 && cHttp.status == 200) {
			var tmpR = Ext.JSON.decode(cHttp.responseText);
			
			sessionStorage.eligibleBonus1 = tmpR.f_batch_eligible_to_bonus1;
			sessionStorage.eligibleBonus2 = tmpR.f_batch_eligible_to_bonus2;
			sessionStorage.maintenanceWeek = tmpR.f_maintain_batch;
			sessionStorage.sharingGroup = tmpR.f_sharing_group;
			sessionStorage.bonusGroup1 = tmpR.f_current_bonus_g1;
			sessionStorage.bonusGroup2 = tmpR.f_current_bonus_g2;
		}
	}
	cHttp.send(params);
}

var storeLanguage = function(code){
	var cHttp = new XMLHttpRequest();
	var params = "company_code="+ code;
	cHttp.open("POST", sysPath + '/api/Company/Languages', true);
	cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	cHttp.setRequestHeader("Content-length", params.length);
	cHttp.setRequestHeader("Connection", "close");
	cHttp.onreadystatechange = function () {
		if (cHttp.readyState == 4 && cHttp.status == 200) {
			var tmpR = eval("(" + cHttp.responseText + ")")
			Ext.getStore('LanguageStore').setData(tmpR.data);
		}
	}
	cHttp.send(params);
}

var storeNews = function(){
	var cHttp = new XMLHttpRequest();
	var params = "company="+localStorage.companyid+"&type=news&deleted=0&fields=cc.f_id,cc.f_title,cc.f_created_date,cc.f_description&date="+ Ext.Date.format(appDate,'Y-m-d');
	cHttp.open("POST", sysPath + '/cms/CmsArticleSetup/ArticleNews', true);
	cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	cHttp.setRequestHeader("Content-length", params.length);
	cHttp.setRequestHeader("Connection", "close");
	cHttp.onreadystatechange = function () {
		if (cHttp.readyState == 4 && cHttp.status == 200) {
			var tmpR = eval("(" + cHttp.responseText + ")");
			Ext.getStore('MainNews').setData(tmpR);
		}
	}
	cHttp.send(params);
}

var storeCompanyList = function(){
	var temp = new Array();
	
	db.transaction(function (tx) {
		tx.executeSql('SELECT * FROM cms_country', [], function (tx, results) {
			var len = results.rows.length;
			if(len > 0){
				var countryArray = new Array();
				for (var i = 0; i < len; i++) {
					temp[i] = results.rows.item(i);
					
					Ext.getStore('CompanyStore').setData(Ext.JSON.encode(temp));
				}
			}else{
				var cHttp = new XMLHttpRequest();
				var params = "";
				cHttp.open("POST", sysPath + '/api/Company/CountryList', true);
				cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				cHttp.setRequestHeader("Content-length", params.length);
				cHttp.setRequestHeader("Connection", "close");
				cHttp.onreadystatechange = function () {
					if (cHttp.readyState == 4 && cHttp.status == 200) {
						var tmpR = eval("(" + cHttp.responseText + ")");
						db.transaction(function (tx) {
							for(var a = 0;a < tmpR.length;a++){
								tx.executeSql("INSERT INTO cms_country (f_id,f_company_code,f_name,f_code,f_type) VALUES (?,?,?,?,?)",[tmpR[a].f_id,tmpR[a].f_company_code,tmpR[a].f_name,tmpR[a].f_code,tmpR[a].f_type]);
							}
						},function(){},function(){});
						Ext.getStore('CompanyStore').setData(tmpR);
					}
				}
				cHttp.send(params);
			}
		})
	});
};

var storeProductCategory = function(){
	var cHttp = new XMLHttpRequest();
	var params = "company="+localStorage.companyid+"&type=product&deleted=0&fields=f_id,f_title&date="+ Ext.Date.format(appDate,'Y-m-d');
	cHttp.open("POST", sysPath + '/cms/CmsProductSetup/ProductCategory', true);
	cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	cHttp.setRequestHeader("Content-length", params.length);
	cHttp.setRequestHeader("Connection", "close");
	cHttp.onreadystatechange = function () {
		if (cHttp.readyState == 4 && cHttp.status == 200) {
			var tmpR = eval("(" + cHttp.responseText + ")");
			Ext.getStore('ProductMainCategoryImage').setData(tmpR);
			
			// if(tmpR.length == 1)
				// newsImg = emptyImg;
			// else
				// proImg = imgProUrl;
		}
	}
	cHttp.send(params);
}

var storeProfile = function(){
	var cHttp = new XMLHttpRequest();
	var params = "company="+localStorage.companyid+"&type=profile&deleted=0&fields=cc.f_id,cc.f_title,cc.f_description&date="+ Ext.Date.format(appDate,'Y-m-d');
	cHttp.open("POST", sysPath + '/cms/CmsArticleSetup/ArticleNews', true);
	cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	cHttp.setRequestHeader("Content-length", params.length);
	cHttp.setRequestHeader("Connection", "close");
	cHttp.onreadystatechange = function () {
		if (cHttp.readyState == 4 && cHttp.status == 200) {
			var tmpR = eval("(" + cHttp.responseText + ")");
			Ext.getStore('People').setData(tmpR);
		}
	}
	cHttp.send(params);
}

var storeNewsImages = function(id){
	var cHttp = new XMLHttpRequest();
	var params = "id=2&type=article&m_type=images&deleted=0";
	cHttp.open("POST", sysPath + '/cms/CmsArticleSetup/AppNewsImages', true);
	cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	cHttp.setRequestHeader("Content-length", params.length);
	cHttp.setRequestHeader("Connection", "close");
	cHttp.onreadystatechange = function () {
		if (cHttp.readyState == 4 && cHttp.status == 200) {
			var tmpR = eval("(" + cHttp.responseText + ")");
			Ext.getStore('newsimage').setData(tmpR);
		}
	}
	cHttp.send(params);
}

var storeLocationStates = function(id){
	var cHttp = new XMLHttpRequest();
	var params = "level=2&order=true&company_id="+localStorage.companyid+"&node="+id+"&type=location&deleted=0&date="+ Ext.Date.format(appDate,'Y-m-d');
	cHttp.open("POST", sysPath + '/cms/CmsLocationSetup/LocationStates', true);
	cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	cHttp.setRequestHeader("Content-length", params.length);
	cHttp.setRequestHeader("Connection", "close");
	cHttp.onreadystatechange = function () {
		if (cHttp.readyState == 4 && cHttp.status == 200) {
			var tmpR = eval("(" + cHttp.responseText + ")");
			Ext.getStore('LocationSelectState').setData(tmpR.data);
		}
	}
	cHttp.send(params);
}

var storeLocationSecStates = function(id,title){
	var cHttp = new XMLHttpRequest();
	var params = "level=3&order=true&company_id="+localStorage.companyid+"&node="+id+"&type=location&deleted=0&date="+ Ext.Date.format(appDate,'Y-m-d');
	cHttp.open("POST", sysPath + '/cms/CmsLocationSetup/LocationSecStates', true);
	cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	cHttp.setRequestHeader("Content-length", params.length);
	cHttp.setRequestHeader("Connection", "close");
	cHttp.onreadystatechange = function () {
		if (cHttp.readyState == 4 && cHttp.status == 200) {
			var tmpR = eval("(" + cHttp.responseText + ")");
			//if(tmpR != ""){
				Ext.getStore('LocationSelectLocation').setData(tmpR.data);
				Ext.Viewport.add(Ext.create('mobileV1.view.SelectLocation'));
				Ext.getCmp('location').push({xtype:'selectlocationview',title: title});
				
			// }else{
				// Ext.Viewport.add(Ext.create('mobileV1.view.EmptyData'));
				// Ext.getCmp('location').push({xtype:'EmptyDataView',title: e.data.f_title});
			// }
		}
	}
	cHttp.send(params);
}

var getEaccountBalance = function(id,code){
	var cHttp = new XMLHttpRequest();
	var params = "distributor_id="+id+"&company_code="+code;
	cHttp.open("POST", sysPath + '/api/Eaccount/CheckBalanceById', true);
	cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	cHttp.setRequestHeader("Content-length", params.length);
	cHttp.setRequestHeader("Connection", "close");
	cHttp.onreadystatechange = function () {
		if (cHttp.readyState == 4 && cHttp.status == 200) {
			var eaccbal = Ext.JSON.decode(cHttp.responseText);
			
			sessionStorage.bal = eaccbal.f_eacc_bal;
		}
	}
	cHttp.send(params);
}

var submitWithdraw = function(id,code,amt,rmk){
	var view = Ext.getCmp('withdrawBtn').getParent();
	view.setMasked({xtype: 'loadmask',indicator: false,message: 'Loading...'});
	
	var cHttp = new XMLHttpRequest();
	var params = "distributor_id="+id+"&company_code="+code+"&amount="+amt+"&remarks="+rmk+"&date="+ Ext.Date.format(new Date(),'Y-m-d');
	cHttp.open("POST", sysPath + '/api/Eaccount/Withdraw', true);
	cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	cHttp.setRequestHeader("Content-length", params.length);
	cHttp.setRequestHeader("Connection", "close");
	cHttp.onreadystatechange = function () {
		if (cHttp.readyState == 4 && cHttp.status == 200) {
			var eaccbal = Ext.JSON.decode(cHttp.responseText);
			if(eaccbal === true){
				view.setMasked(false);
				sessionStorage.bal -= amt;
				
				Ext.ComponentQuery.query('#eaccBal')[0].setValue(cdecimal(sessionStorage.bal, 2, ',', '.'));
				Ext.ComponentQuery.query('#withdrawAmount')[0].reset();
				Ext.ComponentQuery.query('#withdrawRemark')[0].reset();
				alert("Withdraw Successfully");
			}else{
				view.setMasked(false);
			}
		}
	}
	cHttp.send(params);
}

var submitTransfer = function(id,code,userToCode,ePwd,amt,rmk){
	var view = Ext.getCmp('transferBtn').getParent();
	view.setMasked({xtype: 'loadmask',indicator: false,message: 'Loading...'});
	
	var cHttp = new XMLHttpRequest();
	var params = "distributor_id="+id+"&company_code="+code+"&amount="+amt+"&remarks="+rmk+"&ePassword="+ePwd+"&user_to_code="+userToCode+"&date="+ Ext.Date.format(new Date(),'Y-m-d');
	cHttp.open("POST", sysPath + '/api/Eaccount/FundTransfer', true);
	cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	cHttp.setRequestHeader("Content-length", params.length);
	cHttp.setRequestHeader("Connection", "close");
	cHttp.onreadystatechange = function () {
		if (cHttp.readyState == 4 && cHttp.status == 200) {
			var eaccbal = Ext.JSON.decode(cHttp.responseText);
			if(eaccbal === true){
				view.setMasked(false);
				sessionStorage.bal -= amt;
				
				Ext.ComponentQuery.query('#eaccBal')[0].setValue(cdecimal(sessionStorage.bal, 2, ',', '.'));
				Ext.ComponentQuery.query('#transferAmount')[0].reset();
				Ext.ComponentQuery.query('#transferRemark')[0].reset();
				Ext.ComponentQuery.query('#transferRefNo')[0].reset();
				Ext.ComponentQuery.query('#transferPassword')[0].reset();
				Ext.ComponentQuery.query('#transferTo')[0].reset();
				alert("Transfer Successfully");
			}else{
				view.setMasked(false);
			}
		}
	}
	cHttp.send(params);
}