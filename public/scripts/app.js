'use strict';

console.log('App.js is running!');

// JSX - Javascript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Machine learning rocks!',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'p',
        null,
        app.options.length
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    ),
    React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add Option'
        )
    )
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
