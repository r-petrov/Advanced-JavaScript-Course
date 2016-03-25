/**
 * Created by PC on 16.02.2016 г..
 */
var Item = (function() {
    function Item(content, status) {
        this._content = content;
        this._isChecked = status;
    }

    Item.prototype.addToDOM = function addToDOM(parent) {
        var checkbox = document.createElement('input'),
            label = document.createElement('label'),
            checkBoxId = this._content.replace(' ', '-');

        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', checkBoxId);
        console.log(this._isChecked);
        //checkbox.setAttribute('checked', this._isChecked);
        label.innerText = this._content;

        parent.appendChild(checkbox);
        parent.appendChild(label);
    };

    return Item;
})();

var button = document.createElement('button'),
    parent = document.getElementById('wrapper');
window.onload = function() {
    parent.appendChild(button);
};

button.addEventListener('click', function() {
    var item = new Item('toilet paper', false);
    item.addToDOM(parent);
});