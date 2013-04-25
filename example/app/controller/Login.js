Ext.define('cis.controller.Login', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            loginView: 'loginview',
            categoryListView: 'categoryListview'
        },
        control: {
            loginView: {
                signInCommand: 'onSignInCommand'
            },
            categoryListView: {
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
 
            loginView.showSignInFailedMessage('Please enter your username and password.');
            return;
        }
 
        loginView.setMasked({
            xtype: 'loadmask',
            message: 'Signing In...'
        });
		
		Ext.util.JSONP.request({
			url: 'http://bangsar.publicvm.com/solucisv3_dev/index.php/api/Account/Login/',
			callbackKey: 'callback',
			scope: this, 
			params: {f_email: 'MY000000',f_password: 'admin'},
			callback: function(c) {
                a.data = c;
                console.log(a.data) //correct json data is here
            }
		});
		
		/*Ext.Ajax.request({
            url: 'http://bangsar.publicvm.com/solucisv3_dev/index.php/api/Account/Login/',
			withCredentials: true,
			useDefaultXhrHeader: false,
            params: {f_email: 'MY000000',f_password: 'admin'},
            success: function (response) {
 
                //var loginResponse = Ext.JSON.decode(response.responseText);
 
                if (loginResponse.msg === "false1") {
                    // The server will send a token that can be used throughout the app to confirm that the user is authenticated.
                    me.sessionToken = loginResponse.sessionToken;
                    me.signInSuccess();     //Just simulating success.
                } else {
                    me.signInFailure(loginResponse.message);
                }
            },
            failure: function (response) {
                me.sessionToken = null;
                me.signInFailure('Login failed. Please try again later.');
            }
        });*/
    },
 
    signInSuccess: function () {
        //console.log('Signed in.');
        
		var loginView = this.getLoginView();
		categoryListView = this.getcategoryListView();
		
        loginView.setMasked(false);
 
        Ext.Viewport.animateActiveItem(categoryListView, this.getSlideLeftTransition());
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