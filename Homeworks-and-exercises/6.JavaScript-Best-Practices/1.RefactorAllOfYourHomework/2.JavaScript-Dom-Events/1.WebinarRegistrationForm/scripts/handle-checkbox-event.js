/**
 * Created by PC on 08.02.2016 г..
 */
"use strict";
function handleCheckEvent(e) {
    if (e.target.checked === true) {
        var form = document.getElementsByTagName('form')[0],
            dFrag = document.createDocumentFragment(),
            labelsTexts = ['Фирма/Организация:', 'МОЛ:', 'ЕИК:', 'ИН по ДДС:', 'Адрес:'],
            inputsIds = ['organization', 'mol', 'eik', 'in-dds', 'address'],
            length = labelsTexts.length;
        for (var index = 0; index < length; index++) {
            var text = labelsTexts[index],
                id = inputsIds[index],
                label = createLabel(id, text),
                input = createInput(id, id, 'text');

            dFrag.appendChild(label);
            dFrag.appendChild(input);
        }

        form.appendChild(dFrag);
    }
    else {
        removeElements();
    }
}

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


var checkbox = document.getElementById('texture');
checkbox.addEventListener('click', handleCheckEvent, false);