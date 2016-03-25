/**
 * Created by PC on 08.02.2016 г..
 */
"use strict";
var createLabel = function createLabel(inputId, innerText) {
    var label = document.createElement('label');
    label.setAttribute('class', 'required added');
    label.innerText = innerText;

    return label;
};

var createInput = function createInput(id, name, type) {
    var input = document.createElement('input');
    input.setAttribute('id', id);
    input.setAttribute('class', 'added');
    input.setAttribute('name', name);
    input.setAttribute('type', type);
    input.setAttribute('required', 'required');

    return input;
};

var removeElements = function removeElements() {
    var className = 'added';
    var elements = document.getElementsByClassName(className);
    for (var index in elements) {
        var element = elements[index];
        element.parentNode.removeChild(element);
    }
};

function handleCheckEvent(e) {
    if (e.target.checked === true) {
        var form = document.getElementsByTagName('form')[0];
        var dFrag = document.createDocumentFragment();
        var labelsTexts = ['Фирма/Организация:', 'МОЛ:', 'ЕИК:', 'ИН по ДДС:', 'Адрес:'];
        var inputsIds = ['organization', 'mol', 'eik', 'in-dds', 'address'];
        var length = labelsTexts.length;
        for (var index = 0; index < length; index++) {
            var text = labelsTexts[index];
            var id = inputsIds[index];
            var label = createLabel(id, text);
            var input = createInput(id, id, 'text');
            dFrag.appendChild(label);
            dFrag.appendChild(input);
        }

        form.appendChild(dFrag);
    }
    else {
        removeElements();
    }
}

var checkbox = document.getElementById('texture');
checkbox.addEventListener('click', handleCheckEvent, false);