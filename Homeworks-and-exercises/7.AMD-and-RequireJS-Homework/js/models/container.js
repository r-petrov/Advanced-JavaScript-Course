define(['factory'], function(factory) {
    function Container(title) {
        this._title = title;
        this._internalSection = factory.createSection('internal');
    }

    Container.prototype.createDomElement = function () {
        var container = document.createElement('section'),
            heading = document.createElement('h1'),
            sectionWrapper = document.createElement('section'),
            input = document.createElement('input'),
            button = document.createElement('button');

        container.id = 'listWrapper';
        sectionWrapper.id = 'sectionWrapper';

        heading.innerHTML = this._title;

        input.type = 'text';
        input.placeholder = 'Title';
        input.required = 'required';
        input.name = 'sectionName';

        button.innerHTML = 'New createSection';

        button.name = 'addSectionButton';
        button.addEventListener('click', this._internalSection.addToDOM);

        container.appendChild(heading);
        container.appendChild(sectionWrapper);
        container.appendChild(input);
        container.appendChild(button);

        this._domElement = container;
    };

    Container.prototype.addToDOM = function () {
        var body = document.body;
        this.createDomElement();
        body.appendChild(this._domElement);
    };

    return Container;
});