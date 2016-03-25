/**
 * Created by PC on 09.02.2016 г..
 */
"use strict";
function createParagraph(id, text) {
    var paragraph = document.createElement('p');
    paragraph.innerText = text;

    appendParagraph(id, paragraph);
}

function appendParagraph(id, paragraph) {
    var parent = document.getElementById(id);
    var dFrag = document.createDocumentFragment();
    dFrag.appendChild(paragraph);
    parent.appendChild(dFrag);
}

createParagraph('wrapper', 'Some text');