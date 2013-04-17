Ext.define('mobileV1.controller.Login', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainView: 'mainview',
			loginView: 'loginview',
			afterLoginView: 'afterloginview'
        },
        control: {
            loginView: {
                signInCommand: 'onSignInCommand'
            },
            mainView: {
                onSignOffCommand: 'onSignOffCommand'
            },
			
        }
    },
 
    // Session token
 
    sessionToken: null,
 
    // Transitions
    getSlideLeftTransition: function () {
        return { type: 'slide', direction: 'left' };
    },
 
    getSlideRightTransition: function () {
        return { type: 'slide', direction: 'right' };
    },
	
    onSignInCommand: function (view, username, password,remember) {
		if(Ext.device.Connection.isOnline() === true){
			console.log('Username: ' + username + '\n' + 'Password: ' + password);
	 
			var me = this,
				loginView = me.getLoginView();
				
	 
			if (username.length === 0 || password.length === 0) {
				Ext.Msg.alert('Please enter your username and password.');
				return;
			}
	 
			loginView.setMasked({
				xtype: 'loadmask',
				message: 'Signing In...'
			});
			
			var http = new XMLHttpRequest();
			var params = "f_email="+username+"&f_password="+password+"";
				http.open("POST", "http://bangsar.publicvm.com/solucisv3_dev/index.php/api/Account/Login", true);
				http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				http.setRequestHeader("Content-length", params.length);
				http.setRequestHeader("Connection", "close");
				http.onreadystatechange = function() {
				if (http.readyState == 4 && http.status == 200) {
					if(http.responseText == 'false1'){
						loginView.setMasked(false);
						Ext.Msg.alert('Login failed. Please try again later.');
						//loginView.showSignInFailedMessage('Login failed. Please try again later.');
					}else{
						//me.sessionToken = http.responseText;
						//Ext.getStore('Session');
						if(remember == 1){
							localStorage.status = 1;
						}
						me.signInSuccess();     
					}
				}
			}
			http.send(params);
		}else{
			Ext.Msg.alert('No Internet Connection');
		}
    },
 
    signInSuccess: function () {
        console.log('Signed in.');
		var loginView = this.getLoginView();
		var mainView = this.getMainView();
		afterLoginView = this.getAfterLoginView();
		
        loginView.setMasked(false);
		//loginView.removeAll();
		//Ext.Viewport.setActiveItem(1);
		//loginView.setItems('mainAcc');
        Ext.Viewport.setActiveItem({xtype: 'afterloginview'});
		//Ext.Viewport.add(afterLoginView);
    },
 
    singInFailure: function (message) {
        var loginView = this.getLoginView();
        loginView.showSignInFailedMessage(message);
        loginView.setMasked(false);
    },
 
    onSignOffCommand: function () {
 
        var me = this;
 
        /*Ext.Ajax.request({
            url: '../../services/logoff.ashx',
            method: 'post',
            params: {
                sessionToken: me.sessionToken
            },
	            success: function (response) {
	 
	                // TODO: You need to handle this condition.
	            },
	            failure: function (response) {
	 
	                // TODO: You need to handle this condition.
	            }
	        });*/
	 
	        Ext.Viewport.animateActiveItem(this.getLoginView(), this.getSlideRightTransition());
	    }
	});