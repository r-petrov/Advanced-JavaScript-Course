/**
 * Created by PC on 09.02.2016 г..
 */
"use strict";
var HTMLGen = (function() {
    function createParagraph(id, text) {
        var paragraph = document.createElement('p');
        paragraph.innerText = text;

        appendElement(id, paragraph);
    }

    function createDiv(id, classAttribute) {
        var div = document.createElement('div');
        div.setAttribute('class', classAttribute);

        appendElement(id, div);
    }

    function createLink(id, text, url) {
        var a = document.createElement('a');
        a.innerText = text;
        a.setAttribute('href', url);

        appendElement(id, a);
    }

    function appendElement(id, child) {
        var parent = document.getElementById(id);
        var dFrag = document.createDocumentFragment();
        dFrag.appendChild(child);
        parent.appendChild(dFrag);
    }

    return {
        createParagraph: createParagraph,
        createDiv: createDiv,
        createLink: createLink,
    }
})();

HTMLGen.createParagraph('wrapper', 'Soft Uni');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');
