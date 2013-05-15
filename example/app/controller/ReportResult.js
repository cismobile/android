Ext.define('calculatorV1.controller.ReportResult', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainView: 'mainview',
        },
        control: {
            loginView: {
                signInCommand: 'onSignInCommand'
            }
        }
    },
 
    // Transitions
    getSlideLeftTransition: function () {
        return { type: 'slide', direction: 'left' };
    },
 
    getSlideRightTransition: function () {
        return { type: 'slide', direction: 'right' };
    },
	
    onSignInCommand: function (view, username, password) {
		
    },
 
    signInSuccess: function () {
        console.log('Signed in.');
		var loginView = this.getLoginView();
		mainView = this.getMainView();
		var afterLoginView = this.getAfterLoginView();
		
        loginView.setMasked(false);
		//loginView.removeAll();
		//Ext.Viewport.setActiveItem(1);
		//loginView.setItems('mainAcc');
        mainView.setActiveItem(1);
		//Ext.Viewport.add(afterLoginView);
    },
 
    singInFailure: function (message) {
        var loginView = this.getLoginView();
        Ext.Msg.alert('Connection Timeout');
		//loginView.showSignInFailedMessage(message);
        //loginView.setMasked(false);
    },
 
	});