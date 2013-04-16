Ext.define('mobileV1.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'loginview',
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
        title: 'Login',
        items: [{
                xtype: 'image',
                src: Ext.Viewport.getOrientation() == 'portrait' ? 'resources/image/login.png' : 'resources/image/login.png',
                style: Ext.Viewport.getOrientation() == 'portrait' ? 'width:128px;height:128px;margin:auto;margin-top:20px' : 'width:40px;height:40px;margin:auto;margin-top:20px'
            }, {
                xtype: 'label',
                html: 'Login failed. Please enter the correct credentials.',
                itemId: 'signInFailedLabel',
                hidden: true,
                hideAnimation: 'fadeOut',
                showAnimation: 'fadeIn',
                style: 'color:#990000;margin:5px 0px;'
            }, {
                xtype: 'fieldset',
                style: 'margin-top:30px',
                items: [{
                        xtype: 'textfield',
                        placeHolder: 'Username',
                        itemId: 'userNameTextField',
                        name: 'userNameTextField',
                        required: true
                    }, {
                        xtype: 'passwordfield',
                        placeHolder: 'Password',
                        itemId: 'passwordTextField',
                        name: 'passwordTextField',
                        required: true
                    }, {
						xtype: 'togglefield',
						name: 'remember_me',
						itemId: 'remember_me',
						label: 'Remember me?',
						value: 0,
						labelWidth: 150
					}
                ]
            }, {
                xtype: 'button',
                itemId: 'logInButton',
                ui: 'action',
                padding: '10px',
                text: 'Log In'
            }, {
				xtype: 'button',
				itemId: 'cancelButton',
				ui: 'cancel',
				style: 'margin-top: 10px',
				padding: '10px',
				text: 'Cancel'
			}
        ]
    }
});
