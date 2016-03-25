/**
 * Created by PC on 06.02.2016 г..
 */
"use strict";
var specialConsole = (function() {
    function getPlaceholders(string) {
        var regex = /\{(\d)/g;
        var matches = string.match(regex);
        var placeholders = [];
        for (var index in matches) {
            var m = matches[index];
            placeholders.push(Number(m[1]));
        }

        return placeholders;
    }

    function sortNumbers(a, b) {
        return a - b;
    }

    function usePlaceholders(functionArguments) {
        var numberOfArguments = functionArguments.length - 1,
            message = functionArguments[0],
            placeholders = getPlaceholders(message),
            placeholder,
            placeholderForReplace,
            argument;

        placeholders.sort(sortNumbers);
        for (var index = 0; index < placeholders.length; index++) {
            placeholder = placeholders[index];
            if (placeholder >= numberOfArguments) {
                console.error('There are not enough passed arguments.');
                return;
            }
            else {
                placeholderForReplace = '{' + placeholder + '}';
                argument = functionArguments[index + 1].toString();
                message = message.replace(placeholderForReplace, argument);
            }
        }

        return message;
    }

    return {
        writeLine: function() {
            if (arguments.length === 0) {
                console.log();
                return;
            }


            else if (arguments.length === 1) {
                console.log(arguments[0]);
                return;
            }
            else {
                var message = usePlaceholders(arguments);
                console.log(message);
                return;
            }
        },

        writeError: function() {
            if (arguments.length === 0) {
                console.log();
                return;
            }


            else if (arguments.length === 1) {
                console.log(arguments[0]);
                return;
            }
            else {
                var message = usePlaceholders(arguments);
                console.log(message);
                return;
            }
        },

        writeWarning: function() {
            if (arguments.length === 0) {
                console.log();
                return;
            }


            else if (arguments.length === 1) {
                console.log(arguments[0]);
                return;
            }
            else {
                var message = usePlaceholders(arguments);
                console.log(message);
                return;
            }
        },

        writeInfo: function() {
            if (arguments.length === 0) {
                console.log();
                return;
            }


            else if (arguments.length === 1) {
                console.log(arguments[0]);
                return;
            }
            else {
                var message = usePlaceholders(arguments);
                console.log(message);
                return;
            }
        }
    };
})();

specialConsole.writeLine("Message: {0} {1} {2}", "hello", 'world', { name: "Gosho", toString: function() { return this.name }});
console.log();
specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeLine("Object: {0}", { name: "Gosho", toString: function() { return this.name }});
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");
specialConsole.writeError("Error object: {0}", { msg: "An error happened", toString: function() { return this.msg }});
