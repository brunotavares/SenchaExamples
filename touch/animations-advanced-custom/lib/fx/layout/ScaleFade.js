/**
 * @private
 * @author Bruno Tavares <bruno.tavares@sencha.com>
 */
Ext.define('Ext.fx.layout.card.ScaleFade', {
    extend: 'Ext.fx.layout.card.Style',
    alias: 'fx.layout.card.scalefade',

    config: {
        reverse: null,
        
        inAnimation: {
            type: 'scalefade'
        },
        outAnimation: {
            type: 'scalefadeout'
        }
    }
});