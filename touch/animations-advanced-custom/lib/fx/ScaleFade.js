/**
 * @private
 * @author Bruno Tavares <bruno.tavares@sencha.com>
 */
Ext.define('Ext.fx.animation.ScaleFade', {
    extend: 'Ext.fx.animation.Abstract',

    alternateClassName: 'Ext.fx.animation.ScaleFadeIn',

    alias: ['animation.scalefade', 'animation.scaleFadeIn'],

    config: {
        /**
         * @cfg {Boolean} out True if you want to make this animation fade out, instead of fade in.
         * @accessor
         */

        out: false,

        before: {
            display: null,
            opacity: 0
        },

        after: {
            opacity: null
        },
        reverse: null
    },

    updateOut: function(newOut) {
        var to   = this.getTo(),
            from = this.getFrom();

        if (newOut) {
            from.set('opacity', 1);
            from.setTransform({
                scale: 1,
                translateY: 0
            });
            
            to.set('opacity', 0);
            to.setTransform({
                scale: 1.2,
                translateY: 100
            });
        } 
        else {
            from.set('opacity', 0);
            from.setTransform({
                scale: 1.2,
                translateY: 100
            });
            
            to.set('opacity', 1);
            to.setTransform({
                scale: 1,
                translateY: 0
            });
        }
    }
});