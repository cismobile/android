Ext.define('mobileV1.view.Login', {
    extend: 'Ext.Panel',
    xtype: 'loginview',
    id: 'login',
    requires: [
		'Ext.device.Connection',
		'Ext.form.FieldSet', 
		'Ext.form.Password', 
		'Ext.Label', 
		'Ext.Img', 
		'Ext.util.DelayedTask',
		'Ext.field.Toggle'
	],
	
    config: {
		padding: '20% 5% 5% 5%',
		iconCls: 'user',
		height: '100%',
		scrollable: 'vertical',
        items: [{
        	xtype: 'image',
        	src: 'resources/image/cislogo.png',
        	width: 150,
        	height: 150,
			style: 'margin-left:27%'
        },{
        	xtype: 'label',
        	itemId: 'signInFailedLabel'
        },{
        	xtype: 'textfield',
        	placeHolder: 'USERNAME',
        	itemId: 'userNameTextField',
			cls: 'textFieldRoundBorder',
        	style: {
        		// 'background': 'url("resources/image/LoginPage/text-field.png") no-repeat',
        		// 'margin': '0 auto 0 auto',
        		// 'padding-top': '13px'
				'margin-top': '10%'
        	}
        },{
        	xtype: 'passwordfield',
        	placeHolder: 'PASSWORD',
        	//inputType: 'password',
        	itemId: 'passwordTextField',
			cls: 'textFieldRoundBorder',
        	style: {
        		// 'background': 'url("resources/image/LoginPage/text-field.png") no-repeat',
        		// 'margin': '0 auto 0 auto',
        		// 'background-position': 'center bottom',
        		'margin-top': '3%'
        	}
        },{
        	/*
        	xtype: 'togglefield',
        	itemId: 'remember_me',
            label: 'Remember me?'
            */
        },{
        	xtype: 'button',
        	text: 'Login',
        	ui: 'confirm',
        	itemId: 'logInButton',
			cls: 'textFieldRoundBorder',
        	style: {
        		// 'background-image': 'url("resources/image/LoginPage/btn-login.png") no-repeat',
        		// 'margin': '0 auto 0 auto',
        		'margin-top': '3%',
				'min-height': '2.5em'
	        	
        	},
        	handler: function(button, event) {
        		if(Ext.device.Connection.isOnline() === true){
        			
        			var username = Ext.ComponentQuery.query('#userNameTextField')[0].getValue();
        			var password = Ext.ComponentQuery.query('#passwordTextField')[0].getValue();
        			//var remember = Ext.ComponentQuery.query('#remember_me')[0].getValue();
        			//console.log('Username: ' + username + '\n' + 'Password: ' + password);
        	 
        			var me = this,loginView = this.parent;
        			
        			if (username.length === 0 || password.length === 0) {
        				//Ext.Msg.alert('Please enter your username and password.');
						alert('Please enter your username and password.');
        				return;
        			}
        	 
        			loginView.setMasked({
        				xtype: 'loadmask',
						indicator: false,
        				message: 'Signing In...'
        			});
        			
        			var http = new XMLHttpRequest();
        			var params = "f_email="+username+"&f_password="+password;
        				http.open("POST", sysPath + "/api/Account/Login", true);
        				http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        				http.setRequestHeader("Content-length", params.length);
        				http.setRequestHeader("Connection", "close");
        				http.onreadystatechange = function() {
        				if (http.readyState == 4 && http.status == 200) {
							var rResult = Ext.JSON.decode(http.responseText);
        					if(http.responseText == 'false'){
        						loginView.setMasked(false);
        						//Ext.Msg.alert('Login failed. Please try again later.');
        						//loginView.showSignInFailedMessage('Login failed. Please try again later.');
								alert('Login failed. Please try again later.');
        					}else{
								sessionStorage.userid = rResult.f_user_id;
								sessionStorage.companycode = rResult.f_company_code;
								sessionStorage.pricecode = rResult.f_price_code;
								sessionStorage.loginame = rResult.f_login_name;
								
								getEaccountBalance(sessionStorage.userid,sessionStorage.companycode);
								getDistributorInfo(sessionStorage.userid);
								getEligibleBonus(269,'IN');
								
        						//me.sessionToken = http.responseText;
        						//Ext.getStore('Session');
        						
        						//if(remember == 1){
        						//	localStorage.status = 1;
        						//}
        						loginView.setMasked(false);
								
								if(sessionStorage.userid == 0){
									alert('Please login again.');
								}else{
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
									
									//Ext.getStore('naviStore').removeAll();
									Ext.getCmp('userName').setHtml('<div style="height:50px"><img height=40 width=40 src="resources/image/user.png""><div style="padding-left:50px;margin-top:-30px">'+rResult.f_login_name+'</div></div>');
									Ext.getStore('naviStore').setData(naviArray);
									
									if(sessionStorage.userid == 0 || sessionStorage.userid === undefined){
										Ext.ComponentQuery.query('#navHomeBtn')[0].hide();
									}else if(sessionStorage.userid > 0){
										Ext.ComponentQuery.query('#navHomeBtn')[0].show();
									}
									Ext.getCmp('maintab').setActiveItem(0);
								}
        					}
        				}
        			}
        			http.send(params);
        			
        		}else{
        			Ext.Msg.alert('No Internet Connection');
        		}
        	}
        
        },{
        	/*
        	xtype: 'button',
        	text: 'Cancel',
        	ui: 'decline',
        	itemId: 'logInButton',
        	handler: function(button, event) {
        		//var view = Ext.Viewport.animateActiveItem({xtype: 'loginview'},{ type: 'slide', direction: 'left' });
        		//var view = Ext.Viewport.animateActiveItem({xtype: 'mainview'},{ type: 'slide', direction: 'right' });
        		//view.show();
        		//Ext.Viewport.destroy();
        		var view1 = Ext.Viewport.animateActiveItem({xtype: 'mainview'},{ type: 'slide', direction: 'right' });

				view1.show(); //This is additionally done to fire showAnimation
        	}
        */
        }],
		listeners: {
			activate: function(){
				//Ext.getCmp('loginview').removeAll();
				//Ext.getCmp('loginview').add({xtype: 'statementview'});
				//Ext.getCmp('home').push({xtype: 'transferview',title: "TRANSFER"});
			}
		}	
        
    },
    onLogInButtonTap: function () {
    	alert('sssss');
        var me = this,
            usernameField = me.down('#userNameTextField'),
            passwordField = me.down('#passwordTextField'),
			rememberField = me.down('#remember_me'),
            label = me.down('#signInFailedLabel'),
            username = usernameField.getValue(),
            password = passwordField.getValue(),
			remember = rememberField.getValue();

        label.hide();

        // Using a delayed task in order to give the hide animation above
        // time to finish before executing the next steps.
        var task = Ext.create('Ext.util.DelayedTask', function () {

            label.setHtml('');

            me.fireEvent('signInCommand', me, username, password,remember);

            usernameField.setValue('');
            passwordField.setValue('');
        });

        task.delay(100);

    },
    showSignInFailedMessage: function (message) {
        var label = this.down('#signInFailedLabel');
        label.setHtml(message);
        label.show();
    }
});