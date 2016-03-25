/**
 * Created by PC on 25.02.2016 г..
 */
define(['container', 'section', 'listItem'], function(Container, Section, ListItem) {
    function createContainer(title) {
        return new Container(title);
    }

    function createSection(title) {
        return new Section(title);
    }

    function createListItem(title) {
        return new ListItem(title);
    }

    return {
        createContainer: createContainer,

        createSection: createSection,

        createListItem: createListItem
    }
});
