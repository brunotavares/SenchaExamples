Ext.define('Example.view.Main', {
    extend: 'Ext.Container',
    config: {
        padding: 10,
        html: 'The title component has a slide up animation, and the ' +
                'button on the right has a fade animation with 500ms delay',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            title: {
                title: 'Example Animation',
                centered: true,
                hidden: true
            },
            items: [{
                xtype: 'spacer'
            },{
                iconCls: 'action',
                action: 'share',
                iconMask: true,
                hidden: true
            }]
        },{
            xtype: 'button',
            text: 'Refresh to Animate!',
            handler: function() {
                location.reload();
            }
        }]
    },
    
    show: function() {
        this.callParent(arguments);

        this.down('title').show({
            type: 'slide',
            direction: 'up',
            duration: 1000
        });
        
        this.down('button[action=share]').show({
            type: 'fadeIn',
            duration: 1000,
            delay: 500
        });
    }
});