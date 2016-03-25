/**
 * Created by PC on 05.02.2016 г..
 */
//"use strict";

/*
*Моля, ако имаш време да проверяваш, ми кажи:
 * 1) защо първата функция гърми в конзолата на браузъра, а втората - не,
* при условие, че кодът на тези места е еднакъв;
* 2) Защо като използвам скрипта от този файл, не намира нищо в тази операция var node = document.querySelector(selector);,
 * а когато използвам скрипта директно в html файла, работи коректно?
 * Благодаря предварително!*/

/*
function traverse(selector) {
    var node = document.querySelector(selector);
    if (node !== undefined && node !== null) {
        traverseNode(node, '');
    }

    function traverseNode(node, spacing) {
        spacing = spacing || '\t';
        var output = spacing + node.nodeName + ':';
        var idName = node.getAttribute("id");
        var className = node.getAttribute("class");
        if (idName !== undefined && idName !== null) {
            output += (' id="' + idName + '"');
        }

        if (className !== undefined && className !== null) {
            output += (' class="' + className + '"');
        }

        console.log(output);

        var len = node.childNodes.length;
        for (var i = 0; i < len; i += 1) {
            var child = node.childNodes[i];
            if (node.nodeType === document.ELEMENT_NODE) {
                traverseNode(child, spacing + '\t');
            }
        }

        console.log(spacing + '/' + node.nodeName);
    }
}

var selector = ".birds";
traverse(selector);
*/

function traverse(selector) {
    var node = document.querySelector(selector);
    if (node !== undefined && node !== null) {
        traverseNode(node, '');
    }


    function traverseNode(node, spacing) {
        spacing = spacing || '  ';
        var nodeId = node.getAttribute('id');
        var nodeClass = node.getAttribute('class');
        var output = spacing + node.nodeName.toLowerCase() + ":";
        if (nodeId != null) {
            output += " id=\"" + nodeId + "\"";
        }

        if (nodeClass != null) {
            output += " class=\"" + nodeClass + "\"";
        }

        console.log(spacing + output);

        for (var i = 0, len = node.childNodes.length; i < len; i += 1) {
            var child = node.childNodes[i];
            if (child.nodeType === document.ELEMENT_NODE) {
                traverseNode(child, spacing + '  ');
            }
        }
    }
}

var selector = ".birds";
traverse(selector);
