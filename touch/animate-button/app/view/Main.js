Ext.define('Example.view.Main', {
    extend: 'Ext.Container',
    config: {
        html: 'Example component animations',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                xtype: 'title',
                title: 'Example Animation',
                centered: true,
                hidden: true
            },{
                xtype: 'spacer'
            },{
                iconCls: 'action',
                action: 'share',
                iconMask: true,
                hidden: true
            }]
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