Ext.application({
    name: 'FB',
    views: ['Login'],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {

        // Initialize the login view
        Ext.Viewport.add(Ext.create('FB.view.Login'));
    },

    onUpdated: function() {
        window.location.reload();
    }
});
