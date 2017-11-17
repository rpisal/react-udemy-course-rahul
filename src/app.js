console.log('App.js is running!');

// JSX - Javascript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Machine learning rocks!',
    options: [
        'One',
        'Two'
    ]
};

const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    console.log('addOne');
};
const subtractOne = () => {
    console.log('subtractOne');
};
const reset = () => {
    console.log('reset');
};
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={subtractOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);