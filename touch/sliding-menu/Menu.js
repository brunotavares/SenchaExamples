Ext.define('SenchaCon.view.Menu',{
    extend: 'Ext.Container',
    xtype: 'mainmenu',
    config: {
        cls: 'mainmenu',
        docked: 'left',
		top: 0,
        left: 0,
        bottom: 0,
        zIndex: 0,
		width: 266,
        padding: '97 0 0 0',
        open: false,
        scrollable: 'vertical',
        defaultType: 'button',
        defaults: {
            textAlign: 'left'
        },
        items: [{
            text: 'Schedule',
            ui: 'mainmenu',
            href: '#sessions',
            iconCls: 'ico-schedule'
        },{
            text: 'Speakers',
            ui: 'mainmenu',
            href: '#speakers',
            iconCls: 'ico-speakers'
        },{
            text: 'Sponsors',
            ui: 'mainmenu',
            href: '#sponsors',
            iconCls: 'ico-sponsors'
        },{
            text: 'Maps',
            ui: 'mainmenu',
            iconCls: 'ico-maps',
            href: '#maps'
        },{
            text: 'More Info',
            ui: 'mainmenu',
            iconCls: 'ico-info',
            href: '#info'
        },{
            xtype: 'component',
            cls: 'divider',
            html: 'Social'
        },{
            text: '@SenchaCon',
            ui: 'mainmenu',
            href: '#feed',
            iconCls: 'ico-feed'
        },{
            text: '#SenchaCon',
            ui: 'mainmenu',
            href: '#tweets',
            iconCls: 'ico-twitter'
        },{
            text: 'Who\'s Here',
            ui: 'mainmenu',
            href: '#whoshere',
            iconCls: 'ico-location'
        }]
    },
    
    setParent: function(parent) {
        this.callParent(arguments);
        this.maskCmp = parent.add({
            xtype   : 'component',
            cls     : 'mainmenu-mask',
            top     : 0,
            zIndex  : 5000,
            hidden  : true,
			width   : 9999,
			left    : this.getWidth(),
			bottom  : 0
        });
        
        this.maskCmp.element.on({
            scope   : this,
            touchend: 'onMaskRelease'
        });
    },
    
    onMaskRelease: function() {
        this.setOpen(false);
    },
    
    onDestroy: function() {
        this.maskCmp.destroy();
        delete this.maskCmp;
        
        this.callParent(arguments);
    },
    
    toggle: function() {
        this.setOpen(!this.getOpen());
    },
    
    updateOpen: function(open) {
        var targetEl,
            parentCt = this.up();
        
        if (!parentCt) {
            return;
        }
        
        targetEl = parentCt.innerElement;
        
        if (open) {
			targetEl.translate(this.getWidth(), 0, 0);
            this.maskCmp.show();
        }
        else {
            targetEl.translate(0, 0, 0);
            this.maskCmp.hide();
        }
    }
});