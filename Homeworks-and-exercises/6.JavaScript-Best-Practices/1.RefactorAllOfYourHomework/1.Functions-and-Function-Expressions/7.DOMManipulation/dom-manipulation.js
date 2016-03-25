/**
 * Created by PC on 05.02.2016 г..
 */
"use strict";
var domModule = (function() {
    function appendChild(element, child) {
        var elements;
        if (element.nodeType === document.ELEMENT_NODE) {
            element.appendChild(child);
        }
        else if (typeof element === 'string') {
            elements = document.querySelectorAll(element);
            for (var index in elements) {
                var currentElement = elements[index];
                currentElement.appendChild(child);
            }
        }
    }

    function removeChild(element, child) {
        var childElements;
        if (element.nodeType === document.ELEMENT_NODE) {
            if (child.nodeType === document.ELEMENT_NODE) {
                element.removeChild(child);
            }
            else if (typeof child === 'string') {
                childElements = element.querySelectorAll(child);
                for (var index in childElements) {
                    var currentChild = childElements[index];
                    element.removeChild(currentChild);
                }
            }
        }
        else if (typeof element === 'string') {
            var elements = document.querySelectorAll(element),
            var currentElement,
            var currentChild;
            for (var index in elements) {
                currentChild = elements[index];
                if (child.nodeType === document.ELEMENT_NODE) {
                    currentElement.removeChild(child);
                }
                else if (typeof child === 'string') {
                    childElements = currentElement.querySelectorAll(child);
                    for (var index in childElements) {
                        currentChild = childElements[index];
                        currentElement.removeChild(currentChild);
                    }
                }
            }
        }
    }

    function addHandler(element, eventType, eventHandler) {
        var elements;
        if (element.nodeType === document.ELEMENT_NODE) {
            if (element.addEventListener) {
                element.addEventListener(eventType, eventHandler, false);
            } else {
                element.attachEvent('on' + eventType, eventHandler);
            }
        }
        else if (typeof element === 'string') {
            elements = document.querySelectorAll(element);
            for (var index in elements) {
                var currentElement = elements[index];
                if (currentElement.addEventListener) {
                    currentElement.addEventListener(eventType, eventHandler, false);
                } else {
                    currentElement.attachEvent('on' + eventType, eventHandler);
                }
            }
        }
    }

    function retrieveElements(selector) {
        var elements = document.querySelectorAll(selector);

        return elements;
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    }
})();

var liElement = document.createElement("li"),
var elements;

// Appends a list item to ul.birds-list
domModule.appendChild(".birds-list", liElement);

/*
// Removes the first li child from the bird list
domModule.removeChild("ul.birds-list","li:first-child");

// Adds a click event to all bird list items
domModule.addHandler("li.bird", 'click', function(){ alert("I'm a bird!") });

domModule.removeChild("ul.birds-list","li:first-child");
elements = domModule.retrieveElements(".bird");
*/

