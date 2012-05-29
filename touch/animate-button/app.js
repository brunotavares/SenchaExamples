Ext.application({
    name: 'Example',
    views: [
        'Main'
    ],
    launch: function() {
        Ext.Viewport.add(Ext.create('Example.view.Main'));
    }
});