console.log('App.js is running!');

// JSX - Javascript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Machine learning rocks!',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
};

const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
        <p>{app.options.length}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option'/>
            <button>Add Option</button>
        </form>
    </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

