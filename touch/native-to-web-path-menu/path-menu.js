Ext.define('PathMenu',{
    extend: 'Ext.Container',
    xtype: 'pathmenu',
    config: {
        cls: Ext.baseCSSPrefix + 'pathmenu',
        layout: {
            type: 'vbox',
            align: 'start',
            pack: 'end'
        },
        items: [{
            xtype: 'container',
            cls: Ext.baseCSSPrefix + 'pathmenu-body',
            defaultType: 'button',
            items: [{
                ui: 'path',
                itemId: 'main-button',
                text: '+'
            },{
				iconCls: 'ico-photo'
			},{
				iconCls: 'ico-profile'
			},{
				iconCls: 'ico-location'
			},{
				iconCls: 'ico-music'
			},{
				iconCls: 'ico-message'
			},{
				iconCls: 'ico-sleep'
			}]
        },{
            xtype: 'component',
            html: 'Path Menu with Sencha Touch<br />by Bruno Tavares | extdesenv.com',
            top: 4,
            right: 4,
            style: 'font-size: 11px; color: #666; text-align: right;'
        }]
    },
    
    initialize: function() {
        var me = this,
            btnPath = me.down('button[ui=path]');
        
        btnPath.on('tap', me.onPathBtnTap, me);
        me.callParent(arguments);
    },
    
    onPathBtnTap: function(btn) {
        var pressedCls = Ext.baseCSSPrefix + 'button-pressed';
        
        btn.pressed = !btn.pressed;
        
        if (btn.pressed) {
            btn.addCls(pressedCls);
            this.fanOut();
        }
        else {
            btn.removeCls(pressedCls);
            this.fanIn();
        }
    },
    
    fanOut:  function() {
        this.getComponent(0).items.each(this.fanOutItem, this);
    },
    
    fanIn:  function() {
        this.getComponent(0).items.each(this.fanInItem, this);
    },
    
    //@private
    fanOutItem: function(item, index, len) {
        var angle, rad, sin, cos, x, y, style, difCenter,
            arc     = 90,
            distance= 150;
        
        //ignore main button
        if (index === 0) {
            return;
        }
        index--;
        len--;
        
        //calculate angle using items count
        if (len === 1) {
            angle = 0;
        }
        else {
            angle = (arc/(len-1)) * index;
        }
        
        //transform angle to rad
        rad = angle * Math.PI/180;
        
        //calculate cos and sin
        cos = Math.cos(rad);
        sin = Math.sin(rad);
        
        //find x,y using distance
        x = Math.ceil(distance * cos);
        y = Math.ceil(distance * sin * -1);
        
        style = {
            '-webkit-transition-delay': (30 * index) + 'ms',
            '-webkit-transform': 'translate3d('+x+'px, '+y+'px, 0)'
        };
        
        if (!item.rendered) {
            item.style = style;
        }
        else {
            item.element.applyStyles(style);
        }
    },
    
    //@private
    fanInItem: function(item, index, len) {
        //ignore main button
        if (index === 0) {
            return;
        }
        
        var style = {
            '-webkit-transition-delay': (30 * index) + 'ms',
            '-webkit-transform': 'translate3d(0px, 0px, 0)'
        };
        
        if (!item.rendered) {
            item.style = style;
        }
        else {
            item.element.applyStyles(style);
        }
    }
});