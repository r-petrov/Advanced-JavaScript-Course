/**
 * Created by PC on 15.02.2016 г..
 */
"use strict";


var elementsCreator = (function() {
    function createHeader(parent, titleSize, title) {
        var headerTag = 'header',
            header = document.createElement(headerTag),
            h = document.createElement(titleSize);
        h.innerText = title;

        header.appendChild(h);
        parent.appendChild(header);
    }

    function createElements(parentElement, className, placeholder, buttonName, objectName) {
        var dFrag = document.createDocumentFragment(),
            sectionTag = 'section',
            inputTag = 'input',
            buttonTag = 'button',
            inputFieldType = 'text',
            section = document.createElement(sectionTag),
            inputField = document.createElement(inputTag),
            button = document.createElement(buttonTag);

        section.class = className;
        inputField.type = inputFieldType;
        inputField.class = className;
        inputField.placeholder = placeholder;
        button.class = className;
        button.innerText = buttonName;

        dFrag.appendChild(section);
        dFrag.appendChild(inputField);
        dFrag.appendChild(button);
        parentElement.appendChild(dFrag);
    }

    return {
        createHeader: createHeader,
        createElements: createElements
    }
})();

var todoModule = (function() {
    function handleButtonClick(button, inputData) {
        var event = 'click';
        button.addEventListener(event, function() {
            obj.addToDOM();
        }, false);
    }

    var Item = (function() {
        function Item(content, status) {
            this._content = content;
            this._isChecked = status;
        }

        Item.prototype.addToDOM = function addToDOM(parent) {
            var inputTag = 'input',
                labelTag = 'label',
                inputTagType = 'checkbox',
                checkbox = document.createElement(inputTag),
                label = document.createElement(labelTag),
                checkBoxId = this._content.replace(' ', '-');

            checkbox.id = checkBoxId;
            checkbox.type = inputTagType;
            //checkbox.setAttribute('checked', this._isChecked);
            label.innerText = this._content;

            parent.appendChild(checkbox);
            parent.appendChild(label);
        };

        return Item;
    })();

    var Section  = (function() {
        function Section(title, items) {
            this._title = title;
            this._items = items;
        }

        Section.prototype.addToDOM = function addToDOM(parent) {
            //var parent = document.querySelector('section.container');
            var titleSize = 'h4',
                className = this._title.replace(' ', '-'),
                placeholder = 'Add item...',
                buttonName = '+';

            elementsCreator.createHeader(parent, titleSize, this._title);
            if (this._items.length > 0) {
                this._items.forEach(function(i) {
                    i.prototype.addToDOM();
                });
            }

            elementsCreator.createElements(parent, className, placeholder, buttonName);
        };

        return Section;
    })();

    var Container = (function() {
        function Container(title, sections) {
            this._title = title;
            this._sections = sections;
        }

        Container.prototype.addToDOM = function addToDOM(parent) {
            var titleSize = 'h1',
                className = 'container',
                placeholder = 'Title...',
                buttonName = 'New Section',
                objectName = Section;

            elementsCreator.createHeader(parent, titleSize, this._title);
            if (this._sections.length > 0) {
                var lastSection = this._sections[this._sections.length - 1];
                lastSection.addToDOM();
            }

            elementsCreator.createElements(parent, className, placeholder, buttonName);

        };

        return Container;
    })();

    return {
        Item: Item,
        Section: Section,
        Container: Container
    }
})();

/*var body = document.getElementById('body');
body.onload = function onLoadPage() {
    var section = document.getElementById('main-section');
    createElements(section);
};*/

window.onload = function() {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        date = new Date(),
        currentDay = days[date.getDay()],
        containerTitle = currentDay + ' TODO List',
        parent = document.getElementById("wrapper");

    var container = new todoModule.Container(containerTitle, []);
    container.addToDOM(parent);

    var newSectionButton = document.querySelector('button.' + className);
    newSectionButton.addEventListener('click', function() {
        var input = document.querySelector('input.' + className),
            sectionTitle = input.value,
            section = new todoModule.Section(sectionTitle, []);

        container._sections.push(section);
        container.addToDOM();
    });
};

