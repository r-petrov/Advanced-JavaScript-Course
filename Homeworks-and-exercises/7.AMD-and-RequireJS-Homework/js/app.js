(function() {
    require.config({
        paths: {
            'factory': 'factory',
            'container': 'models/container',
            'section': 'models/section',
            'listItem': 'models/listItem'
        }
    })
})();

require(['factory'], function(factory) {
    var list = factory.createContainer('Tuesday TODO List');

    list.addToDOM();
});

