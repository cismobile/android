Ext.define('cis.controller.Login', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainView: 'mainview',
			realmainView: 'realmainview',
			loginView: 'loginview',
            countryListView: 'countrylist'
        },
        control: {
            loginView: {
                signInCommand: 'onSignInCommand'
            },
            countryListView: {
                onSignOffCommand: 'onSignOffCommand'
            }
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
 
    onSignInCommand: function (view, username, password) {

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
		var params = "f_email="+'MY000000'+"&f_password="+'admin'+"";
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
					Ext.getStore('Session');
					me.signInSuccess();     
				}
			}
		}
		http.send(params);
    },
 
    signInSuccess: function () {
        console.log('Signed in.');
		var loginView = this.getLoginView();
		//countryListView = this.getCategoryListView();
		mainView = this.getMainView();
		
        loginView.setMasked(false);
 
        Ext.Viewport.animateActiveItem(mainView, this.getSlideLeftTransition());
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