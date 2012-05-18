Ext.define("FB.view.Login", {
    extend: 'Ext.Container',
    config: {
        cls: 'login-view',
        scrollable: 'vertical',
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        items: [
            {
                xtype: 'component',
                cls: 'logo'
            },
            {
                xtype: 'formpanel',
                scrollable: false,
                items: [
                    {
                        xtype: 'component',
                        cls: 'shadow'
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Email',
                        name: 'email',
                        cls: 'email'
                    },
                    {
                        xtype: 'passwordfield',
                        placeHolder: 'Password',
                        name: 'password',
                        cls: 'password'
                    }
                ]
            },
            {
                xtype: 'button',
                cls: 'login-btn',
                text: 'Log In'
            },
            {
                xtype: 'button',
                cls: 'signup-btn',
                text: 'Sign Up for Facebook'
            },
            {
                xtype: 'button',
                cls: 'help-btn',
                text: 'Help Center'
            },
            { 
                xtype: 'component',
                cls: 'help-line'
            }
        ]
    }
});